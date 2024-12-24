import { ShopAll1 } from "../Components/Layout/ShopAll1";

import { Explore } from "../Components/Layout/Explore";
import { Info } from "../Components/Layout/Info.jsx";
import { RecentViewed } from "../Components/Layout/RecentViewd";

const ShopAll = () => {
  return (
    <>
      <ShopAll1/>
      <RecentViewed/>
      
      <Explore/>
      <Info/>


    </>
  )
}

export default ShopAll
