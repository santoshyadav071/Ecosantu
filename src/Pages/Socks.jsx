import { CardSection2 } from "../Components/Layout/Cardsection2";
import { CardSection3 } from "../Components/Layout/CardSection3";
import { CozyCards } from "../Components/Layout/CozyCards";
import { HeroSection2 } from "../Components/Layout/HeroSection2";
import CozyData from "../api/CozyData.json"
import { Detail } from "../Components/Layout/Detail";
import { Commitment2 } from "../Components/Layout/Commitment2";

export const Socks = () => {
  return (
    <>
      <HeroSection2/>
      <CardSection2 />
      <CardSection3 />
      
      {/* First 4 cards */}
     {/* <CozyCards CozyCards={CozyData.slice(0, 2)} />*/}

      {/* Next 4 cards */}
      <CozyCards CozyCards={CozyData.slice(2, 4)} />
      <Detail/>
      <Commitment2/>
    </>
  );
};
