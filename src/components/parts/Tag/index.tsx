import { Spacer } from "../../elements/Spacer";
import style from "./tag.module.css";

export const Tag: React.FC = () => {
  return (
    <div className={style.wrapper}>
      <Spacer height={{ s: 10 }} />
      <dl className={style.current}>
        <dt>Current Source&nbsp;:&nbsp;</dt>
        <dd className={style.url}>
          &lt;img
          src="https://dummige.herokuapp.com/?size=500x280&color=116893"&gt;
        </dd>
      </dl>
    </div>
  );
};
