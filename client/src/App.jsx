
import HomePage from './pages/Home/HomePage.jsx'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Layout from './pages/Layout/Layout.jsx';
import ListPage from './pages/List/ListPage.jsx';
import SinglePage from './pages/Single/SinglePage.jsx';
import NotFound from './pages/NotFound/NotFound.jsx';
import ProfilePage from './pages/profile/ProfilePage.jsx';

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element: <Layout/>,
      children:[
        {
          path:'/',
          element: <HomePage/>
        },
        {
          path:'/list',
          element:<ListPage/>
        },
        {
          path:'/:id',
          element:<SinglePage/>
        },
        {
          path:'/profile',
          element:<ProfilePage/>
        },
        {
          path:'*',
          element:<NotFound/>
        }
      ]
    },
    
  ])
  return (
    
    <RouterProvider router={router} />
  )
}

export default App