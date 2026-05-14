type Props = {
  className?: string;
};

export default function Sound({ className }: Props) {
  return (
    <svg width="120" height="30" viewBox="0 0 120 30" className={className}>
      <polyline
        points="0,15 8,15 12,4 16,26 20,9 24,21 28,7 32,23 36,12 40,18 44,14 48,19 52,10 56,22 60,15 68,15 72,8 76,20 80,13 84,17 88,15 120,15"
        fill="none"
        stroke="var(--accent-border)"
        strokeWidth={1}
      ></polyline>
    </svg>
  );
}
