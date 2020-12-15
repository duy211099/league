import React, { useEffect } from "react";
// Router
import { useLocation } from "react-router-dom";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { loadChampion } from "../actions/championAction";
// Styled & Anim
import styled from "styled-components";
import { motion } from "framer-motion";
// Components
import Skills from "../components/champion/Skills";
import Tips from "../components/champion/Tips";
import Lore from "../components/champion/Lore";
import Skins from "../components/champion/Skins";
import Wallpaper from "../components/champion/Wallpaper";

const ChampionDetail = () => {
  const location = useLocation();
  const championId = location.pathname.split("/")[2];

  console.log(championId);

  const dispatch = useDispatch();
  useEffect(() => {
    // Scroll to top
    window.scrollTo(0, 0);

    dispatch(loadChampion(championId));
  }, [dispatch]);

  // Get Data
  const { currentChampion } = useSelector((state) => state.champion);

  return (
    <StyledChampionDetail>
      <Wallpaper />
      <Lore />
      <Tips />
      <Skills />
      <Skins />
    </StyledChampionDetail>
  );
};

const StyledChampionDetail = styled(motion.div)`
  padding: 2rem 0rem;
  h2 {
    margin: 3rem 0 1rem 0;
    text-align: center;
  }
  table,
  tr,
  td,
  th {
    border: 1px solid black;
  }
`;

export default ChampionDetail;
