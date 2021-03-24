
import Head from 'next/head'
import { SubscribeButton } from '../components/SubscribeButton'

import style from './home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
          <title>Home | ig.news</title>
      </Head>
      
      <main className = {style.contentContainer}>
        <section className = {style.hero}>
          <span>👏 Seja bem vindo!</span>
          <h1>Noticías sobre o mundo do <span>React</span></h1>
          <p>
            Tenha acesso à todas as publicações <br/>
            <span>por R$ 9,90 por mês</span>
          </p>
          <SubscribeButton />
        </section>

        <img src="/images/Mulher.svg" alt="Mulher codando"/>
        
      </main>
    </>
  )
}
