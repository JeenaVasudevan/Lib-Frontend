import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './routes/root';
import ErrorPage from './error-page';
import store from './app/store'
import { Provider } from 'react-redux'
import Home,{loader as homeLoader} from './routes/home';
import Books from './routes/books';
import Book,{loader as bookLoader} from './routes/book';
import Authors from './routes/authors';
import Signup from './routes/signup';
import Login from './routes/login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement:<ErrorPage />,
    children:[
      {
        path:"/",
        element:<Home />,
        loader:homeLoader,
      },
      {
        path:"/books",
        element:<Books />,
      },
      {
        path:"/books/:bookId",
        element:<Book />,
        loader:bookLoader,
      },
      {
        path:"/authors",
        element:<Authors />,
      },
      {
        path:"/signup",
        element:<Signup />
      },
      {
        path:"/login",
        element:<Login />
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider> 
  </StrictMode>,
)
