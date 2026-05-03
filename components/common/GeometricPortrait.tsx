type Props = {
  variant: "simple" | "complete";
};

export default function GeometricPortrait({ variant }: Props) {
  return (
    <svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg">
      {/* outer circle */}
      <circle
        cx="110"
        cy="110"
        r="90"
        fill="none"
        stroke="rgba(240,240,240,0.06)"
        strokeWidth="1"
      />

      {/* cross hairs */}
      <line
        x1="20"
        y1="110"
        x2="200"
        y2="110"
        stroke="rgba(240,240,240,0.05)"
        strokeWidth="1"
      />
      <line
        x1="110"
        y1="20"
        x2="110"
        y2="200"
        stroke="rgba(240,240,240,0.05)"
        strokeWidth="1"
      />

      {/* Corner brackets — always visible */}
      <path
        d="M 32 46 L 32 32 L 46 32"
        fill="none"
        stroke="rgba(240,240,240,0.15)"
        strokeWidth="1"
      />
      <path
        d="M 174 32 L 188 32 L 188 46"
        fill="none"
        stroke="rgba(240,240,240,0.15)"
        strokeWidth="1"
      />
      <path
        d="M 32 174 L 32 188 L 46 188"
        fill="none"
        stroke="rgba(240,240,240,0.15)"
        strokeWidth="1"
      />
      <path
        d="M 188 174 L 188 188 L 174 188"
        fill="none"
        stroke="rgba(240,240,240,0.15)"
        strokeWidth="1"
      />

      {/* Center dot — accent color, always visible */}
      <circle
        cx="110"
        cy="110"
        r="4"
        fill="none"
        stroke="var(--accent)"
        strokeWidth="1.5"
      />
      <circle cx="110" cy="110" r="1.5" fill="var(--accent)" />

      {variant === "complete" && (
        <>
          <circle
            cx="110"
            cy="110"
            r="70"
            fill="none"
            stroke="rgba(124,92,191,0.15)"
            strokeWidth="1"
          />
          <circle
            cx="110"
            cy="110"
            r="50"
            fill="none"
            stroke="rgba(240,240,240,0.06)"
            strokeWidth="1"
          />
          <polygon
            points="110,38 185,165 35,165"
            fill="none"
            stroke="rgba(124,92,191,0.25)"
            strokeWidth="1"
          />
          <rect
            x="78"
            y="78"
            width="64"
            height="64"
            fill="none"
            stroke="rgba(240,240,240,0.1)"
            strokeWidth="1"
            transform="rotate(45 110 110)"
          />
          <path
            d="M 50 140 Q 65 120 80 135 Q 95 150 110 130 Q 125 110 140 128 Q 155 145 170 135"
            fill="none"
            stroke="rgba(124,92,191,0.4)"
            strokeWidth="1.5"
          />
          <line
            x1="110"
            y1="18"
            x2="110"
            y2="24"
            stroke="rgba(240,240,240,0.2)"
            strokeWidth="1"
          />
          <line
            x1="110"
            y1="196"
            x2="110"
            y2="202"
            stroke="rgba(240,240,240,0.2)"
            strokeWidth="1"
          />
          <line
            x1="18"
            y1="110"
            x2="24"
            y2="110"
            stroke="rgba(240,240,240,0.2)"
            strokeWidth="1"
          />
          <line
            x1="196"
            y1="110"
            x2="202"
            y2="110"
            stroke="rgba(240,240,240,0.2)"
            strokeWidth="1"
          />
        </>
      )}
    </svg>
  );
}
