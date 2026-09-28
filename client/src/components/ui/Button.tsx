import { ArrowRight } from "lucide-react"

interface ButtonProps {
  title: React.ReactNode
  className?: string
  href?: string
  onClick?: () => void
}

const Button = ({
  title,
  className = "",
  href = "#About",
  onClick,
}: ButtonProps) => {
  return (
    <a
      className={`flex items-center justify-between rounded-full border border-black ${className}`}
      href={href}
      onClick={onClick}
    >
      {title}
      <ArrowRight />
    </a>
  )
}

export default Button