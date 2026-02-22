interface WaveDividerProps {
  fill?: string;
  className?: string;
}

export function WaveDivider({ fill = "white", className }: WaveDividerProps) {
  return (
    <div className={className ?? "absolute bottom-0 left-0 right-0"}>
      <svg
        viewBox="0 0 1440 60"
        aria-hidden="true"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full"
      >
        <path d="M0 60h1440V30C1200 60 240 0 0 30v30z" fill={fill} />
      </svg>
    </div>
  );
}
