export default function BackgroundNoise() {
  return (
    <div className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-overlay">
      <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <filter id="n">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#n)" />
      </svg>
    </div>
  );
}
