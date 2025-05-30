import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider} from 'react-router-dom';

import Landing from './pages/Landing';
import Destinations from './pages/Destinations';
import Explore from './pages/Explore';
import Blogs from './pages/Blogs';
import About from './pages/About';
import Itineraries from './pages/Itineraries';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Landing />
      },
      {
        path: '/destinations',
        element: <Destinations />
      },
      {
        path: '/explore',
        element: <Explore />
      },
      {
        path: '/blogs',
        element: <Blogs />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/itineraries',
        element: <Itineraries />
      }
    ]
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
