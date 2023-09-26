import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Blogs from "../Pages/Bloogs/Blogs";
import CardDetails from "../Pages/Shared/CardDetails/CardDetails"; 
import About from "../Pages/About/About";
import Login from "../Pages/Login/Login";
import Register from "../Register/Register";

export const routes = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/blogs",
          element: <Blogs />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: '/details/:id',
          element: <CardDetails />,
          loader: async({ params })=> await fetch(`http://localhost:5000/blogs/${params.id}`),
        },
      ],
    },
    
  ]); 