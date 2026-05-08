export const MapSVG = () => {
  return (
    <svg
      className="block h-full w-full"
      viewBox="0 0 900 428"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      aria-label="Kelvar global network map"
      role="img"
    >
      <defs>
        <pattern
          id="kv-grid"
          width="30"
          height="30"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 30 0 L 0 0 0 30"
            fill="none"
            stroke="rgba(255,255,255,0.04)"
            strokeWidth="0.5"
            vectorEffect="non-scaling-stroke"
          />
        </pattern>

        <radialGradient id="kv-glow-a" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f5f5f9" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#f5f5f9" stopOpacity="0" />
        </radialGradient>

        <radialGradient id="kv-glow-b" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f5f5f9" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#f5f5f9" stopOpacity="0" />
        </radialGradient>

        <radialGradient id="kv-glow-c" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f5f5f9" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#f5f5f9" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Grid */}
      <rect width="900" height="428" fill="url(#kv-grid)" />

      {/* Continent silhouettes */}
      <path
        d="M95 60 L185 55 L220 70 L240 100 L230 140 L210 175 L190 210 L165 230 L140 220 L120 200 L100 180 L80 160 L70 130 L75 95 Z"
        fill="rgba(255,255,255,0.04)"
        stroke="rgba(255,255,255,0.07)"
        strokeWidth="0.5"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M165 255 L200 250 L215 270 L210 310 L200 345 L180 370 L160 360 L148 330 L145 295 L150 265 Z"
        fill="rgba(255,255,255,0.04)"
        stroke="rgba(255,255,255,0.07)"
        strokeWidth="0.5"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M388 50 L430 45 L450 60 L455 85 L440 100 L420 105 L400 100 L385 85 L382 68 Z"
        fill="rgba(255,255,255,0.05)"
        stroke="rgba(255,255,255,0.09)"
        strokeWidth="0.5"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M395 115 L440 110 L460 130 L465 175 L455 220 L435 255 L415 265 L398 255 L385 220 L382 175 L385 135 Z"
        fill="rgba(255,255,255,0.04)"
        stroke="rgba(255,255,255,0.07)"
        strokeWidth="0.5"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M460 40 L590 35 L640 55 L660 80 L650 120 L620 140 L590 145 L555 140 L520 130 L490 110 L465 90 L455 65 Z"
        fill="rgba(255,255,255,0.04)"
        stroke="rgba(255,255,255,0.07)"
        strokeWidth="0.5"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M620 240 L680 235 L710 255 L715 285 L700 308 L665 315 L635 305 L618 280 L615 258 Z"
        fill="rgba(255,255,255,0.03)"
        stroke="rgba(255,255,255,0.06)"
        strokeWidth="0.5"
        vectorEffect="non-scaling-stroke"
      />

      {/* Arcs */}
      <path
        d="M 404 195 Q 340 80 415 73"
        fill="none"
        stroke="rgba(255,255,255,0.06)"
        strokeWidth="1.5"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M 404 195 Q 340 80 415 73"
        fill="none"
        stroke="rgba(255,255,255,0.35)"
        strokeWidth="1"
        strokeDasharray="8 14"
        vectorEffect="non-scaling-stroke"
        style={{ animation: "kv-dash 1.8s linear infinite" }}
      />

      <path
        d="M 415 73 Q 265 10 115 165"
        fill="none"
        stroke="rgba(255,255,255,0.06)"
        strokeWidth="1.5"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M 415 73 Q 265 10 115 165"
        fill="none"
        stroke="rgba(255,255,255,0.3)"
        strokeWidth="1"
        strokeDasharray="8 14"
        vectorEffect="non-scaling-stroke"
        style={{ animation: "kv-dash 2.1s linear infinite" }}
      />

      <path
        d="M 404 195 Q 260 290 115 165"
        fill="none"
        stroke="rgba(255,255,255,0.04)"
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M 404 195 Q 260 290 115 165"
        fill="none"
        stroke="rgba(255,255,255,0.2)"
        strokeWidth="0.8"
        strokeDasharray="6 16"
        vectorEffect="non-scaling-stroke"
        style={{ animation: "kv-dash 1.5s linear infinite" }}
      />

      {/* Lagos */}
      <circle cx="404" cy="195" r="50" fill="url(#kv-glow-a)" />
      <circle
        cx="404"
        cy="195"
        r="16"
        fill="none"
        stroke="rgba(245,245,249,0.3)"
        strokeWidth="0.8"
        vectorEffect="non-scaling-stroke"
        style={{ animation: "kv-pulse-ring 2.4s ease-out infinite" }}
      />
      <circle
        cx="404"
        cy="195"
        r="16"
        fill="none"
        stroke="rgba(245,245,249,0.12)"
        strokeWidth="0.5"
        vectorEffect="non-scaling-stroke"
        style={{ animation: "kv-pulse-ring2 2.4s ease-out 0.5s infinite" }}
      />
      <circle
        cx="404"
        cy="195"
        r="5"
        fill="rgba(255,255,255,0.08)"
        stroke="rgba(255,255,255,0.5)"
        strokeWidth="0.8"
        vectorEffect="non-scaling-stroke"
      />
      <circle
        cx="404"
        cy="195"
        r="2.5"
        fill="#f5f5f9"
        style={{ animation: "kv-blink 2s ease-in-out infinite" }}
      />
      <line
        x1="394"
        y1="195"
        x2="398"
        y2="195"
        stroke="rgba(255,255,255,0.35)"
        strokeWidth="0.8"
        vectorEffect="non-scaling-stroke"
      />
      <line
        x1="410"
        y1="195"
        x2="414"
        y2="195"
        stroke="rgba(255,255,255,0.35)"
        strokeWidth="0.8"
        vectorEffect="non-scaling-stroke"
      />
      <line
        x1="404"
        y1="185"
        x2="404"
        y2="189"
        stroke="rgba(255,255,255,0.35)"
        strokeWidth="0.8"
        vectorEffect="non-scaling-stroke"
      />
      <line
        x1="404"
        y1="201"
        x2="404"
        y2="205"
        stroke="rgba(255,255,255,0.35)"
        strokeWidth="0.8"
        vectorEffect="non-scaling-stroke"
      />

      {/* Lagos desktop label */}
      <g className="kv-label kv-label-desktop">
        <text
          x="418"
          y="192"
          fontFamily="var(--font-mono)"
          fontSize="7"
          fill="rgba(255,255,255,0.5)"
          letterSpacing="2"
        >
          LAGOS
        </text>
        <text
          x="418"
          y="203"
          fontFamily="var(--font-mono)"
          fontSize="10"
          fill="rgba(255,255,255,0.25)"
          letterSpacing="1"
        >
          06.5°N 03.4°E
        </text>
      </g>

      {/* Lagos mobile label */}
      <g className="kv-label kv-label-mobile">
        <text
          x="404"
          y="223"
          textAnchor="middle"
          fontFamily="var(--font-mono)"
          fontSize="12"
          fill="rgba(255,255,255,0.62)"
          letterSpacing="1.5"
        >
          LAGOS
        </text>
      </g>

      {/* London */}
      <circle cx="415" cy="73" r="45" fill="url(#kv-glow-b)" />
      <circle
        cx="415"
        cy="73"
        r="16"
        fill="none"
        stroke="rgba(245,245,249,0.3)"
        strokeWidth="0.8"
        vectorEffect="non-scaling-stroke"
        style={{ animation: "kv-pulse-ring 2.4s ease-out 0.8s infinite" }}
      />
      <circle
        cx="415"
        cy="73"
        r="16"
        fill="none"
        stroke="rgba(245,245,249,0.12)"
        strokeWidth="0.5"
        vectorEffect="non-scaling-stroke"
        style={{ animation: "kv-pulse-ring2 2.4s ease-out 1.3s infinite" }}
      />
      <circle
        cx="415"
        cy="73"
        r="5"
        fill="rgba(255,255,255,0.08)"
        stroke="rgba(255,255,255,0.5)"
        strokeWidth="0.8"
        vectorEffect="non-scaling-stroke"
      />
      <circle
        cx="415"
        cy="73"
        r="2.5"
        fill="#f5f5f9"
        style={{ animation: "kv-blink 2s ease-in-out 0.6s infinite" }}
      />
      <line
        x1="405"
        y1="73"
        x2="409"
        y2="73"
        stroke="rgba(255,255,255,0.35)"
        strokeWidth="0.8"
        vectorEffect="non-scaling-stroke"
      />
      <line
        x1="421"
        y1="73"
        x2="425"
        y2="73"
        stroke="rgba(255,255,255,0.35)"
        strokeWidth="0.8"
        vectorEffect="non-scaling-stroke"
      />
      <line
        x1="415"
        y1="63"
        x2="415"
        y2="67"
        stroke="rgba(255,255,255,0.35)"
        strokeWidth="0.8"
        vectorEffect="non-scaling-stroke"
      />
      <line
        x1="415"
        y1="79"
        x2="415"
        y2="83"
        stroke="rgba(255,255,255,0.35)"
        strokeWidth="0.8"
        vectorEffect="non-scaling-stroke"
      />

      {/* London desktop label */}
      <g className="kv-label kv-label-desktop">
        <text
          x="429"
          y="70"
          fontFamily="var(--font-mono)"
          fontSize="7"
          fill="rgba(255,255,255,0.5)"
          letterSpacing="2"
        >
          LONDON
        </text>
        <text
          x="429"
          y="81"
          fontFamily="var(--font-mono)"
          fontSize="10"
          fill="rgba(255,255,255,0.25)"
          letterSpacing="1"
        >
          51.5°N 00.1°W
        </text>
      </g>

      {/* London mobile label */}
      <g className="kv-label kv-label-mobile">
        <text
          x="415"
          y="47"
          textAnchor="middle"
          fontFamily="var(--font-mono)"
          fontSize="12"
          fill="rgba(255,255,255,0.62)"
          letterSpacing="1.5"
        >
          LONDON
        </text>
      </g>

      {/* Los Angeles */}
      <circle cx="115" cy="165" r="45" fill="url(#kv-glow-c)" />
      <circle
        cx="115"
        cy="165"
        r="16"
        fill="none"
        stroke="rgba(245,245,249,0.3)"
        strokeWidth="0.8"
        vectorEffect="non-scaling-stroke"
        style={{ animation: "kv-pulse-ring 2.4s ease-out 1.6s infinite" }}
      />
      <circle
        cx="115"
        cy="165"
        r="16"
        fill="none"
        stroke="rgba(245,245,249,0.12)"
        strokeWidth="0.5"
        vectorEffect="non-scaling-stroke"
        style={{ animation: "kv-pulse-ring2 2.4s ease-out 2.1s infinite" }}
      />
      <circle
        cx="115"
        cy="165"
        r="5"
        fill="rgba(255,255,255,0.08)"
        stroke="rgba(255,255,255,0.5)"
        strokeWidth="0.8"
        vectorEffect="non-scaling-stroke"
      />
      <circle
        cx="115"
        cy="165"
        r="2.5"
        fill="#f5f5f9"
        style={{ animation: "kv-blink 2s ease-in-out 1.2s infinite" }}
      />
      <line
        x1="105"
        y1="165"
        x2="109"
        y2="165"
        stroke="rgba(255,255,255,0.35)"
        strokeWidth="0.8"
        vectorEffect="non-scaling-stroke"
      />
      <line
        x1="121"
        y1="165"
        x2="125"
        y2="165"
        stroke="rgba(255,255,255,0.35)"
        strokeWidth="0.8"
        vectorEffect="non-scaling-stroke"
      />
      <line
        x1="115"
        y1="155"
        x2="115"
        y2="159"
        stroke="rgba(255,255,255,0.35)"
        strokeWidth="0.8"
        vectorEffect="non-scaling-stroke"
      />
      <line
        x1="115"
        y1="171"
        x2="115"
        y2="175"
        stroke="rgba(255,255,255,0.35)"
        strokeWidth="0.8"
        vectorEffect="non-scaling-stroke"
      />

      {/* Los Angeles desktop label */}
      <g className="kv-label kv-label-desktop">
        <text
          x="129"
          y="162"
          fontFamily="var(--font-mono)"
          fontSize="7"
          fill="rgba(255,255,255,0.5)"
          letterSpacing="2"
        >
          LOS ANGELES
        </text>
        <text
          x="129"
          y="173"
          fontFamily="var(--font-mono)"
          fontSize="10"
          fill="rgba(255,255,255,0.25)"
          letterSpacing="1"
        >
          34.0°N 118.2°W
        </text>
      </g>

      {/* Los Angeles mobile label */}
      <g className="kv-label kv-label-mobile">
        <text
          x="115"
          y="193"
          textAnchor="middle"
          fontFamily="var(--font-mono)"
          fontSize="11"
          fill="rgba(255,255,255,0.62)"
          letterSpacing="1.2"
        >
          LOS ANGELES
        </text>
      </g>

      {/* Scan line */}
      <line
        x1="0"
        y1="214"
        x2="900"
        y2="214"
        stroke="rgba(255,255,255,0.03)"
        strokeWidth="0.5"
        vectorEffect="non-scaling-stroke"
      />

      {/* Corner brackets */}
      <path
        d="M 8 8 L 8 28 M 8 8 L 28 8"
        fill="none"
        stroke="rgba(255,255,255,0.12)"
        strokeWidth="0.8"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M 892 8 L 892 28 M 892 8 L 872 8"
        fill="none"
        stroke="rgba(255,255,255,0.12)"
        strokeWidth="0.8"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M 8 420 L 8 400 M 8 420 L 28 420"
        fill="none"
        stroke="rgba(255,255,255,0.12)"
        strokeWidth="0.8"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M 892 420 L 892 400 M 892 420 L 872 420"
        fill="none"
        stroke="rgba(255,255,255,0.12)"
        strokeWidth="0.8"
        vectorEffect="non-scaling-stroke"
      />

      {/* Footer */}
      <text
        x="16"
        y="416"
        fontFamily="var(--font-mono)"
        fontSize="6"
        fill="rgba(255,255,255,0.15)"
        letterSpacing="1.5"
        className="kv-footer"
      >
        SYS · KELVAR-NET · 3 NODES ACTIVE
      </text>
    </svg>
  );
};
