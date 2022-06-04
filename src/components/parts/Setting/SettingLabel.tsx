import { ReactNode } from "react";

type Props = {
  className?: string;
  text?: string;
  children: ReactNode;
  loading?: boolean;
};

export const SettingLabel: React.FC<Props> = ({
  className,
  text,
  children,
  loading,
}) => {
  return (
    <label className={className} data-loading={loading}>
      {text && <span>{text}</span>}
      {children}
    </label>
  );
};
