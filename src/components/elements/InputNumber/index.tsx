type Props = React.ComponentPropsWithoutRef<"input">;

export const InputNumber: React.FC<Props> = ({ value, onChange }) => {
  return <input type="number" value={value ? value : ""} onChange={onChange} />;
};
