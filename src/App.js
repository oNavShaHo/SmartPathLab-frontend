import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,


} from "react-router-dom";

import Form from "./components/form";
import Home from "./screens/Home";

import './App.css'
export default function App() {
  
const root = createRoot(document.getElementById('root'))

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Home/>
      ),
    },
    {
      path: "cbc",
      element: <Form/>,
    },
  ]); 

  root.render(
    
      <RouterProvider router={router} />
  );
}