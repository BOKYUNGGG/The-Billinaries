import { FinancialAssetsType } from "@/types/types"

export default function FinancialAsset({financialAsset} : {financialAsset : FinancialAssetsType}){
    const {
        exchange, 
        ticker, 
        companyName, 
        numberOfShares, 
        sharePrice,
        currencyCode,
        exchangeRate,
        interactive,
        currentPrice
    } = financialAsset


    return(
        <>
            <ul>
                <li><strong>{companyName}</strong> ({ticker})</li> 
                <li>{exchange}</li> 
                <li>{numberOfShares.toLocaleString()} shares</li> 
                <li><strong>Share Price</strong> : {sharePrice} {currencyCode}</li>
                <li><strong>Current Price</strong> : {currentPrice} {currencyCode}</li>
            </ul>
            <style>
                {`
                    li:first-child strong{
                        font-size : 1.3em;
                    }
                    ul {
                        list-style-type : none;
                        padding-bottom : 2em;
                    }
                `}
            </style>
        </>
    )
}