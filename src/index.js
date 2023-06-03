import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { action as registerAction, Register } from './views/Register'
import { loader as rootLoader, Dashboard } from './views/Dashboard'
import { loader as articleLoader, Articles } from './views/Articles'
import { action as destroyAction } from './views/DestroyArticle'
const router = createBrowserRouter([
  {
    path: '/',
    loader: rootLoader,
    element: <Dashboard />,
    children: [
      {
        loader: articleLoader,
        path: 'articles',
        element: <Articles />,
      },
      {
        path: 'articles/:articleId/destroy',
        action: destroyAction,
      },
    ],
  },
  {
    path: '/register',
    action: registerAction,
    element: <Register />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
