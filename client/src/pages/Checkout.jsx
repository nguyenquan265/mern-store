import { useSelector } from 'react-redux'
import { CartTotals, CheckoutForm, SectionTitle } from '../components'
import { redirect } from 'react-router-dom'

export const loader = (store) => async () => {
  const user = store.getState().user.user

  if (!user) {
    return redirect('/login')
  }

  return null
}

const Checkout = () => {
  const { cartTotal } = useSelector((state) => state.cart)

  if (cartTotal === 0) {
    return <SectionTitle text='Your cart is empty' />
  }

  return (
    <>
      <SectionTitle text='Place your order' />
      <div className='mt-8 grid gap-8 md:grid-cols-2 items-start'>
        <CheckoutForm />
        <CartTotals />
      </div>
    </>
  )
}

export default Checkout
