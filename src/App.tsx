import DetailsCountry from './pages/details-country';
import Home from './pages/home/index'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/details/:alpha3Code',
    element: <DetailsCountry />
  }
])

function App() {
  return (
    <RouterProvider router={routes} />
  )
}

export default App
