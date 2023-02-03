import { BillionariesType } from "@/types/types";
import { useRouter } from 'next/router'

export default function BillionaryItem({billionary}:{billionary : BillionariesType}){
    const router = useRouter()
    const { 
        id, 
        name, 
        netWorth, 
        squareImage, 
        industries 
    } = billionary
    const onPushBillionaryId = () => {
        router.push(`/billionary/${id}`)
    }

    return (
        <div className="container" onClick={onPushBillionaryId}>
            <img src={squareImage}></img>
            <p><strong>{name}</strong> ({~~(netWorth/1000)}B)</p>
            <p>{industries[0]}</p>


            <style jsx>
                {`
                    img {
                       width : 100%;
                       border-radius : 1em;
                       margin-bottom : 0.5em;
                       image-rendering: high-quality;
                       box-shadow : 0 0.1em 0.1em hsl(0deg 0% 0% / 0.075),
                                    0 0.2em 0.2em hsl(0deg 0% 0% / 0.075),
                                    0 0.4em 0.4em hsl(0deg 0% 0% / 0.075),
                                    0 0.8em 0.8em hsl(0deg 0% 0% / 0.075),
                                    0 1em 1em hsl(0deg 0% 0% / 0.075)
                                    ;
                    }
                    .container {
                        cursor : pointer;
                        padding-left : 0.2em;
                        padding-right : 0.2em;
                        border-radius: 1em;
                        -webkit-transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
                        transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
                    }
                    .container:hover {
                        -webkit-transform: scale(1.25, 1.25);
                        transform: scale(1.1, 1.1);
                    }
                `}
            </style>
        </div>
    )
}