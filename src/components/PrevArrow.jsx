import { ChevronLeft } from "lucide-react";

export default function PrevArrow(props) {
  const { onClick, className, style } = props;
  return (
    <ChevronLeft
    size={30}
      style={{
        ...style,
        display: "block",
        background: "",
        color: "black",
        border: "",
      }}
      onClick={onClick}
      className={className}
    >
    </ChevronLeft>
  );
}
