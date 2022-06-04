import { Logo } from "../../elements/Logo";
import style from "./header.module.css";

export const Header: React.FC = () => {
  return (
    <header className={style.wrapper}>
      <div className={style.inner}>
        <h1 className={style.h1}>
          <a href="./" className={style.link}>
            <Logo />
          </a>
        </h1>
      </div>
    </header>
  );
};
