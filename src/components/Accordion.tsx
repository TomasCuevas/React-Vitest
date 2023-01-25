import { useState } from "react";

//* interface *//
interface Props {
  children: React.ReactNode;
  title: string;
}

export const Accordion: React.FC<Props> = ({ children, title }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div>
        <h3>{title}</h3>
        <button onClick={() => setOpen((prev) => !prev)}>
          {open ? "close" : "open"}
        </button>
      </div>
      {open ? <div>{children}</div> : null}
    </div>
  );
};
