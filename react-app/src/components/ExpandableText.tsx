import { useState } from "react";

interface Props {
  children: string;
  maxChars?: number;
}

const ExpandableText = ({ children, maxChars = 100 }: Props) => {
  const [isExpanded, setExpanded] = useState(false);
  const handleClick = () => {
    setExpanded(!isExpanded);
  };
  if (children.length <= maxChars) return <p>{children}</p>;

  const text = isExpanded ? children : children.substring(0, maxChars);
  return (
    <div>
      {text}...
      <button onClick={handleClick}>{isExpanded ? "Less" : "More"}</button>
    </div>
  );
};

export default ExpandableText;
