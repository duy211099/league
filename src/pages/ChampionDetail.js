import React, { useEffect } from "react";
// Router
import { useLocation } from "react-router-dom";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { loadChampion } from "../actions/championAction";
// Styled & Anim
import styled from "styled-components";
import { motion } from "framer-motion";

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
  const { allytips, enemytips, info, stats } = currentChampion;
  // Get img from name
  const getSplash = (name) =>
    `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${name}_0.jpg`;

  return (
    <StyledChampionDetail>
      <BackgroundImg
        style={{
          backgroundImage: `url(${getSplash(currentChampion.id)})`,
        }}
      />
      <Slash src={getSplash(currentChampion.id)} alt={currentChampion.name} />
      <Name>
        <h2>{currentChampion.title}</h2>
        <h1>{currentChampion.name} </h1>
      </Name>
      <h2>Cốt truyện</h2>
      <p>{currentChampion.lore}</p>
      <h2>Mẹo</h2>
      <table>
        <tr>
          <th>Sử dụng</th>
          <th>Đối đầu</th>
        </tr>
        <tr>
          <td>
            <ul>
              {allytips.map((tip) => (
                <li>{tip}</li>
              ))}
            </ul>
          </td>
          <td>
            <ul>
              {enemytips.map((tip) => (
                <li>{tip}</li>
              ))}
            </ul>
          </td>
        </tr>
      </table>
      <h2>Thông tin</h2>
      <ul>
        <li>Tấn công: {info.attack}</li>
        <li>Phòng thủ: {info.defense}</li>
        <li>Phép thuật: {info.magic}</li>
        <li>Độ khó: {info.difficulty}</li>
      </ul>
    </StyledChampionDetail>
  );
};

const StyledChampionDetail = styled(motion.div)`
  padding: 2rem 0rem;
  z-index: -100;
  background-color: darkgray;
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

export default ChampionDetail;
