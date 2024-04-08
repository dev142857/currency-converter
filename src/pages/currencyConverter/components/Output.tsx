import React from 'react'
import { outputProps } from '../../../interfaces'

const Output = (props: outputProps) => {
    return (
        <div className={`w-4/5 mt-10 ${props.isOut ? 'inline-block' : 'hidden'}`}>
            <div className='inline-block'>
                <span className='text-xl font-bold text-gray-500'>
                    {props.selOutAmount} {props.selOutFrom} =
                </span>
            </div>
            <div className='inline-block'>
                <span className='text-4xl font-bold text-blue-700'>
                    {props.exchangeAmount} {props.selOutTo}
                </span>
            </div>
        </div>
    )
}

export default Output