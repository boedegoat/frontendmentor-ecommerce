import Head from 'next/head'
import Navbar from './Navbar'
import product from 'data/product'

export default function Container({ children }) {
  return (
    <>
      <Head>
        <title>Sneakers - {product.name}</title>
        <meta name='description' content={product.description} />
        <link rel='icon' type='image/png' href='/images/favicon-32x32.png'></link>
      </Head>
      <Navbar />
      <main>{children}</main>
    </>
  )
}
