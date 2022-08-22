import NavBar from "./NavBar";
import CustomCarousal from "./Carousal";
import FooterComponent from "./Footer";
import ContactUsComponent from "./ContactUs";
import React from "react";
import { Outlet } from "react-router-dom";

function LayoutCompontent() {
  return (
    <React.Fragment>
      <NavBar theme="light" />
      <CustomCarousal />
      <Outlet />
      <FooterComponent />
    </React.Fragment>
  );
}

export default LayoutCompontent;