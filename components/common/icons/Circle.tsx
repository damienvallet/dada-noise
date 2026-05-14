type Props = {
  className?: string;
};

export default function Code({ className }: Props) {
  return (
<svg width="44" height="30" viewBox="0 0 44 30" opacity="0.3" className={className}>
            <circle cx="22" cy="15" r="11" fill="none" stroke="#7c5cbf" strokeWidth="1"></circle>
            <circle cx="22" cy="15" r="5" fill="none" stroke="#7c5cbf" strokeWidth="1"></circle>
            <circle cx="22" cy="15" r="1.5" fill="#7c5cbf"></circle>
          </svg>);
}