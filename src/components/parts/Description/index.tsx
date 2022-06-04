import { Spacer } from "../../elements/Spacer";
import style from "./description.module.css";

export const Description: React.FC = () => {
  return (
    <div className={style.wrapper}>
      <Spacer height={{ s: 20, m: 28 }} />
      <p>
        このページはGoで生成した画像生成プログラム
        <a
          className={style.link}
          href="https://dummige.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
        >
          https://dummige.herokuapp.com/
        </a>
        のデモサイトです。
      </p>
      <p>URLにクエリを追加することでサイズとカラーコードの指定ができます。</p>
    </div>
  );
};
