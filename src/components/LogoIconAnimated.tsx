export default function LogoIconAnimated() {
    return (
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <circle
          cx="50"
          cy="50"
          r="48"
          stroke="#00FFB4"
          strokeWidth="4"
          strokeDasharray="301.59"
          strokeDashoffset="301.59"
        >
          <animate
            attributeName="stroke-dashoffset"
            values="301.59;0"
            dur="1s"
            begin="0s"
            fill="freeze"
          />
        </circle>
        <text
          x="50%"
          y="54%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="36"
          fill="#00FFB4"
          fontFamily="Arial, sans-serif"
        >
          N
        </text>
      </svg>
    )
  }
  