import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';

const StyledMenu = styled.nav`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50vw;
  height: 100vh;
  margin: 0;
  padding: 4rem;
  background: #ededed;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  text-align: left;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 576px) {
    width: 100vw;
  }

  a {
    font-size: 2rem;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: black;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      opacity: 0.6;
    }
  }
`;

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </StyledMenu>
  );
};

export default Menu;
