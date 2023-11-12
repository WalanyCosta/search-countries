import DetailsCountry from './pages/details-country';
import Home from './pages/home/index'
import './styles/global-styles.scss'
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
    path: '/details/:country_id',
    element: <DetailsCountry />
  }
])

function App() {
  return (
    <RouterProvider router={routes} />
  )
}

export default App
