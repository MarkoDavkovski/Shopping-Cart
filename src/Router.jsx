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

const Router = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />} errorElement={<ErrorPage />}>
        <Route index element={<Home />} />

        <Route path="/About" element={<About />} />
        <Route path="/Store" element={<Store />} />
        <Route path="/Cart" element={<Cart />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default Router;

// const Router = () => {
//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <App />,
//       errorElement: <ErrorPage />,
//       loader: rootLoader,
//       action: rootAction,
//       children: [
//         {
//           errorElement: <ErrorPage />,
//           children: [
//             { index: true, element: <Index /> },
//             {
//               path: "/contacts/:contactId",
//               element: <Contact />,
//               loader: contactLoader,
//               action: contactAction,
//             },
//             {
//               path: "/contacts/:contactId/edit",
//               element: <Edit />,
//               loader: contactLoader,
//               action: editAction,
//             },
//             {
//               path: "/contacts/:contactId/destroy",
//               action: destroyAction,
//               errorElement: <div>Oops there was an error!</div>,
//             },
//           ],
//         },
//       ],
//     },
//   ]);

//   return <RouterProvider router={router} />;
// };
