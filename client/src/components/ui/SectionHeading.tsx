const SectionHeading = ({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div>
      <h1 className={`font-hero text-7xl  m-8 mx-3 ${className}`}>
        {children}
      </h1>
    </div>
  )
}

export default SectionHeading