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
import ProductDetails from "./components/ProductDetails/ProductDetails.jsx";
import App from "./App.jsx";

const Router = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />} errorElement={<ErrorPage />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/store" element={<Store />} />
        <Route path="/store/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default Router;
