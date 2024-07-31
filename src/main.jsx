import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './Components/Root/Root';
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Applied from './pages/Applied';
import Blog from './pages/Blog';
import Statistics from './pages/Statistics';
import ErrorPage from './pages/ErrorPage';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      { path: "/",element: <Home></Home>,},
      { path: "/statics",element: <Statistics></Statistics>,},
      { path: "/applied",element: <Applied></Applied>,},
      { path: "/blog",element: <Blog></Blog>,}
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
