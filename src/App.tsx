//import do provider que vai prover p/ a aplicacao acesso a rotas ;
//createBrowserRouter e p/ setar path o endpoint "endereço"
//que ela vai acessar e o componente que vai ser renderizado
import Login from "@/routes/Login";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
]);


const App = () => {
  return (
    <RouterProvider router={router} />
  )
  //npm install react-router-dom
  //npm install localforage match-sorter sort-by
}

export default App
