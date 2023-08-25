import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import ErrorPage from "./routes/ErrorPage/ErrorPage.jsx";
import Home from "./routes/Home/Home.jsx";
import About from "./routes/About/About.jsx";
import Store from "./routes/Store/Store.jsx";
import Cart from "./routes/Cart/Cart.jsx";
import App from "./App.jsx";

import { useProducts } from "./hooks/useProducts.jsx";

const Router = () => {
  const products = useProducts();

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />} errorElement={<ErrorPage />}>
        <Route index element={<Home />} loader={() => products} />

        <Route path="/About" element={<About />} />
        <Route path="/Store" element={<Store />} loader={() => products} />
        <Route path="/Cart" element={<Cart />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default Router;
