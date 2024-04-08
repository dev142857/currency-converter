import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRepeat } from '@fortawesome/free-solid-svg-icons'
import { exchangeProps } from '../../../interfaces'

const Exchange = (props:exchangeProps) => {
    const handleSwap = () => {
        props.setSelCurrencyTo(props.selCurrencyFrom)
        props.setSelCurrencyFrom(props.selCurrencyTo)
        props.setCurrencySymbol(props.selCurrencyTo.symbol)
    }

    return (
        <div className='inline-block w-10 flex justify-center items-end'>
            <div className='w-full flex justify-center items-center'>
                <span className='text-3xl exchange-icon h-10' onClick={handleSwap}>
                    <FontAwesomeIcon icon={faRepeat} />
                </span>
            </div>
        </div>
    )
}

export default Exchange