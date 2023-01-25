interface Props {
  children: React.ReactNode;
  title: string;
}

export const Accordion: React.FC<Props> = ({ children, title }) => {
  return (
    <div>
      <h3>{title}</h3>
      <div>{children}</div>
    </div>
  );
};
