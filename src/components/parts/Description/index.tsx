import { Spacer } from "../../elements/Spacer";
import style from "./description.module.css";

export const Description: React.FC = () => {
  return (
    <div className={style.wrapper}>
      <Spacer height={{ s: 20, m: 28 }} />
      <p>
        画像生成API
        <a
          className={style.link}
          href={process.env.REACT_APP_API_URL}
          target="_blank"
          rel="noreferrer"
        >
          {process.env.REACT_APP_API_URL}
        </a>
        の動作確認用ページです。
      </p>
      <p>クエリにサイズとカラーコードを指定して画像を生成できます。</p>
      <Spacer height={{ s: 10, m: 20 }} />
      <p className={style.notice}>※下記フォームからAPIの動作を確認できます。</p>
    </div>
  );
};
