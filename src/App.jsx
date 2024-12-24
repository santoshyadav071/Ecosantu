import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./Components/Layout/AppLayout";
import { Home } from "./Pages/Home";
import { Men } from "./Pages/Men";
import { Socks } from "./Pages/Socks";
import { Store } from "./Pages/Store";
import { Search } from "./Pages/Search";
import { User } from "./Pages/User";
import { Help } from "./Pages/Help";
import { Cart } from "./Pages/Cart";
import { Reseal } from "./Pages/Reseal";
import { Rerun } from "./Pages/Rerun";
import { Shop } from "./Pages/Shop";
import { AboutRerun } from "./Pages/AboutRerun";
import { HolidayDeal } from "./Pages/HolidayDeal";
import { Reruncart } from "./Pages/Reruncart";
import { MensRunner } from "./Pages/MensRunner";
import Action from "./Pages/Action";
import { Water } from "./Pages/Water";
import { Slip } from "./Pages/Slip";
import High from "./Pages/High";
import Saly from "./Pages/Saly";
import ShopAll from "./Pages/ShopAll";
import { TreeRunner } from "./Pages/TreeRunner";
import { WoolRunnerGo } from "./Pages/WoolRunnerGo";
import Mens from "./Pages/Mens";
import { ProtectedCollection } from "./Pages/ProtectedCollection";
import { WoolRunner } from "./Pages/WoolRunner";
import TreeGlider from "./Pages/TreeGlider";
import WoolRunnerMizzel from "./Pages/WoolRunnerMizzel";
import { TreeDesher2 } from "./Pages/TreeDesher2";
import { Tees } from "./Pages/Tees";
import Underwear from "./Pages/Underwear";
import Bags from "./Pages/Bags";
import Hats from "./Pages/Hats";
import Insoles from "./Pages/Insoles";
import LaceKits from "./Pages/LaceKits";
import GiftCards from "./Pages/GiftCards";

import ProductDetails from "./Components/UI/ProductDetails";
import OrderPage from "./Components/UI/OrderPage";

import RerunShopNow from "./Pages/RerunShopNow";
import { ShopMen } from "./Components/Layout/ShopMen";
import WomenShop from "./Pages/WomenShop";


const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/product/:id",
          element: <ProductDetails />,
        },
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/Men",
          element: <Men />,
        },
        {
          path: "/Reseal",
          element: <Reseal />,
        },
        {
          path: "/Socks",
          element: <Socks />,
        },

        {
          path: "/Store",
          element: <Store />,
        },

        {
          path: "/Search",
          element: <Search />,
        },
        {
          path: "/User",
          element: <User />,
        },
        {
          path: "/Help",
          element: <Help />,
        },

        {
          path: "/Cart",
          element: <Cart />,
        },

        {
          path: "/MensRunner",
          element: <MensRunner />,
        },
        {
          path: "/shop/tree-glider",
          element: <TreeGlider />,
        },
        {
          path: "/shop/wool-runner-mizzle",
          element: <WoolRunnerMizzel />,
        },
        {
          path: "/shop/tree-dasher-2",
          element: <TreeDesher2 />,
        },

        {
          path: "/action",
          element: <Action />,
        },
        {
          path: "/Water",
          element: <Water />,
        },
        {
          path: "/Slip",
          element: <Slip />,
        },
        {
          path: "/High",
          element: <High />,
        },
        {
          path: "/Saly",
          element: <Saly />,
        },
        {
          path: "/ShopAll",
          element: <ShopAll />,
        },
        {
          path: "/shop/tree-runner",
          element: <TreeRunner />,
        },
        {
          path: "/woolrunner",
          element: <WoolRunner />,
        },
        {
          path: "/shop/wool-runner-go",
          element: <WoolRunnerGo />,
        },
        {
          path: "/tees",
          element: <Tees />,
        },
        {
          path: "/underwear",
          element: <Underwear />,
        },
        {
          path: "/bags",
          element: <Bags />,
        },
        {
          path: "/hats",
          element: <Hats />,
        },
        {
          path: "/insoles",
          element: <Insoles />,
        },
        {
          path: "/lacekits",
          element: <LaceKits />,
        },
        {
          path: "/gift-cards",
          element: <GiftCards />,
        },
        {
          path: "/shop/mens",
          element: <Mens />,
        },
        {
          path: "/shop/protected-collection",
          element: <ProtectedCollection />,
        },

        {
          path: "/order/:id",
          element: <OrderPage />,
        },
        {
          path: "/shop-men",
          element: <ShopMen />,
        },
        {
          path: "/shop-women",
          element: <WomenShop />
        }

      ],
    },
    {
      path: "/Rerun",
      element: <Rerun />,
    },
    {
      path: "/Shop",
      element: <Shop />,
    },
    {
      path: "/AboutRerun",
      element: <AboutRerun />,
    },
    {
      path: "/HolidayDeal",
      element: <HolidayDeal />,
    },
    {
      path: "/Reruncart",
      element: <Reruncart />,
    },
    {
      path: "/RerunShopNow",
      element: <RerunShopNow />,
    },
  ],
  {
    future: {
      v7_skipActionErrorRevalidation: true,
    },
  }
);
const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};
export default App;
