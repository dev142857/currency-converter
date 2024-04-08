import React from 'react';
import currencies from '../../../seeds/commonCurrency.json';
import Select from 'react-select';
import { toCurrencyProps } from '../../../interfaces';

const ToCurrency = (props: toCurrencyProps) => {

    return (
        <div className='inline-block w-1/3'>
            <div>
                <p className='text-lg compo-title font-bold'>From</p>
            </div>
            <br />
            <div className='border-b-4 h-10'>
                <Select
                    options={props.currenciesOption}
                    value={props.selCurrencyTo}
                    onChange={(_eTo) => { props.setSelCurrencyTo(_eTo) }}
                />
            </div>
        </div>
    )
}

export default ToCurrency;
