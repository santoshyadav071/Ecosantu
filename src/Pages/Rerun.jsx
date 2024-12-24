
import { CommitmentRerun } from "../Components/Layout/CommitmentRerun"
import { FationCard } from "../Components/Layout/FationCard"
import { HeroSectionRerun } from "../Components/Layout/HeroSectionRerun"
import { NaturalMaterial } from "../Components/Layout/NaturalMaterial"
import { RecentCard } from "../Components/Layout/RecentCard"
import { RecentCard2 } from "../Components/Layout/RecentCard2"
import { RerunCommitment2 } from "../Components/Layout/RerunCommitment2"
import { FooterRerun } from "../Components/UI/FooterRerun"
import { HeaderRerun } from "../Components/UI/HeaderRerun"

export const Rerun =()=>{
    return(
        <>
        <HeaderRerun/>
        <HeroSectionRerun/>
        <CommitmentRerun/>
         <FationCard/>
         <RerunCommitment2/>
         <RecentCard/>
         <NaturalMaterial/>
          <RecentCard2/>
        <FooterRerun/>
        
        </>
    )
}