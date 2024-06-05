import { useSelector } from 'react-redux'
import { CartItemsList, CartTotals, SectionTitle } from '../components'
import { Link } from 'react-router-dom'

const Cart = () => {
  const { user } = useSelector((state) => state.user)
  const { numItemsInCart } = useSelector((state) => state.cart)

  if (numItemsInCart < 1) {
    return <SectionTitle text='Your cart is empty' />
  }

  return (
    <>
      <SectionTitle text='Shopping Cart' />
      <div className='mt-8 grid gap-8 lg:grid-cols-12'>
        <div className='lg:col-span-8'>
          <CartItemsList />
        </div>
        <div className='lg:col-span-4 lg:pl-4'>
          <CartTotals />
          {user ? (
            <Link to='/checkout' className='btn btn-primary btn-block mt-8'>
              Proceed to Checkout
            </Link>
          ) : (
            <Link to='/login' className='btn btn-primary btn-block mt-8'>
              Please Login
            </Link>
          )}
        </div>
      </div>
    </>
  )
}

export default Cart
