const nodes = [
  { x: 40, y: 60 }, { x: 180, y: 30 }, { x: 320, y: 90 }, { x: 460, y: 40 },
  { x: 600, y: 110 }, { x: 90, y: 200 }, { x: 260, y: 220 }, { x: 420, y: 190 },
  { x: 560, y: 250 }, { x: 700, y: 180 }, { x: 150, y: 340 }, { x: 340, y: 360 },
  { x: 500, y: 330 }, { x: 650, y: 380 }, { x: 20, y: 420 },
];

const links: [number, number][] = [
  [0, 1], [1, 2], [2, 3], [3, 4], [0, 5], [1, 6], [2, 7], [3, 8], [4, 9],
  [5, 6], [6, 7], [7, 8], [8, 9], [5, 10], [6, 11], [7, 12], [8, 13],
  [10, 11], [11, 12], [12, 13], [10, 14],
];

export default function NetworkBackground({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 720 460"
      preserveAspectRatio="xMidYMid slice"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    >
      {links.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a].x}
          y1={nodes[a].y}
          x2={nodes[b].x}
          y2={nodes[b].y}
          stroke="rgba(125,176,255,0.18)"
          strokeWidth="1"
        />
      ))}
      {nodes.map((n, i) => (
        <circle
          key={i}
          cx={n.x}
          cy={n.y}
          r={i % 3 === 0 ? 3 : 2}
          fill="rgba(125,176,255,0.45)"
        />
      ))}
    </svg>
  );
}
