import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import Order, { loader as orderLoader } from "./features/order/Order";
import CreateOrder, {
  action as createOrderAction,
} from "./features/order/CreateOrder";
import Cart from "./features/cart/Cart";
import AppLayout from "./ui/AppLayout";
import Home from "./ui/Home";
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

      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction,
      },
    ],
  },
]);

function App() {
  // const x = 23;
  // return <div>Hello vite</div>;

  return <RouterProvider router={router} />;
}

export default App;
