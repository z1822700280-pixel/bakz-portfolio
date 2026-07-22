'use client'

export default function WatermarkOverlay() {
  return (
    <div className="absolute inset-0 pointer-events-none z-10 flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.035] select-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent 0px,
            transparent 80px,
            rgba(255,255,255,0.7) 80px,
            rgba(255,255,255,0.7) 120px
          )`,
          backgroundSize: '170px 170px',
        }}
      />
    </div>
  )
}
