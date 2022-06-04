import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

import {
  widthState,
  heightState,
  colorState,
  loadingState,
} from "../../config/keys";
import { Img } from "../../elements/Img";
import { Spacer } from "../../elements/Spacer";
import { BackgroundBox } from "../BackgroundBox";
import style from "./image.module.css";

export const Image: React.FC = () => {
  const width = useRecoilValue(widthState);
  const height = useRecoilValue(heightState);
  const color = useRecoilValue(colorState);
  const loading = useRecoilValue(loadingState);

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
      <div className={style.imageWrapper}>
        <div className={style.imageInner} data-loading={loading}>
          <Img src={href} width={width} height={height} alt="" />
        </div>
      </div>
      <Spacer height={{ s: 20, m: 24 }} />
      <BackgroundBox
        text="Image URL"
        href={href}
        color="gray"
        loading={loading}
      />
      <Spacer height={{ s: 10 }} />
      <BackgroundBox
        text="Current Source"
        src={href}
        color="lightBlue"
        loading={loading}
      />
    </div>
  );
};
