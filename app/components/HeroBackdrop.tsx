import BackgroundNoise from "./BackgroundNoise";

export default function HeroBackdrop() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_0%,rgba(255,80,0,0.25),transparent_55%),radial-gradient(900px_500px_at_80%_10%,rgba(255,255,255,0.10),transparent_55%),radial-gradient(700px_500px_at_50%_90%,rgba(255,180,80,0.10),transparent_60%)]" />
      {/* Dark wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(to_right,rgba(255,255,255,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:48px_48px]" />
      <BackgroundNoise />
    </div>
  );
}
