import React from "react";
// Styled & Anim
import styled from "styled-components";
import { motion } from "framer-motion";
// Route
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <StyledDiv>
      <h1>
        <Link id="logo" to="/">
          LoLSpy
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
    </StyledDiv>
  );
};

const StyledDiv = styled(motion.div)`
  min-height: 10vh;
  background-color: darkgray;
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
    color: black;
  }
`;

export default Nav;
