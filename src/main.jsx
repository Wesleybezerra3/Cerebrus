import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Home } from './routes/Home'
import { QuizOne } from './routes/QuizOne'
import './css/main.css'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'
const router = createBrowserRouter([
  {
    path:'/',
    element: <Home/>,
  },
  {
    path:'/QuizOne',
    element: <QuizOne/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
