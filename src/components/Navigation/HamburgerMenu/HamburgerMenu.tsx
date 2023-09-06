import "./HamburgerMenu.css";
import { NavList } from "../NavList/NavList.tsx";

type HamburgerMenuProps = {
  isOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
};

export const HamburgerMenu = ({
  isOpen,
  toggleMenu,
  closeMenu,
}: HamburgerMenuProps) => {
  return (
    <div className="hamburger-menu">
      <div className={`menu-icon ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Render the menu items when the menu is open */}
      {isOpen && (
        <div className="menu-items">
          <NavList closeMenu={closeMenu} />
        </div>
      )}
    </div>
  );
};
