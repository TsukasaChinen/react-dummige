import style from "./backgroundBox.module.css";

type Props = {
  text: string;
  href?: string;
  src?: string;
  color?: "gray" | "lightBlue";
  loading?: boolean;
};

export const BackgroundBox: React.FC<Props> = ({
  text,
  href,
  src,
  color,
  loading,
}) => {
  return (
    <dl
      className={`${style.current} ${
        color === "gray" ? "bgGray" : "bgLightBlue"
      }`}
      data-loading={loading}
    >
      <dt>{text}&nbsp;:&nbsp;</dt>
      <dd className={style.url}>
        {href && (
          <a href={href} target="_blank" rel="noopener noreferrer">
            {href}
          </a>
        )}
        {src && <>&lt;img src="{src}"&gt;</>}
      </dd>
    </dl>
  );
};
