import { atom } from "recoil";

export const widthState = atom<number>({
  key: "widthState",
  default: 280,
});

export const heightState = atom<number>({
  key: "heightState",
  default: 156,
});

export const colorState = atom<string>({
  key: "colorState",
  default: "116893",
});
