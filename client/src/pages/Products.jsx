import { customAxios } from "../utils"
import { Filters, PaginationContainer, ProductsContainer } from "../components"

export const loader = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  const res = await customAxios('/products', { params })
  const products = res.data.data
  const meta = res.data.meta

  return { products, meta, params }
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