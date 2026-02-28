interface MySVG {
  width?: string;
  height?: string;
  viewBox?: string;
  fill?: string;
  stroke?: string;
  strokeWidth?: string;
  strokeLinecap?: "round" | "butt" | "square" | "inherit";
  strokeLinejoin?: "round" | "bevel" | "miter" | "inherit";
}

const SVG = ({
  width = "10",
  height = "10",
  viewBox = "0 0 24 24",
  fill = "none",
  stroke = "currentColor",
  strokeWidth = "3",
  strokeLinecap = "round",
  strokeLinejoin = "round",
}: MySVG) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap={strokeLinecap}
      strokeLinejoin={strokeLinejoin}
    >
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
};

export default SVG;
