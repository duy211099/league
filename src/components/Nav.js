import React from "react";
// Styled & Anim
import styled from "styled-components";
import { motion } from "framer-motion";
// Route
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <StyledNav>
      <span>
        <Link id="logo" to="/">
          LoLSpy
        </Link>
      </span>
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
  }
  a {
    text-decoration: none;
    color: white;
  }
`;

export default Nav;
