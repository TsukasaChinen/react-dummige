import style from "./footer.module.css";

export const Footer: React.FC = () => {
  return (
    <footer className={style.wrapper}>
      <small>copyright © 2022 trylight.net</small>
    </footer>
  );
};
