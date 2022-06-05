import { Description } from "../../parts/Description";
import { Image } from "../../parts/Image";
import { Setting } from "../../parts/Setting";

export const Main: React.FC = () => {
  return (
    <main>
      <Description />
      <Setting />
      <Image />
    </main>
  );
};
