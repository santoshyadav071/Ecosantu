import { MensR1 } from "../Components/Layout/MensR1"
import { RecentViewed } from "../Components/Layout/RecentViewd"
import { Explore } from "../Components/Layout/Explore"
import { Everyday } from "../Components/Layout/Everyday"
import { Detail } from "../Components/Layout/Detail"
import { Commitment } from "../Components/Layout/Commitment"
export const MensRunner =()=>{      
    return(
        <>
        <MensR1/>
        <RecentViewed/>
        <Explore/>
        <Everyday/>
        <Detail/>
        <Commitment/>
        </>
    )
}