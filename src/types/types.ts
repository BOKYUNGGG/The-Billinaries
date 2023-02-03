export interface BillionariesType {
    id : string,
    name : string,
    netWorth : number,
    squareImage : string,
    industries : string[]
}
export interface FinancialAssetsType {
    exchange: string,
    ticker: string,
    companyName: string,
    numberOfShares: number,
    sharePrice: number,
    currencyCode: string,
    exchangeRate: number,
    interactive: boolean,
    currentPrice: number
}
export interface BillionaryType {
    id: string,
    state?: string | undefined,
    city: string,
    name: string,
    country: string,
    position: number,
    industries: string[],
    thumbnail: string,
    squareImage: string,
    bio?: string[],
    about: string[],
    netWorth: number
    financialAssets? : FinancialAssetsType[]
}