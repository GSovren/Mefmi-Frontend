import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './main.css'
import App from './pages/App.jsx';
import ExplorePage from './pages/ExplorePage.jsx';
import RankingsPage from './pages/RankingsPage.jsx';
import ComparePage from './pages/ComparePage.jsx';
import PageNotFound from './pages/PageNotFound.jsx';
import UploadPage from './pages/UploadPage.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <PageNotFound/>
  },
  {
    path: '/explore',
    element: <ExplorePage/>,
  },
  {
    path: '/rankings',
    element: <RankingsPage/>,
  },
  {
    path: '/compare',
    element: <ComparePage/>,
  },
  {
    path: '/upload',
    element: <UploadPage/>,
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
