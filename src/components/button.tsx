type Props = {
  title: string;
  color: string;
};

export default function MyActionButton(props: Props) {
  const { title, color } = props;
  return <button style={{ backgroundColor: color }}>{title}</button>;
}
