import React, { useEffect, useState } from 'react';
import './index.css';
import AmountInput from './components/AmountInput';
import FromCurrency from './components/FromCurrency';
import ToCurrency from './components/ToCurrency';
import Exchange from './components/Exchange';
import Output from './components/Output';
import { ClipLoader } from 'react-spinners';
import currencies from '../../seeds/commonCurrency.json';


const CurrencyConverter: React.FC = () => {
  const [selectAmount, setSelectAmount] = useState<number>(1);
  const [currencySymbol, setCurrencySymbol] = useState("$");
  const URL = `https://v6.exchangerate-api.com/v6/${process.env.REACT_APP_EXCHANGE_API_KEY}/pair`

  let currenciesOption: { value: string, label: string, name: string, symbol: string, index: number }[] = [];
  Object.entries(currencies).map(([currency, value], index) => {
    currenciesOption.push({
      value: value.code,
      label: `${value.code} - ${value.name}`,
      name: value.name,
      symbol: value.symbol,
      index: index
    });
  });

  const [selCurrencyFrom, setSelCurrencyFrom] = useState(currenciesOption[0])
  const [selCurrencyTo, setSelCurrencyTo] = useState(currenciesOption[0])

  const [isOut, setIsOut] = useState(false)
  const [isLoading, setLoading] = useState(false)
  const [exchangeAmount, setExchangeAmount] = useState(0)
  const [exchangeRate, setExchangeRate] = useState(1)

  function roundOffToX(x: number, value: any) {
    return (x) ? value.toFixed(x) : value;
  }

  const [selOutAmount, setSelOutAmount] = useState(1)
  const [selOutFrom, setSelOutFrom] = useState("s")
  const [selOutTo, setSelOutTo] = useState("s")

  const handleExchange = () => {
    setLoading(true)
    setIsOut(true)
    const controller = new AbortController();
    const signal = controller.signal;
    console.log(signal)
    fetch(`${URL}/${selCurrencyFrom.value}/${selCurrencyTo.value}/${selectAmount}`, { signal })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data.result === 'success') {
          setExchangeRate(roundOffToX(2, data.conversion_rate))
          setExchangeAmount(roundOffToX(2, data.conversion_result))
          setSelOutAmount(selectAmount)
          setSelOutFrom(selCurrencyFrom.name)
          setSelOutTo(selCurrencyTo.name)
          setLoading(false)
        }
      }).catch(err => {
        console.log((err.name === "AbortError") ? "request canceled!" : "yet to be handled.")
        setIsOut(false)
        setLoading(false)
      });
    return () => {
      controller.abort();
    }
  }

  // useEffect(() => {
  //   handleExchange()
  // }, [selCurrencyFrom, selCurrencyTo, selectAmount])

  return (
    <div className='container-whole'>
      <div className='header-container row'>
        <div className='header-content text-center pt-15 flex justify-center items-center h-full'>
          <div>
            <h1 className='text-white text-4xl font-bold block mb-4'>CURRENCY CONVERTER</h1>
            <small className='text-white block text-base'>Check live foreign currency exchange rates</small>
          </div>
        </div>
      </div>
      {/* Main current converter container */}
      <div className='main-container w-full flex justify-center items-center relative'>
        {isLoading ?
          <div className="absolute z-10 d-flex mt-2 flex-column justify-content-center align-items-center" id="loader">
            <ClipLoader
              color="#1746A2"
              loading={isLoading}
              size={100}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div> : ''
        }
        <div className={`currency-container w-4/5 bg-white rounded-lg shadow-lg p-11 ${isLoading ? 'blur-2' : ''}`}>

          {/* Start Input Data */}
          <div className='w-full flex justify-between'>
            <AmountInput currencySymbol={currencySymbol} selectAmount={selectAmount} setSelectAmount={setSelectAmount} />
            <FromCurrency currenciesOption={currenciesOption} selCurrencyFrom={selCurrencyFrom} setSelCurrencyFrom={setSelCurrencyFrom} setCurrencySymbol={setCurrencySymbol} />
            <Exchange setSelCurrencyFrom={setSelCurrencyFrom} setSelCurrencyTo={setSelCurrencyTo} selCurrencyFrom={selCurrencyFrom} selCurrencyTo={selCurrencyTo} setCurrencySymbol={setCurrencySymbol} />
            <ToCurrency currenciesOption={currenciesOption} selCurrencyTo={selCurrencyTo} setSelCurrencyTo={setSelCurrencyTo} />
          </div>
          {/* End Input Data */}

          {/* Start OutPut Data */}
          <div className='w-full flex justify-end'>
            <Output isOut={isOut} selOutFrom={selOutFrom} selOutTo={selOutTo} selOutAmount={selOutAmount} exchangeAmount={exchangeAmount} exchangeRate={exchangeRate} />
            <div className='w-1/5 mt-10 flex justify-end items-start'>
              <button className='border-4 border-blue-700 text-base font-bold px-3 py-2 text-blue-700' onClick={handleExchange}>
                Converter
              </button>
            </div>
          </div>
          {/* End OutPut Data */}
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter;
