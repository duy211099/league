import React, { useState, useRef, useEffect } from "react";
// Redux
import { useSelector } from "react-redux";
// Styled & Anim
import styled from "styled-components";
import { motion } from "framer-motion";

const Skills = () => {
  // Get Data
  const { currentChampion } = useSelector((state) => state.champion);
  const { skills } = currentChampion;

  const [video, setVideo] = useState(currentChampion.skills[0].video);
  const [skillDetail, setSkillDetail] = useState(
    currentChampion.skills[0].skill
  );

  // ref
  const videoRef = useRef(null);
  const skillHandler = (url) => {
    setVideo(url.video);
    setSkillDetail(url.skill);
    videoRef.current.load();
  };

  return (
    <div>
      <h2>Kỹ năng</h2>
      <Container>
        <SkillContainer>
          <SkillSelector>
            {skills.map((skill) => (
              <img
                key={skill.skill.id}
                src={skill.image}
                alt={skill.skill.id}
                onClick={() => skillHandler(skill)}
              />
            ))}
          </SkillSelector>
          <SkillDetail>
            <h3>{skillDetail.name}</h3>
            <p
              dangerouslySetInnerHTML={{ __html: skillDetail.description }}
            ></p>
          </SkillDetail>
        </SkillContainer>
        <Video>
          <video ref={videoRef} muted autoPlay loop>
            <source src={video} type="video/webm" />
          </video>
        </Video>
      </Container>
    </div>
  );
};

const Container = styled(motion.div)`
  padding-top: 2rem;
  display: flex;
  align-items: start;
  flex-wrap: space-between;
`;

const SkillContainer = styled(motion.div)`
  width: 50%;
  display: flex;
  flex-flow: column;
`;

const Video = styled(motion.div)`
  width: 50%;
  display: flex;
  justify-content: center;
  video {
    width: 80%;
  }
`;

const SkillSelector = styled(motion.div)`
  display: flex;
  justify-content: center;
  img {
    padding: 0 0.5rem;
  }
`;

const SkillDetail = styled(motion.div)`
  margin: 2rem 5rem;
  min-height: 10rem;
  padding: 1rem 2rem;
  background-color: rgba(0, 0, 0, 0.1);
  h3 {
    text-align: center;
    padding-bottom: 0.5rem;
  }
`;

export default Skills;
