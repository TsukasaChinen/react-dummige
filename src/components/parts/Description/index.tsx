import { Spacer } from "../../elements/Spacer";
import style from "./description.module.css";

export const Description: React.FC = () => {
  return (
    <div className={style.wrapper}>
      <Spacer height={{ s: 20, m: 28 }} />
      <p>
        画像生成プログラム
        <a
          className={style.link}
          href="https://dummige.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
        >
          https://dummige.herokuapp.com/
        </a>
        の動作確認用ページです。
      </p>
      <p>
        上記のURLはクエリを追加することでサイズとカラーコードを指定し画像を生成できます。
      </p>
      <Spacer height={{ s: 10, m: 20 }} />
      <p className={style.notice}>
        ※このページは動作確認のためフォームでサイズとカラーコードを設定できます。
      </p>
    </div>
  );
};
