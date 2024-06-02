import { FeaturedProducts, Hero } from "../components"
import { customAxios } from "../utils"

export const loader = async () => {
  const res = await customAxios('/products?featured=true')
  const products = res.data.data

  return { products }
}

const Landing = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  )
}

export default Landing