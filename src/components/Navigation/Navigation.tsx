import classes from "./Navigation.module.css";
import { HamburgerMenu } from "./HamburgerMenu/HamburgerMenu.tsx";
import { useState } from "react";
import { NavList } from "./NavList/NavList.tsx";
import promo from "../../../public/cover.png";

export const Navigation = () => {
  // State to track whether the menu is open or closed
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav id="nav">
        <div className={classes.img_wrapper}>
          <img src={promo} className="img_promo_mobile" />
        </div>
        <HamburgerMenu
          isOpen={isOpen}
          toggleMenu={toggleMenu}
          closeMenu={closeMenu}
        />
        <div className={classes.desktopOnlyMenu}>
          <NavList closeMenu={closeMenu} />
        </div>
      </nav>
    </>
  );
};
