import React, { useState } from "react";
// Redux
import { useSelector } from "react-redux";
// Styled & Anim
import styled from "styled-components";
import { motion } from "framer-motion";

const Skins = () => {
  // Get Data
  const { currentChampion } = useSelector((state) => state.champion);
  const { skins, name } = currentChampion;

  // Get Passive image
  const getSkin = (id) =>
    `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${name}_${id}.jpg`;

  const getSplash = (id) =>
    `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${name}_${id}.jpg`;

  // Get image to change Spash
  const getSkinHandle = (id) => {
    setSplash(id);
    console.log(splash);
  };

  // State
  const [splash, setSplash] = useState(0);

  return (
    <StyledSkins>
      <h2>Trang phục</h2>
      <Carousel>
        <Splash src={getSplash(splash)} />
        <SkinList>
          {skins.map((skin) => (
            <Skin onClick={() => getSkinHandle(skin.num)}>
              <SkinImage> 
                <img src={getSkin(skin.num)} />
              </SkinImage>
              <SkinName>
                <h3>{skin.name === "default" ? "Mặc định" : skin.name}</h3>
              </SkinName>
            </Skin>
          ))}
        </SkinList>
      </Carousel>
    </StyledSkins>
  );
};

const StyledSkins = styled(motion.div)`
  height: 100vh;
`;

const Carousel = styled(motion.div)`
  width: 80%;
  height: 80vh;
  overflow: hidden;
  margin: 0 auto;
`;

const Splash = styled(motion.img)`
  position: absolute;
  width: 80%;
  height: 80vh;
  pointer-events: none;
  z-index: -1;
`;

const SkinImage = styled(motion.div)`
  width: 50%;
  height: 10rem;
  overflow: hidden;
  img {
    z-index: 2;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const SkinName = styled(motion.div)`
  width: 50%;
  color: white;
  margin: auto;
  h3 {
    text-align: center;
    margin: 0rem 0.5rem;
  }
`;

const Skin = styled(motion.div)`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  margin: 1rem 1rem;
  padding: 0.25rem;
  background-color: rgba(200, 200, 200, 0.1);
`;

const SkinList = styled(motion.div)`
  z-index: 2;
  width: 30%;
  overflow: auto;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default Skins;
