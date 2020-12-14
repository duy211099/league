import React, { useEffect } from "react";
// REDUX
import { useDispatch, useSelector } from "react-redux";
import { loadChampions } from "../actions/championAction";
// Styled & Anim
import styled from "styled-components";
import { motion } from "framer-motion";
import Champion from "../components/Champion";
import Aatrox from "../img/img/champion/loading/Aatrox_0.jpg";
var Diamond = require("../img/img/champion/loading/Aatrox_0.jpg");

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadChampions());
  }, [dispatch]);

  // Get Data
  const { champions } = useSelector((state) => state.champion);

  return (
    <ChampionList>
      <h2>Tướng</h2>
      {champions.map((champion) => (
        <Champion name={champion.name} key={champion.id} />
      ))}
    </ChampionList>
  );
}

const ChampionList = styled(motion.div)``;
const Champions = styled(motion.div)``;

export default Home;
