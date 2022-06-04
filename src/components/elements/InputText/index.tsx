type Props = React.ComponentPropsWithoutRef<"input">;

export const InputText: React.FC<Props> = ({ value, onChange }) => {
  return <input type="text" value={value} onChange={onChange} />;
};
