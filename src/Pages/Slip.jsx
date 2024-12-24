import { Explore } from "../Components/Layout/Explore";
import { RecentViewed } from "../Components/Layout/RecentViewd";
import { Slip1 } from "../components/Layout/Slip1";
import { Everyday2 } from "../Components/Layout/Everyday2";
import { Detail3 } from "../Components/Layout/Detail3";

import { Commitment } from "../Components/Layout/Commitment";

export const Slip =()=>{
    return(
        <>
            <Slip1/>
            <RecentViewed/>
            <Explore/>
            <Everyday2/>
            <Detail3/>
        
            <Commitment/>
        </>
    )
}