
export type RegionsData = Array<Region>
export type Region = {
    id: number,
    city: string,
    code: string,
}

export type CurrenciesData = Array<Currency>
export type Currency = {
    id: number,
    name: string,
    code: string,
}
export type QuoteData = { 
    rate: number,
    currency: string,
    amount: number,
    toCountry: string,
    deliveryAmount: number
}
export type Quote = {
    CustomerRate: number,
    CustomerRateInverse: number,
    CustomerAmount: number,
    InterbankAmount: number,
    DefaultFee: number,
    Fee: number,
    FeeFreeThreshold: number,
    InterbankRate: number,
    InverseInterbankRate: number,
    DeliveryCountry: string,
    DeliveryTime: number,
    ComparisonRate: number,
    ComparisonAmount: number,
    Message: string
}