import { Spacer } from "../../elements/Spacer";
import style from "./setting.module.css";

export const Setting: React.FC = () => {
  return (
    <div className={style.wrapper}>
      <Spacer height={{ s: 10 }} />
      <div className={style.content}>
        <label className={style.label}>
          <span className={style.labelText}>Width</span>
          <input type="number" value="500" />
        </label>
        <label className={style.label}>
          <span className={style.labelText}>Height</span>
          <input type="number" value="280" />
        </label>
        <label className={style.label}>
          <span className={style.labelText}>Color</span>
          <input type="text" value="116893" />
        </label>
      </div>
    </div>
  );
};
