const version = "10.25.1";
const language = "vn_VN";

// DDRAGON URL
const ddragon_url = `https://ddragon.leagueoflegends.com/cdn/${version}/data/${language}/`;

const champions = `champion.json`;

// Videos URL
const video_url = `https://d28xe8vt774jo5.cloudfront.net/champion-abilities/`;

export const championsURL = () => `${ddragon_url}${champions}`;

export const championURL = (champion) =>
  `${ddragon_url}champion/${champion}.json`;

// Get videos
export const videoURL = (id, skill) =>
  `${video_url}${id}/ability_${id}_${skill}1.webm`;

// Get skill image
export const spellURL = (name) =>
  `http://ddragon.leagueoflegends.com/cdn/10.25.1/img/spell/${name}.png`;
// Get Passive image
export const passiveURL = (name) =>
  `http://ddragon.leagueoflegends.com/cdn/10.25.1/img/passive/${name}`;
