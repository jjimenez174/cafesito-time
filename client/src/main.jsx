import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder.jsx'
import SignIn from './pages/SignIn/SignIn.jsx'
import SignUp from './pages/SignUp/SignUp.jsx'
import Shop from './pages/Shop/Shop.jsx'

const router = createBrowserRouter([
  {
    path: "/", 
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path:"/signin",
        element: <SignIn />
      },
      {
        path:"/signup",
        element: <SignUp />
      },
      {
        path:"/shop",
        element: <Shop />
      },
      {
        path:"/cart",
        element: <Cart />,
      },
      {
        path:"/order",
        element: <PlaceOrder />,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={router} />

)
