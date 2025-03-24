export default function SectionHeading({ number, title }) {
  return (
    <div className="flex items-center gap-4 mb-16">
      <span className="text-customyellow font-mono text-xl">0{number}.</span>
      <h2 className="text-3xl font-bold text-white whitespace-nowrap">{title}</h2>
      <div className="w-full h-px bg-lightest-navy ml-4" />
    </div>
  )
}