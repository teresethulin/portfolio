import React from 'react';
import styled from 'styled-components';
import Menu from '../Menu/index';
import Burger from '../Burger/index';

const StyledNav = styled.nav`
  position: fixed;
  width: 100vw;
  height: 70px;
`;

const NavBar = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <StyledNav className="navbar">
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
    </StyledNav>
  );
};

export default NavBar;
