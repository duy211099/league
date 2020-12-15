import React from "react";
// Redux
import { useSelector } from "react-redux";
// Styled & Anim
import styled from "styled-components";
import { motion } from "framer-motion";

const Skins = () => {
  // Get Data
  const { currentChampion } = useSelector((state) => state.champion);
  const { skins, name } = currentChampion;

  console.log(skins);

  // Get Passive image
  const getSkin = (id) =>
    `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${name}_${id}.jpg`;

  const getSplash = (id) =>
    `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${name}_${id}.jpg`;

  return (
    <StyledSkins>
      <h2>Trang phục</h2>
      <Container>
        <SkinList>
          {skins.map((skin) => (
            <img src={getSkin(skin.num)} />
          ))}
        </SkinList>
        <p>Ngu</p>
      </Container>
    </StyledSkins>
  );
};

const StyledSkins = styled(motion.div)`
  height: 100vh;
`;

const Container = styled(motion.div)`
  height: 80vh;
  width: 90%;
  display: flex;
  margin: 0 auto;
  background: white;
`;

const Splash = styled(motion.img)`
  height: 80vh;
  width: 80%;
  position: absolute;
  object-fit: cover;
  z-index: 1;
`;

const Skin = styled(motion.img)``;

const SkinList = styled(motion.div)``;

export default Skins;
