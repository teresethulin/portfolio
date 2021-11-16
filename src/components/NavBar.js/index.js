import React from 'react';
import { Link } from '@reach/router';
import Menu from '../Menu/index';
import Burger from '../Burger/index';
import Logo from '../../assets/icons/logo-terese-thulin.svg';

const NavBar = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <nav className="navbar">
      <Link to="/">
        <img src={Logo} alt="logo" className="logo" />
      </Link>
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
    </nav>
  );
};

export default NavBar;
