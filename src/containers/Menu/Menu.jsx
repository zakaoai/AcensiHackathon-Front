import React from "react";
import SiteMap from "/routes/SiteMap";
import MenuMobile from "./MenuMobile";
import MenuDesktop from "./MenuDesktop";

/**
 * Menu de l'application
 */
function Menu() {
  const links = [SiteMap.ACCUEIL];

  return (
    <>
      <MenuDesktop links={links} />
      <MenuMobile links={links} location={location} />
    </>
  );
}

export default Menu;
