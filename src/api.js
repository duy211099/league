const version = "10.25.1";
const language = "vn_VN";

// DDRAGON URL
const ddragon_url = `https://ddragon.leagueoflegends.com/cdn/${version}/data/${language}/`;

const champions = `champion.json`;

export const championsURL = () => `${ddragon_url}${champions}`;
