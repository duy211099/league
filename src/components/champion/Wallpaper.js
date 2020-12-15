import React from "react";
// Redux
import { useSelector } from "react-redux";
// Styled & Anim
import styled from "styled-components";
import { motion } from "framer-motion";

const Wallpaper = () => {
  // Get Data
  const { currentChampion } = useSelector((state) => state.champion);
  const { title, name, id } = currentChampion;

  // Get img from name
  const getSplash = (name) =>
    `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${name}_0.jpg`;

  return (
    <div>
      <BackgroundImg
        style={{
          backgroundImage: `url(${getSplash(currentChampion.id)})`,
        }}
      />
      <Slash src={getSplash(id)} alt={name} />
      <Name>
        <h2>{title}</h2>
        <h1>{name} </h1>
      </Name>
    </div>
  );
};

const BackgroundImg = styled(motion.img)`
  pointer-events: none;
  top: 0;
  left: -5%;
  width: 110%;
  height: 120vh;
  position: absolute;
  /* Add the blur effect */
  filter: blur(8px) brightness(30%);
  -webkit-filter: blur(8px) brightness(50%);

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Slash = styled(motion.img)`
  height: 100vh;
  display: block;
  margin: 0 auto;
  position: relative;
  filter: brightness(80%);
`;

const Name = styled(motion.div)`
  position: absolute;
  left: 50%;
  bottom: 0.5rem;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  text-align: center;
  color: white;
  h1 {
    font-size: 6rem;
  }
  h2 {
    font-size: 2rem;
  }
`;

export default Wallpaper;
