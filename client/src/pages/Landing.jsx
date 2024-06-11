import { FeaturedProducts, Hero } from '../components'
import { customAxios } from '../utils'

const featuredProductsQuery = {
  queryKey: ['featuredProducts'],
  queryFn: () => customAxios('/products?featured=true')
}

export const loader = (queryClient) => async () => {
  const res = await queryClient.ensureQueryData(featuredProductsQuery)
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
