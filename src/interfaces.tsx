export interface amountInputProps {
    currencySymbol: string
    selectAmount: number
    setSelectAmount: Function
}
export interface fromCurrencyProps {
    currenciesOption: { value: string, label: string, name: string, symbol: string, index: number }[]
    selCurrencyFrom: { value: string, label: string, name: string, symbol: string, index: number }
    setSelCurrencyFrom: Function
    setCurrencySymbol: Function
}
export interface exchangeProps {
    setSelCurrencyFrom: Function
    setSelCurrencyTo: Function
    selCurrencyFrom: { value: string, label: string, name: string, symbol: string, index: number }
    selCurrencyTo: { value: string, label: string, name: string, symbol: string, index: number }
    setCurrencySymbol: Function
}
export interface toCurrencyProps {
    currenciesOption: { value: string, label: string, name: string, symbol: string, index: number }[]
    selCurrencyTo: { value: string, label: string, name: string, symbol: string, index: number }
    setSelCurrencyTo: Function
}
export interface outputProps {
    isOut: boolean
    selCurrencyFrom: { value: string, label: string, name: string, symbol: string, index: number }
    selCurrencyTo: { value: string, label: string, name: string, symbol: string, index: number }
    selectAmount: number
}