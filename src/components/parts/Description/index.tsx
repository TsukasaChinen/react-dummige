import { useRecoilValue } from "recoil";

import { loadingState } from "../../config/keys";
import { Spacer } from "../../elements/Spacer";
import style from "./description.module.css";

export const Description: React.FC = () => {
  const loading = useRecoilValue(loadingState);

  return (
    <div className={style.wrapper}>
      <Spacer height={{ s: 20, m: 28 }} />
      <p data-loading={loading}>
        <span>画像生成API</span>
        <a
          className={style.link}
          href={process.env.REACT_APP_API_URL}
          target="_blank"
          rel="noreferrer"
        >
          {process.env.REACT_APP_API_URL}
        </a>
        <span>の動作確認用ページです。</span>
      </p>
      <p data-loading={loading}>
        <span>クエリにサイズとカラーコードを指定して画像を生成できます。</span>
      </p>
      <Spacer height={{ s: 10, m: 20 }} />
      <p className={style.notice} data-loading={loading}>
        <span>※下記フォームからAPIの動作を確認できます。</span>
      </p>
    </div>
  );
};
