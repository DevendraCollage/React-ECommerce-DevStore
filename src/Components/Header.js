import React from "react";
import styled from "styled-components"; // For Use the styled components we need to import the styled-components
import { NavLink, Link } from "react-router-dom"; // For use the navigation in the app without render the page we need to import the NavLink router
import Nav from "./Nav";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <Link className="navbar-brand" to="/">
          <h2 className="logo">DevStore</h2>
        </Link>
      </NavLink>
      <Nav />
    </MainHeader>
  );
};

//? This is the styled components CSS code
const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 8rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    /* height: 5rem; Temporary Comment This Code*/
    font-size: 3.5rem;
    font-weight: 800;
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    line-height: 1.2;
    margin: 0;
    padding: 0;
    font-family: "Poppins", sans-serif;
  }
`;

export default Header;
