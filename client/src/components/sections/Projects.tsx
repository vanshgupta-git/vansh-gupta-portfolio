import Card from "../ui/Card"
import SectionHeading from "../ui/SectionHeading"

const Projects = () => {
  return (
    <div className="p-10">
      <div>
        <SectionHeading className="w-200 px-8 m-8 mx-3">
          TAKE A LOOK AT MY RECENT PROJECT
        </SectionHeading>
      </div>

      <div className="px-10 gap-5 grid grid-cols-2 ">
        <Card
          title="NIVA"
          description="AI-powered campus health and emergency companion."
          projectLink="https://niva-care.vercel.app"
          projectImage="https://media.licdn.com/dms/image/v2/D4D22AQEoe6ylHfN_Fg/feedshare-shrink_1280/B4DaB1Hpt8IoAM-/0/1788671335546?e=1792022400&v=beta&t=yuNJ9NkjeAIHUER-XDrJBzjwvvxCAhb2QpZvoxUeSqk"
        />
        <Card
          title="Netflix Clone"
          description="A Front-end Netflix Clone Project looks similar to Netflix."
          projectLink="https://niva-care.vercel.app"
          projectImage="https://media.licdn.com/dms/image/v2/D4E22AQGx0sGgYlHUTw/feedshare-image-high-res/feedshare-image-high-res/0/1719902375050?e=1792022400&v=beta&t=4cioVVnUoYt9dXM5g3yfs9r6p3DHmryfBnb5qyF6hpU"
        />
        <Card
          title="Netflix Clone"
          description="A Front-end Netflix Clone Project looks similar to Netflix."
          projectLink="https://niva-care.vercel.app"
          projectImage="https://media.licdn.com/dms/image/v2/D4E22AQGx0sGgYlHUTw/feedshare-image-high-res/feedshare-image-high-res/0/1719902375050?e=1792022400&v=beta&t=4cioVVnUoYt9dXM5g3yfs9r6p3DHmryfBnb5qyF6hpU"
        />
      </div>
    </div>
  )
}

export default Projects