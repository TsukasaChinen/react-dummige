import { Spacer } from "../../elements/Spacer";
import style from "./image.module.css";

export const Image: React.FC = () => {
  return (
    <div className={style.wrapper}>
      <Spacer height={{ s: 20, m: 24 }} />
      <div className={style.image}>
        <img
          src="https://dummige.herokuapp.com/?size=500x280&color=116893"
          alt="Created by Program"
        />
      </div>
      <Spacer height={{ s: 20, m: 24 }} />
      <dl className={style.current}>
        <dt>Image URL&nbsp;:&nbsp;</dt>
        <dd className={style.url}>
          <a
            href="https://dummige.herokuapp.com/?size=500x280&color=116893"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://dummige.herokuapp.com/?size=500x280&color=116893"
          </a>
        </dd>
      </dl>
    </div>
  );
};
