
import { useEffect, useState } from "react";
import {
  Button,
  Input,
  Typography,
} from "@material-ui/core";
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Cookies from 'universal-cookie';
import { getBhdTokenImage, getTokenImage, trim } from "../../helpers";
import "./stake.scss";
import { Skeleton } from "@material-ui/lab";
import SpecterSwapIcon from "../../assets/icons/specter-swap.png";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const sBhdImg = getTokenImage("sbhd");
const bhdImg = getBhdTokenImage(16, 16);

const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
]

function Stake() {
  const cookies = new Cookies()
  const [fromToken, setFromToken] = useState('BNB')
  const [toAddress, setToAddress] = useState('BSC')
  const [toToken, setToToken] = useState('ETH')
  const [fromValue, setFromValue] = useState('1')
  const [toValue, setToValue] = useState('')
  const [priceData, setPriceData] = useState('')
  const [orderData, setOrderData] = useState('')
  const [isFrom, setIsFrom] = useState(true)

 
  const handleFromChange = (event) => {
    setIsFrom(true)
    if (priceData.from.amount > priceData.from.max) {
      alert("You exceeded the limit of " + priceData.from.max + priceData.from.currency + ".")
    }
    if (priceData.from.amount < priceData.fromin) {
      alert("You exceeded the limit of " + priceData.from.min + priceData.from.currency + ".")
    }
    setFromValue(event.target.value)
  }
  const handleToChange = (event) => {
    setIsFrom(false)
    setToValue(event.target.value)
  }
  const handleFromTokenChange = (event, newValue) => {
    console.log(newValue)
    if (newValue === null) {
      setFromToken('BNB')
    } else if(newValue?.currency === toToken) {
      setFromToken(toToken)
      setToToken(fromToken)
    } else {
      setFromToken(newValue?.currency)
    }
  }
  const handleToTokenChange = (event, newValue) => {
    if (newValue === null) {
      setToToken('ETH')
    } else if (newValue?.currency === fromToken){
      setFromToken(toToken)
      setToToken(fromToken)
    } 
    else {
      setToToken(newValue?.currency)
    }
  }

  const handleFromClick = (event) => {
    // alert("min: " + priceData.from.min + priceData.from.currency + " max: " + priceData.from.max + priceData.from.currency )
  }
  const handleToClick = (event) => {
    // alert("min: " + priceData.to.min + priceData.to.currency + " max: " + priceData.to.max + priceData.to.currency )
  }

  const handleAddressChange = (event) => {
    setToAddress(event.target.value)
  }

  const changeCurrency = (event) => {
    setFromToken(toToken)
    setToToken(fromToken)
  }
  let from, to

  useEffect(() => {
    const api = async () => {
      if (isFrom) {
        to = toToken
        from = fromValue.toString() + ' ' + fromToken
      } else {
        from = fromToken
        to = toValue.toString() + ' ' + toToken
      }
      const res = await fetch("https://specterswap-api.vercel.app/getPrice",
        {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            from: from,
            to: to,
            type: 'float'
          })
        })

      res.json().then((data) => {
        if (isFrom) {
          setToValue(data.to?.amount)
        } else {
          setFromValue(data.from?.amount)
        }
        console.log(data)
        setPriceData(data);
      })
    }
    if ((isFrom && fromValue > 0) || (!isFrom && toValue > 0)) {
      api();
    }
    console.log(isFrom,fromToken, toToken, fromValue, toValue)

  }, [fromToken, toToken, fromValue, toValue])

  const createOrder = async () => {
    if (isFrom) {
      to = toToken
      from = fromValue.toString() + ' ' + fromToken
    } else {
      from = fromToken
      to = toValue.toString() + ' ' + toToken
    }
    console.log(toAddress)
    const res = await fetch("https://specterswap-api.vercel.app/createOrder",
        {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            from: from,
            to: to,
          toAddress: toAddress
          })
        })

      res.json().then((data) => {
        console.log(data)
        setOrderData(data);
        cookies.set(data.id, data.token)
        window.open(window.location.origin + '/#/order/' + data.id, '_self')
      })
  }
  return (
    <>
      <div id="stake-view">
        <Box>
          <Box style={{ textAlign: 'center', marginBottom: '30px' }}>
            <img src={SpecterSwapIcon} width={200} />
          </Box>

          <Box style={{ display: 'flex', background: 'white', borderRadius: '10px', marginTop: '24px', maxWidth: '650px', color: 'black', margin: 'auto', justifyContent: 'space-between' }}>
            <Box style={{ padding: '4px 8px' }}>
              <Typography>Amount to send:</Typography>
              <Input style={{ color: 'black', fontSize: '24px', marginTop: '12px' }} onChange={handleFromChange} onClick={handleFromClick} value={fromValue}/>
            </Box>
            <Box style={{ padding: '4px 8px', textAlign: 'right' }}>
              {/* <Typography>
                BNB (BEP-20)
              </Typography> */}
               <Autocomplete
                disablePortal
                disableClearable
                id="combo-box-demo"
                defaultValue="BNB"
                value={fromToken}
                options={currencies}
                onChange={handleFromTokenChange}
                sx={{ width: 300, textAlign: 'right' }}
                renderOption={(props, option) => 
                  <Box component="li" sx={{ '& > div': { mr: 2, flexShrink: 0 } }} {...props} >
                    <div className={'svgcoin ' + option?.currency.toLowerCase()} style={{width: '24px', height: '24px'}}/>
                    {option.label}
                  </Box>
                }
                renderInput={(params) => 
                  <div style={{display: 'flex', position: 'relative'}}>
                    {fromToken && <div className={'svgcoin ' + fromToken.toLowerCase()} style={{width: '24px', height: '24px', marginTop: '12px', position: 'absolute', right: '40px'}}/>}
                    
                    <TextField className={'choose-currency'} {...params} sx={{color: 'black', textAlign: 'right'}} />
                  </div>
                }
              />
              <Typography style={{ paddingTop: '16px' }}>1 {fromToken} = {priceData ? priceData.from?.rate + ' ' + toToken : <Skeleton />} </Typography>

            </Box>
          </Box>
          <Box style={{ textAlign: 'center' }}>
            <Button className="changeCurrencyButton" style={{ width: '10px' }} onClick={changeCurrency}><img src="/swapIcon.png" width="30px"></img></Button>
          </Box>
          <Box style={{ display: 'flex', background: 'white', borderRadius: '10px', maxWidth: '650px', color: 'black', margin: 'auto', justifyContent: 'space-between' }}>
            <Box style={{ padding: '4px 8px' }}>
              <Typography>Est. Amount to receive:</Typography>
              <Input style={{ color: 'black', fontSize:'24px', marginTop: '12px' }} onChange={handleToChange} onClick={handleToClick} value={toValue}/>
            </Box>
            <Box style={{ padding: '4px 8px', textAlign: 'right' }}>
              {/* <Typography>ETH</Typography> */}
              <Autocomplete
                disablePortal
                disableClearable
                id="combo-box-demo"
                defaultValue="ETH"
                value={toToken}
                options={currencies}
                onChange={handleToTokenChange}
                sx={{ width: 300, textAlign: 'right' }}
                renderOption={(props, option) => 
                  <Box component="li" sx={{ '& > div': { mr: 2, flexShrink: 0 } }} {...props} >
                    <div className={'svgcoin ' + option?.currency.toLowerCase()} style={{width: '24px', height: '24px'}}/>
                    {option.label}
                  </Box>
                }
                renderInput={(params) => 
                  <div style={{display: 'flex', position: 'relative'}}>
                    {toToken && <div className={'svgcoin ' + toToken.toLowerCase()} style={{width: '24px', height: '24px', marginTop: '12px', position: 'absolute', right: '40px'}}/>}
                    
                    <TextField className={'choose-currency'} {...params} sx={{color: 'black', textAlign: 'right'}} />
                  </div>
                }
              />
              <Typography style={{ paddingTop: '16px' }}>1 {toToken} = {priceData ? priceData.to?.rate + ' ' + fromToken : <Skeleton />} </Typography>
            </Box>
          </Box>
          <Box style={{ display: 'flex', background: 'white', borderRadius: '10px', maxWidth: '650px', color: 'black', margin: 'auto', marginTop: '28px', justifyContent: 'space-between' }}>
            <Box style={{ padding: '4px 8px' }}>
              <Typography>Recipient Address:</Typography>
              <Input className="walletAddress" style={{ color: 'black', fontSize: '25px', width: '620px' }} placeholder={"Wallet Address"} onChange={handleAddressChange} />
              {/* <Tooltip title="Please fill out this field.">
              </Tooltip> */}
            </Box>
          </Box>
          <Box style={{ textAlign: 'center', marginTop: '16px' }}>
            <Typography textAlign='center'>Payment that comes from Smart Contracts are not accepted.</Typography>
          </Box>
          <Box style={{ textAlign: 'center', marginTop: '24px' }}>
            <Button className="swapButton" style={{ color: '#000000', background: '#ffffff', borderRadius: '20px', width: '500px' }} onClick={createOrder}>Send Anonymously</Button>
          </Box>
        </Box>
      </div>
    </>
  );
}

export default Stake;
