import { useEffect, useState } from 'react'
import Head from 'next/head'
import BillionaryItem from '@/components/BillionaryItem'
import styles from './Home.module.css'
import { BillionariesType } from '@/types/types'

const useHome = () => {
  const [billionaries, setBillionaries] = useState<BillionariesType[]>([])
  useEffect(()=>{
    (async function(){
      try{
        const response = await fetch('https://billions-api.nomadcoders.workers.dev/')
        const json = await response.json()
        setBillionaries(json)
      }
      catch(error){
        console.error("Fetch billionaries Error : ", error)
      }
    })()
    // clean up
    return()=>{

    }
  },[])

  return {billionaries}
}
export default function Home() {
  const {billionaries} = useHome()

  return (
    <>
      <Head>
        <title>The Billionaries</title>
      </Head>
      <main>
        <section className='top'>
          <h1>Billionaries</h1>
          <p>Welcome to the Billionaries wiki</p>
        </section>
        <section className={styles.container}>
          {
            billionaries.map((billionary)=>{
              return (<BillionaryItem key={billionary.id} billionary={billionary}/>)
            })
          }
        </section>
      </main>
      <style jsx>
        {`
          .top {
            padding-left : 1em;
          }
        `}
      </style>
    </>
  )
}
