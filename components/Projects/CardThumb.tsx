// /components/Projects/CardThumb.tsx
import { ProjectType } from "@/lib/projects";
import styles from "./Projects.module.css";

type Props = {
  type: ProjectType;
};

export default function CardThumb({ type }: Props) {
  return (
    <div className={styles.cardThumb}>
      <div className={styles.cardScan} />
      {type === "sound" ? <SoundThumb /> : <CodeThumb />}
    </div>
  );
}

function SoundThumb() {
  const bars = [20, 8, 26, 12, 18, 6, 22, 14, 30, 10, 16, 24];
  return (
    <div className={styles.cardWaveform}>
      {bars.map((height, i) => (
        <div
          key={i}
          className={styles.wavBar}
          style={{ height: `${height}px` }}
        ></div>
      ))}
    </div>
  );
}

function CodeThumb() {
  return (
    <svg
      width="80"
      height="60"
      viewBox="0 0 80 60"
      className={styles.codeThumbSvg}
    >
      <rect
        x="8"
        y="8"
        width="64"
        height="44"
        rx="2"
        fill="none"
        stroke="var(--accent)"
        strokeWidth="1"
      />
      <line
        x1="8"
        y1="20"
        x2="72"
        y2="20"
        stroke="var(--accent)"
        strokeWidth="0.5"
      />
      <rect
        x="14"
        y="27"
        width="20"
        height="18"
        fill="var(--accent-subtle)"
        stroke="var(--accent)"
        strokeWidth="0.5"
      />
      <rect
        x="40"
        y="27"
        width="26"
        height="8"
        fill="var(--accent-subtle)"
        stroke="var(--accent)"
        strokeWidth="0.5"
      />
      <rect
        x="40"
        y="38"
        width="18"
        height="7"
        fill="var(--accent-subtle)"
        stroke="var(--accent)"
        strokeWidth="0.5"
      />
    </svg>
  );
}
