import Head from 'next/head'
import Navbar from './Navbar'
import product from 'data/product'

export default function Container({ children }) {
  return (
    <>
      <Head>
        <title>{product.name}</title>
        <meta name='description' content={product.description} />
        <link rel='icon' type='image/png' href='/images/favicon-32x32.png'></link>
      </Head>
      <Navbar />
      <main className='md:wrapper flex flex-col flex-grow md:flex-row md:center-child md:px-20 md:py-8'>
        {children}
      </main>
    </>
  )
}
