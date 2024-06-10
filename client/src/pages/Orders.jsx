import { redirect, useLoaderData } from 'react-router-dom'
import { toast } from 'react-toastify'
import { customAxios } from '../utils'
import { OrdersList, PaginationContainer, SectionTitle } from '../components'

export const loader =
  (store) =>
  async ({ request }) => {
    const { user } = store.getState().user

    if (!user) {
      return redirect('/login')
    }

    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries()
    ])

    try {
      const res = await customAxios('/orders', { params })

      return { orders: res.data.orders, meta: res.data.meta }
    } catch (error) {
      toast.error(
        error?.response?.data?.error?.message ||
          'There was an error placing your order'
      )

      if (error?.response?.status === 401 || error?.response?.status === 403) {
        return redirect('/login')
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
      <PaginationContainer />
    </>
  )
}

export default Orders
