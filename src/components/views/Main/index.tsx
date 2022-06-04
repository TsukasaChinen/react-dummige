import { useEffect } from "react";
import { useRecoilState } from "recoil";

import { loadingState } from "../../config/keys";
import { Description } from "../../parts/Description";
import { Image } from "../../parts/Image";
import { Setting } from "../../parts/Setting";

export const Main: React.FC = () => {
  const [loading, setLoading] = useRecoilState(loadingState);

  useEffect(() => {
    if (window && loading) {
      window.addEventListener("load", () => {
        setLoading(false);
      });
      return;
    }
  }, [loading, setLoading]);

  return (
    <main>
      <Description />
      <Setting />
      <Image />
    </main>
  );
};
