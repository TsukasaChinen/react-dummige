type Props = React.ComponentPropsWithoutRef<"img">;

export const Img: React.FC<Props> = ({ src, alt }) => {
  return <img src={src} alt={alt} />;
};
