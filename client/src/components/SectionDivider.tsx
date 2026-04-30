// SectionDivider — Gold/Navy gradient divider between homepage sections
// Brand colors: Navy #0A1628, Charcoal #1C2333, Gold #C9A84C

export default function SectionDivider() {
  return (
    <div
      className="w-full h-[6px] m-0 p-0"
      style={{
        background: "linear-gradient(90deg, #0A1628 0%, #C9A84C 35%, #C9A84C 65%, #0A1628 100%)",
      }}
    />
  );
}
