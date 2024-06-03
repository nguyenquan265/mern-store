import { customAxios } from "../utils"
import { Filters, PaginationContainer, ProductsContainer } from "../components"

export const loader = async () => {
  const res = await customAxios('/products')
  const products = res.data.data
  const meta = res.data.meta

  return { products, meta }
}

const Products = () => {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  )
}

export default Products