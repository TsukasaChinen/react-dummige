import { ReactNode } from "react";

type Props = {
  className?: string;
  text?: string;
  children: ReactNode;
};

export const SettingLabel: React.FC<Props> = ({
  className,
  text,
  children,
}) => {
  return (
    <label className={className}>
      {text && <span>{text}</span>}
      {children}
    </label>
  );
};
