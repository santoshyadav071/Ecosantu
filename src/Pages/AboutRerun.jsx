import { AboutrerunCommitment } from "../Components/Layout/AboutrerunCommitment"
import { ByUsed } from "../Components/Layout/ByUsed"
import { CrouselSection1 } from "../Components/Layout/CrouselSection1"
import { HeroSectionAbout } from "../Components/Layout/HerosectionAbout"
import { HeroSectionaboutrerun2 } from "../Components/Layout/HeroSectionaboutrerun2"
import { HeroSectionaboutrerun3 } from "../Components/Layout/HeroSectionaboutrerun3"
import { FooterRerun } from "../Components/UI/FooterRerun"
import { HeaderRerun } from "../Components/UI/HeaderRerun"

export const AboutRerun =()=>{
    return(
        <>  <HeaderRerun/>
            <HeroSectionAbout/>
            <AboutrerunCommitment/>
             <ByUsed/>
             <HeroSectionaboutrerun2/>
             <HeroSectionaboutrerun3/>
             <CrouselSection1/>
            <FooterRerun/>
        </>
    )
}