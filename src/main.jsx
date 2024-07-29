import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './Components/Root/Root';
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import ErrorPage from './pages/ErrorPage';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      { path: "Home",element: <Home></Home>,},
      { path: "about",element: <About></About>,},
      { path: "/contact",element: <Contact></Contact>,}
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
