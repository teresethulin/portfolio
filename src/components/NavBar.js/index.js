import React from 'react';
import Menu from '../Menu/index';
import Burger from '../Burger/index';
import Logo from '../../assets/icons/logo-terese-thulin.svg';

const NavBar = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <nav className="navbar">
      <img src={Logo} alt="logo" className="logo" />
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
    </nav>
  );
};

export default NavBar;
