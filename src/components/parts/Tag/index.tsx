import { useRecoilValue } from "recoil";

import { widthState, heightState, colorState } from "../../config/keys";
import { Spacer } from "../../elements/Spacer";
import { BackgroundBox } from "../BackgroundBox";

export const Tag: React.FC = () => {
  const width = useRecoilValue(widthState);
  const height = useRecoilValue(heightState);
  const color = useRecoilValue(colorState);

  const src = `${process.env.REACT_APP_API_URL}?size=${width}x${height}&color=${
    color ? color : "Not Set"
  }`;

  return (
    <div>
      <Spacer height={{ s: 10 }} />
      <BackgroundBox text="Current Source" src={src} color="lightBlue" />
    </div>
  );
};
