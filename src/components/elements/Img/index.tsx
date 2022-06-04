type Props = React.ComponentPropsWithoutRef<"img">;

export const Img: React.FC<Props> = ({ src, width, height, alt }) => {
  return <img src={src} width={width} height={height} alt={alt} />;
};
