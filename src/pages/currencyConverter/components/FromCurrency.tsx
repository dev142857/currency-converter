import React from 'react';
import currencies from '../../../seeds/commonCurrency.json';
import Select from 'react-select';
import { fromCurrencyProps } from '../../../interfaces';

const FromCurrency = (props: fromCurrencyProps) => {

    const changeFrom = (_eTo:any) => {
        props.setSelCurrencyFrom(_eTo)
        props.setCurrencySymbol(_eTo.symbol)
    }

    return (
        <div className='inline-block w-1/3'>
            <div>
                <p className='text-lg compo-title font-bold'>From</p>
            </div>
            <br />
            <div className='border-b-4 h-10'>
                <Select
                    options={props.currenciesOption}
                    value={props.selCurrencyFrom}
                    onChange={changeFrom}
                />
            </div>
        </div>
    )
}

export default FromCurrency;
