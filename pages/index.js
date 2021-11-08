import Container from 'components/Container'
import ProductDetails from 'components/ProductDetails'
import Slider from 'components/Slider'

export default function Home() {
  return (
    <Container>
      <Slider />
      <ProductDetails />
      {/* product price */}
      {/* add to cart button */}
    </Container>
  )
}
