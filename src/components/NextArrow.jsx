import { ChevronRight } from "lucide-react";

export default function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <ChevronRight
      size={90}
      className={className}
      style={{ ...style, display: "block", color: "black", border: "" }}
      onClick={onClick}
    />
  );
}
