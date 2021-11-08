import Head from 'next/head'
import Navbar from './Navbar'

export default function Container({ children }) {
  return (
    <>
      <Head>
        <title>🛒 Ecommerce Product Page</title>
      </Head>
      <Navbar />
      <main>{children}</main>
    </>
  )
}
