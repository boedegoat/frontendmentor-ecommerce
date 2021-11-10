import AddToCart from 'components/AddToCart'
import Container from 'components/Container'
import ProductDetails from 'components/ProductDetails'
import ProductPrice from 'components/ProductPrice'
import Slider from 'components/Slider'

export default function Home() {
  return (
    <Container>
      <Slider />
      <div>
        <ProductDetails />
        <ProductPrice />
        <AddToCart />
      </div>
    </Container>
  )
}
