import React, { useState } from 'react';
import './index.css';
import AmountInput from './components/AmountInput';
import FromCurrency from './components/FromCurrency';
import ToCurrency from './components/ToCurrency';
import Exchange from './components/Exchange';
import Output from './components/Output';
import currencies from '../../seeds/commonCurrency.json';


const CurrencyConverter: React.FC = () => {
  const [selectAmount, setSelectAmount] = useState<number>(1);
  const [currencySymbol, setCurrencySymbol] = useState("$");

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

  const [isOut, setIsOut] = useState(true)

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
      <div className='main-container w-full flex justify-center items-center'>
        <div className='currency-container w-4/5 bg-white rounded-lg shadow-lg p-11'>

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
            <Output isOut={isOut} selCurrencyFrom={selCurrencyFrom} selCurrencyTo={selCurrencyTo} selectAmount={selectAmount} />
            <div className='w-1/5 mt-10 flex justify-end items-start'>
              <button className='border-4 border-blue-700 text-base font-bold px-3 py-2 text-blue-700'>
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
