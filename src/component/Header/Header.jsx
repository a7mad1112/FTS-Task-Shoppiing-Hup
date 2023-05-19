import React, { useContext, useEffect, useRef } from "react";
import { Container } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import "./header.css";
import Logo from "../../pages/component/logo/Logo";
import { cartContext } from "../../context/cartContext";
const NAV_LINKS = [
  {
    toDisplay: "Home",
    path: "/",
    key: 0,
  },
  {
    toDisplay: "Products",
    path: "/products",
    key: 1,
  },
  {
    toDisplay: "Cart",
    path: "/cart",
    key: 2,
  },
  {
    toDisplay: "Checkout",
    path: "/checkout",
    key: 3,
  },
];

const Header = () => {
  const { totalQuantity, setCartUiShow } = useContext(cartContext);

  const menuRef = useRef(null);
  const headerRef = useRef(null);
  const toggleMenu = () => menuRef.current.classList.toggle("show_menu");
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      )
        headerRef.current.classList.add("header_shrink");
      else headerRef.current.classList.remove("header_shrink");

      return () => window.removeEventListener("scroll");
    });
  }, []);

  return (
    <>
      <header ref={headerRef} className="header">
        <Container>
          <div className="nav_wrapper d-flex align-items-center justify-content-between">
            <Logo />

            {/* === menu === */}
            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <nav className="menu d-flex align-items-center gap-5">
                {NAV_LINKS.map((item) => (
                  <NavLink
                    to={item.path}
                    key={item.key}
                    className={(navClass) =>
                      navClass.isActive ? "active_menu" : null
                    }
                  >
                    {item.toDisplay}
                  </NavLink>
                ))}
              </nav>
            </div>

            {/* === right icons === */}
            <div className="nav_right d-flex align-items-center gap-4">
              <span className="cart_icon" onClick={() => setCartUiShow(true)}>
                <i className="ri-shopping-basket-line"></i>
                <span className="cart_badge">{totalQuantity}</span>
              </span>
              <span className="user">
                <Link to="/login">
                  <i className="ri-user-line"></i>
                </Link>
              </span>
              <span className="mobile_menu" onClick={toggleMenu}>
                <i className="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Container>
      </header>
      <div></div>
    </>
  );
};

export default Header;
