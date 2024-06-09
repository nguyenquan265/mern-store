import { ErrorElement } from './components'
import {
  HomeLayout,
  Landing,
  Error,
  Products,
  SingleProduct,
  Cart,
  About,
  Register,
  Login,
  Checkout,
  Orders,
  Me,
} from './pages'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
//loader
import { loader as landingLoader } from './pages/Landing'
import { loader as singleProductLoader } from './pages/SingleProduct'
import { loader as productsLoader } from './pages/Products'
import { loader as meLoader } from './pages/Me'
import { loader as checkoutLoader } from './pages/Checkout'
//action
import { action as registerAction } from './pages/Register'
import { action as loginAction } from './pages/Login'
import { action as checkoutFormAction } from './components/CheckoutForm'
//store
import { store } from './store'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        loader: landingLoader,
        errorElement: <ErrorElement />
      },
      {
        path: 'products',
        element: <Products />,
        loader: productsLoader,
        errorElement: <ErrorElement />
      },
      {
        path: 'products/:id',
        element: <SingleProduct />,
        loader: singleProductLoader,
        errorElement: <ErrorElement />
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'checkout',
        element: <Checkout />,
        loader: checkoutLoader(store),
        action: checkoutFormAction(store),
        errorElement: <ErrorElement />
      },
      {
        path: 'orders',
        element: <Orders />,
      },
      {
        path: 'me',
        element: <Me />,
        loader: meLoader,
        errorElement: <ErrorElement />
      }
    ],
  },
  {
    path: '/login',
    element: <Login />,
    action: loginAction(store),
    errorElement: <Error />,
  },
  {
    path: '/register',
    element: <Register />,
    action: registerAction,
    errorElement: <Error />,
  },
])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App