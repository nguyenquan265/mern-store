import { redirect, useLoaderData } from 'react-router-dom'
import { toast } from 'react-toastify'
import { customAxios } from '../utils'
import {
  ComplexPaginationContainer,
  OrdersList,
  SectionTitle
} from '../components'

const ordersQuery = (params) => {
  return {
    queryKey: ['orders', params.page ? parseInt(params.page) : 1],
    queryFn: () => customAxios('/orders', { params })
  }
}

export const loader =
  (store, queryClient) =>
    async ({ request }) => {
      const { user } = store.getState().user

      if (!user) {
        return redirect('/login')
      }

      const params = Object.fromEntries([
        ...new URL(request.url).searchParams.entries()
      ])

      try {
        const res = await queryClient.ensureQueryData(ordersQuery(params))

        return { orders: res.data.orders, meta: res.data.meta }
      } catch (error) {
        if (error?.response?.status === 401 || error?.response?.status === 403) {
          return redirect('/login')
        } else {
          toast.error(
            error?.response?.data?.error?.message ||
            'There was an error placing your order'
          )
        }

        return null
      }
    }

const Orders = () => {
  const { meta } = useLoaderData()

  if (meta.pagination.total < 1) {
    return <SectionTitle text='Please make an order' />
  }

  return (
    <>
      <SectionTitle text='Your Orders' />
      <OrdersList />
      <ComplexPaginationContainer />
    </>
  )
}

export default Orders
