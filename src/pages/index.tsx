
import Head from 'next/head'
import { GetStaticProps } from 'next'
import { SubscribeButton } from '../components/SubscribeButton'

import style from './home.module.scss'
import { stripe } from '../services/stripe'

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  }
}

export default function Home( { product }:HomeProps) {
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
            <span>por {product.amount} por mês</span>
          </p>
          <SubscribeButton priceId ={product.priceId} />
        </section>

        <img src="/images/Mulher.svg" alt="Mulher codando"/>
        
      </main>
    </>
  )
}

export const getStaticProps:GetStaticProps = async() => {
  const price = await stripe.prices.retrieve('price_1IYaC2BX3llT6DA3xkQpfTGA', {
    expand: ['product']
  }) 

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price.unit_amount / 100),
  }

  return{
    props: {
      product
    },
    revalidate: 60 * 60 * 24, // 24hours
  }
}
