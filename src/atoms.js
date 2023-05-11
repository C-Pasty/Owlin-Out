import { atomWithStorage } from "jotai/utils";
const playerTemplate = {
  name: "Soren",
  image: "images/Owlimage.png",
  attack: 5,
  health: 25,
  maxHealth: 25,
  gold: 0,
  level: 1,
  experience: 0,
  attackSpeed: 1000,
  isAlive: true,
};
export const playerData = atomWithStorage("saveData", { ...playerTemplate });
