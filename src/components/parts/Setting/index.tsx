import { useRecoilValue, useRecoilState } from "recoil";

import {
  widthState,
  heightState,
  colorState,
  loadingState,
} from "../../config/keys";
import { Spacer } from "../../elements/Spacer";
import { InputNumber } from "../../elements/InputNumber";
import { InputText } from "../../elements/InputText";
import { SettingLabel } from "./SettingLabel";
import style from "./setting.module.css";

export const Setting: React.FC = () => {
  const [width, setWidth] = useRecoilState(widthState);
  const [height, setheight] = useRecoilState(heightState);
  const [color, setColor] = useRecoilState(colorState);

  const loading = useRecoilValue(loadingState);

  const handleChangeWidth = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWidth(Number(e.target.value));
  };

  const handleChangeHeight = (e: React.ChangeEvent<HTMLInputElement>) => {
    setheight(Number(e.target.value));
  };

  const handleChangeColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };

  return (
    <div className={style.wrapper}>
      <Spacer height={{ s: 10 }} />
      <div className={style.content}>
        <SettingLabel className={style.label} text="width" loading={loading}>
          <InputNumber value={width} onChange={handleChangeWidth} />
        </SettingLabel>
        <SettingLabel className={style.label} text="Height" loading={loading}>
          <InputNumber value={height} onChange={handleChangeHeight} />
        </SettingLabel>
        <SettingLabel className={style.label} text="Color" loading={loading}>
          <InputText value={color} onChange={handleChangeColor} />
        </SettingLabel>
      </div>
    </div>
  );
};
