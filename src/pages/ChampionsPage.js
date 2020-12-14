import React, { useEffect } from "react";
// REDUX
import { useDispatch, useSelector } from "react-redux";
import { loadChampions } from "../actions/championAction";
// Styled & Anim
import styled from "styled-components";
import { motion } from "framer-motion";
// Components
import Champion from "../components/Champion";

function ChampionsPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadChampions());
  }, [dispatch]);

  // Get Data
  const { champions } = useSelector((state) => state.champion);

  return (
    <StyledHome>
      <h2>Tướng</h2>
      <ChampionList>
        {champions.map((champion) => (
          <Champion name={champion.name} id={champion.id} key={champion.id} />
        ))}
      </ChampionList>
    </StyledHome>
  );
}

const StyledHome = styled(motion.div)`
  padding: 2rem;
`;

const ChampionList = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  padding: 2rem;
`;

export default ChampionsPage;
