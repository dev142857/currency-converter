import { useState } from 'react'
import { amountInputProps } from '../../../interfaces'


const AmountInput = ({ currencySymbol, selectAmount, setSelectAmount }: amountInputProps) => {
    return (
        <div className='currency-input-group inline-block w-1/5'>
            <div>
                <p className='text-lg compo-title font-bold'>Amount</p>
            </div>
            <br />
            <div className='border-b-4 h-10 py-2'>
                <p className='inp-amount-label font-bold text-center w-12 inline-block'>{currencySymbol}</p>
                <input
                    className='inputAmount font-bold inline-block'
                    type='number'
                    onChange={(e) => setSelectAmount(Number(e.target.value))}
                    value={selectAmount}
                />
            </div>
        </div>
    )
}

export default AmountInput