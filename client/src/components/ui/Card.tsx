import { ArrowRight } from "lucide-react"

const Card = ({
  title,
  description,
  projectLink,
  projectImage,
  className = "",
}: {
  title: string
  description: string
  projectLink: string
  projectImage: string
  className?: string
}) => {
  return (
    <div className={`flex justify-between py-2 px-5  border rounded-2xl shadow-lg bg-amber-50 ${className}`}>
      <div className="flex flex-col justify-evenly">
        <h4 className="text-lg font-bold">{title}</h4>

        <p>{description}</p>

        <a href={projectLink}>
          View <ArrowRight />
        </a>
      </div>

      <img className="w-100 h-50 rounded-2xl shadow-lg drop-shadow-2xl" src={projectImage} alt={title} />
    </div>
  )
}

export default Card