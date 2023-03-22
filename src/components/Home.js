import React from "react";
import Aside from "./Aside";
import AsideDrawer from "./AsideDrawer";
import BankDetails from "./BankDetails";

function Home() {
  return (
    <div className="flex">
      <Aside />
      <AsideDrawer/>
      <BankDetails />
    </div>
  );
}

export default Home;
