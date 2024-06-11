import { customAxios } from '../utils'
import { Filters, PaginationContainer, ProductsContainer } from '../components'

const productsQuery = (params) => {
  const { search, category, company, order, price, shipping, page } = params

  return {
    queryKey: [
      'products',
      search ?? '',
      category ?? 'all',
      company ?? 'all',
      order ?? 'a-z',
      price ?? 100000,
      shipping ?? false,
      page ?? 1
    ],
    queryFn: () => customAxios('/products', { params })
  }
}

export const loader =
  (queryClient) =>
    async ({ request }) => {
      const params = Object.fromEntries([
        ...new URL(request.url).searchParams.entries()
      ])
      const res = await queryClient.ensureQueryData(productsQuery(params))
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
