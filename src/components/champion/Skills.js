import React, { useState, useEffect } from "react";
// Redux
import { useSelector } from "react-redux";

const Skills = () => {
  // Get Data
  const { currentChampion } = useSelector((state) => state.champion);
  const { skills } = currentChampion;

  return (
    <div>
      <h2>Kỹ năng</h2>
      <div>
        {skills.map((skill) => (
          <div>
            <img key={skill.skill.id} src={skill.image} alt={skill.skill.id} />
            <video width="320" height="240" muted autoPlay loop>
              <source src={skill.video} type="video/webm" />
            </video>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
