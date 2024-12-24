import { Outlet } from "react-router-dom";
import { HeaderRerun } from "../UI/HeaderRerun";
import { FooterRerun } from "../UI/FooterRerun";

export const ApplayoutRerun = () => {
  return (
    <>
      <HeaderRerun />
      <main>
        <Outlet />
      </main>
      <FooterRerun />
    </>
  );
};
