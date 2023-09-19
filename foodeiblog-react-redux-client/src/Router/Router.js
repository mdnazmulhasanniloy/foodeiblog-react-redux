import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Blogs from "../Pages/Bloogs/Blogs";
import CardDetails from "../Pages/Shared/CardDetails/CardDetails"; 

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
          path: '/details/:id',
          element: <CardDetails />,
          loader: async({ params })=> await fetch(`http://localhost:5000/blogs/${params.id}`),
        },
      ],
    },
    
  ]); 