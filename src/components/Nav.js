import React from "react";
// Styled & Anim
import styled from "styled-components";
import { motion } from "framer-motion";
// Route
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <Link id="logo" to="/">
          lolspy.
        </Link>
      </h1>
      <ul>
        <li>
          <Link id="champion" to="/">
            Tướng
          </Link>
        </li>
        <li>
          <Link id="item" to="/items">
            Trang bị
          </Link>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled(motion.div)`
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;
  min-height: 10vh;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 5rem;
  ul {
    display: flex;
    list-style: none;
  }
  li {
    padding-left: 5rem;
    position: relative;
    font-size: 1rem;
  }
  a {
    text-decoration: none;
    color: white;
  }
  h1 {
    font-family: "Abril Fatface", cursive;
  }
`;

export default Nav;
