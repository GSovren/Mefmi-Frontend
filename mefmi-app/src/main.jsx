import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './main.css'
import App from './pages/App.jsx';
import ExplorePage from './pages/ExplorePage.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
  },
  {
    path: '/explore',
    element: <ExplorePage/>,
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
