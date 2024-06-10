import { Form, redirect } from 'react-router-dom'
import { customAxios } from '../utils'
import { clearCart } from '../features/cart/cartSlice'
import { toast } from 'react-toastify'
import FormInput from './FormInput'
import SubmitBtn from './SubmitBtn'

export const action =
  (store) =>
    async ({ request }) => {
      const formData = await request.formData()
      const { name, address } = Object.fromEntries(formData)
      const { cartItems, orderTotal, numItemsInCart } = store.getState().cart
      const info = {
        name,
        address,
        cartItems,
        orderTotal,
        numItemsInCart
      }

      try {
        await customAxios.post('/orders', info)
        store.dispatch(clearCart())
        toast.success('Order placed successfully')
        return redirect('/orders')
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

const CheckoutForm = () => {
  return (
    <Form method='POST' className='flex flex-col gap-y-4'>
      <h4 className='font-medium text-xl'>Shipping Information</h4>
      <FormInput label='full name' name='name' type='text' />
      <FormInput label='address' name='address' type='text' />
      <div className='mt-4'>
        <SubmitBtn text='Place Your Order' />
      </div>
    </Form>
  )
}

export default CheckoutForm
