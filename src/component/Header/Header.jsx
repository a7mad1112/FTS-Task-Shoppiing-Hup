import React, { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from 'reactstrap';
import { Link, NavLink } from 'react-router-dom';
import './header.css';
import Logo from '../../pages/component/logo/Logo';
import { cartContext } from '../../context/cartContext';
import { useSelector } from 'react-redux';
const NAV_LINKS = [
  {
    toDisplay: 'الرئيسية',
    path: '/',
    key: 0,
  },
  {
    toDisplay: 'منتجاتنا',
    path: '/products',
    key: 1,
  },
  {
    toDisplay: 'السلة',
    path: '/cart',
    key: 3,
  },
];

const Header = () => {
  const { setCartUiShow } = useContext(cartContext);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const menuRef = useRef(null);
  const headerRef = useRef(null);
  const toggleMenu = () => menuRef.current.classList.toggle('show_menu');
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      )
        headerRef.current.classList.add('header_shrink');
      else headerRef.current.classList.remove('header_shrink');

      return () => window.removeEventListener('scroll');
    });
  }, []);
  const whatsAppText = 'مرحبا, ارغب الاستسفار عن منتجاتكم';
  // handle search input
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchQuery.trim() !== '') {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };
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
                      navClass.isActive ? 'active_menu' : null
                    }
                  >
                    {item.toDisplay}
                  </NavLink>
                ))}
                {/* mobile social icons */}
                <div className="nav_right d-flex align-items-center gap-1 gap-sm-3 gap-lg-4">
                  <span className="cart_icon d-inline-block d-md-none">
                    <Link
                      to="https://www.instagram.com/a7mad.1112"
                      target="_blank"
                    >
                      <i className="ri-instagram-line"></i>
                    </Link>
                  </span>
                  <span className="cart_icon d-inline-block d-md-none">
                    <Link
                      to={`https://wa.me/+970592735331?text=${whatsAppText}`}
                      target="_blank"
                    >
                      <i className="ri-whatsapp-line"></i>
                    </Link>
                  </span>
                </div>
              </nav>
            </div>

            {/* === left icons === */}
            <div className="nav_right d-flex align-items-center gap-1 gap-sm-3 gap-lg-4">
              <span className="cart_icon" onClick={() => setCartUiShow(true)}>
                <i className="ri-shopping-basket-line"></i>
                <span className="cart_badge">{totalQuantity}</span>
              </span>
              <span className="cart_icon d-none d-md-inline-block">
                <Link to="https://www.instagram.com/a7mad.1112" target="_blank">
                  <i className="ri-instagram-line"></i>
                </Link>
              </span>
              <span className="cart_icon d-none d-md-inline-block">
                <Link
                  to={`https://wa.me/+970592735331?text=${whatsAppText}`}
                  target="_blank"
                >
                  <i className="ri-whatsapp-line"></i>
                </Link>
              </span>
              <span className="mobile_menu" onClick={toggleMenu}>
                <i className="ri-menu-line"></i>
              </span>
              <div className="search_widget header-search_widget d-flex align-items-center justify-content-between">
                <span onClick={handleSearch}>
                  <i className="ri-search-line"></i>
                </span>
                <input
                  type="search"
                  placeholder="انا ابحث عن"
                  value={searchQuery}
                  onChange={handleChange}
                  onKeyDown={handleKeyDown}
                />
              </div>
            </div>
          </div>
        </Container>
      </header>
      <div></div>
    </>
  );
};

export default Header;
