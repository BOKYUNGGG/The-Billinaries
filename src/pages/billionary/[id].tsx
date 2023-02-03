import { GetStaticProps, GetStaticPaths } from 'next'
import { NextPage } from "next"
import { ParsedUrlQuery } from 'querystring'
import { BillionaryType } from "@/types/types"
import FinancialAsset from "@/components/FinancialAsset"


interface BillionaryProps {
    billionary : BillionaryType
}
const Billionary : NextPage<BillionaryProps> = ({billionary}) => {
    const {
        state,
        city,
        name,
        country,
        position,
        industries,
        financialAssets,
        thumbnail,
        squareImage,
        bio,
        about,
        netWorth
    } = billionary ?? {}
    const test = "Hello World"
    console.log(test[0])
    return (
        <div>
            <section className='container'>
                <img className='image' src={squareImage}></img>
                <div className='main'>
                    <h1>{name}</h1>
                    <br></br>
                    <table>
                        <tr>
                            <td>Networth</td>
                            <td>{~~(netWorth/1000)} Billion</td>
                        </tr>
                        <tr>
                            <td>Industry</td>
                            <td>{industries ? industries[0] : "None"}</td>
                        </tr>
                        <tr>
                            <td>Country</td>
                            <td>{country}</td>
                        </tr>
                        <tr>
                            <td>State</td>
                            <td>{state ? state : "None"}</td>
                        </tr>
                        <tr>
                            <td>City</td>
                            <td>{city}</td>
                        </tr>
                    </table>
                    <br></br>
                </div>
                <div className='bio'>
                    {
                        bio?.map((item)=>(
                        <>
                            <p key={item}>
                                {item}
                            </p>
                            <br></br>
                        </>
                        ))
                    }
                </div>
            </section>
            <section className='financialAsset'>
                <h1>Financial Assets</h1>
                <br></br>
                <div className='financialAssetContainer'>
                    {financialAssets && financialAssets.map((financialAsset, index)=>{
                        return (
                            <FinancialAsset key={index} financialAsset={financialAsset}/>
                        )
                    })}

                </div>
            </section>
            <style jsx>
                {`
                    section {
                        padding : 1em;
                    }
                    .main {
                        grid-area : main;
                    }
                    .image {
                        grid-area : image;
                        border-radius : 1em;
                        margin : 0 1em 1em 0;
                        width : fit-content;
                    }
                    .bio {
                        grid-area : bio;
                    }
                    .container {
                        display : grid;
                        
                    }
                    table tr td:first-child{
                        min-width : 6em;
                        font-weight : bold;
                    }
                    .financialAssetContainer{
                        display : grid;
                        gap : 1em;
                        grid-template-columns : var(--grid-column-set);
                    }
                    @media screen and (max-width:1000px){
                        .container{
                            grid-template-columns : 1fr;
                            grid-template-areas : 
                                "main"
                                "image"
                                "bio";
                        }
                    }
                    @media screen and (min-width:1000px){
                        .container{
                            max-width : 50em;
                            grid-template-colums : 1fr 1fr 1fr;
                            grid-template-rows : auto;
                            grid-template-areas : 
                                "image main main"
                                "image main main"
                                "bio bio bio";
                        }
                    }
                `}
            </style>

        </div>
    )
}



// params properties
interface Params extends ParsedUrlQuery{
    id : string
}
export const getStaticProps : GetStaticProps<BillionaryProps, Params> = 
    async (context) => {
        // get id property from params of context
        const {id} = context.params!
        // fetch data from api server
        const response = await fetch(`https://billions-api.nomadcoders.workers.dev/person/${id}`)
        const billionary = await response.json() 
        return {
            props : {
                billionary
            }
        }
}
export const getStaticPaths : GetStaticPaths = 
    async () => {
        return{
            paths : [],
            fallback : true
        }
}
export default Billionary

