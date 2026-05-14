type Props = {
  className?: string;
};

export default function Code({ className }: Props) {
  return (
    <svg
      width="44"
      height="30"
      viewBox="0 0 44 30"
      opacity="0.3"
      className={className}
    >
      <rect
        x="2"
        y="6"
        width="40"
        height="18"
        fill="none"
        stroke="#7c5cbf"
        strokeWidth="1"
      ></rect>
      <line
        x1="6"
        y1="11"
        x2="20"
        y2="11"
        stroke="#7c5cbf"
        strokeWidth="1"
      ></line>
      <line
        x1="6"
        y1="15"
        x2="16"
        y2="15"
        stroke="#7c5cbf"
        strokeWidth="1"
      ></line>
      <line
        x1="6"
        y1="19"
        x2="22"
        y2="19"
        stroke="#7c5cbf"
        strokeWidth="1"
      ></line>
    </svg>
  );
}
