import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

import { widthState, heightState, colorState } from "../../config/keys";
import { Img } from "../../elements/Img";
import { Spacer } from "../../elements/Spacer";
import { BackgroundBox } from "../BackgroundBox";
import style from "./image.module.css";

export const Image: React.FC = () => {
  const width = useRecoilValue(widthState);
  const height = useRecoilValue(heightState);
  const color = useRecoilValue(colorState);

  const [href, setHref] = useState<string>(
    `${process.env.REACT_APP_API_URL}?size=${width}x${height}&color=${
      color ? color : "Not Set"
    }`
  );

  useEffect(() => {
    setHref(
      `${process.env.REACT_APP_API_URL}?size=${width}x${height}&color=${
        color ? color : "Not Set"
      }`
    );
  }, [width, height, color]);

  return (
    <div className={style.wrapper}>
      <Spacer height={{ s: 20, m: 24 }} />
      <div className={style.image}>
        <Img src={href} width={width} height={height} alt="" />
      </div>
      <Spacer height={{ s: 20, m: 24 }} />
      <BackgroundBox text="Image URL" href={href} color="gray" />
    </div>
  );
};
