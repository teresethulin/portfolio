import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';

const StyledMenu = styled.nav`
  z-index: -1;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 50vw;
  height: 100vh;
  margin: 0;
  padding: 4rem;
  background: #0000ff;
  text-align: left;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease-in-out;

  @media (max-width: 576px) {
    width: 100vw;
    background-color: white;
  }

  a {
    padding: 2rem 0;
    font-size: 40px;
    line-height: 40px;
    letter-spacing: 0.001em;
    color: white;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: rgba(255, 255, 255, 0.7);
      transition: color ease-in 0.2s;
    }
  }
`;

const Menu = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open}>
      <Link to="/" onClick={() => setOpen(!open)}>
        Projects
      </Link>
      <Link to="/about" onClick={() => setOpen(!open)}>
        About
      </Link>
      <Link to="/contact" onClick={() => setOpen(!open)}>
        Contact
      </Link>
    </StyledMenu>
  );
};

export default Menu;
