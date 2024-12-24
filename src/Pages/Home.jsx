import { CardSection } from "../Components/Layout/CardSection";
import { Commitment } from "../Components/Layout/Commitment";
import { CrouselSection } from "../Components/Layout/CrouselSection";
import { CrouselSection1 } from "../Components/Layout/CrouselSection1";
import { HeroSection } from "../Components/Layout/HeroSection";
import { TestimonialSection } from "../Components/Layout/TestimonialSection";
import cardData from "../api/cardData.json"; // Importing card data
import { SignUp } from "./Signup";

export const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Cards Before Carousel */}
      <CardSection cards={cardData.slice(0, 3)} />
      <TestimonialSection />

      {/* Carousel Section */}
      <CrouselSection />

      {/* Cards After Carousel */}
      <CardSection cards={cardData.slice(3, 6)} />
      <CrouselSection1/>
      <SignUp/>
      <Commitment/>

 

    </>
  );
};
