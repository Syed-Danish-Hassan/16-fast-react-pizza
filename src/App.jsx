import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import Order from "./features/order/Order";
import CreateOrder from "./features/order/CreateOrder";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error"; // Import the Error component

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />, // Specify the error element here
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      { path: "/cart", element: <Cart /> },

      { path: "/order/:orderId", element: <Order /> },
      { path: "/order/new", element: <CreateOrder /> },
    ],
  },
]);

function App() {
  // const x = 23;
  // return <div>Hello vite</div>;

  return <RouterProvider router={router} />;
}

export default App;
