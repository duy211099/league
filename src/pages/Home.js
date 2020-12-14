import React, { useEffect } from "react";
// REDUX
import { useDispatch, useSelector } from "react-redux";
import { loadChampions } from "../actions/championAction";
// Styled & Anim
import styled from "styled-components";
import { motion } from "framer-motion";
import Champion from "../components/Champion";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadChampions());
  }, [dispatch]);

  // Get Data
  const { champions } = useSelector((state) => state.champion);

  console.log(typeof champions);

  return (
    <ChampionList>
      <h2>TƯớng</h2>
      <Champion />
    </ChampionList>
  );
}

const ChampionList = styled(motion.div)``;
const Champions = styled(motion.div)``;

export default Home;
