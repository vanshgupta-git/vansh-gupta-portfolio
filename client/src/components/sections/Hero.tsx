import { ArrowRight } from "lucide-react"
import SectionHeading from "../ui/SectionHeading"
import Button from "../ui/Button"

const Hero = () => {
  return (
    <div >
      <div className="flex justify-center items-center gap-5 px-8 m-6 mx-3">
        <div className="flex flex-col justify-around gap-10">

          <SectionHeading className="">
            
             CREATIVE WEB -DEVELOPER
            </SectionHeading>
          <p className="font-text text-lg w-150 ">Third-year CSE student turning code into real products — full-stack builds with React and Node, sharpened by a steady grind on DSA.</p>
<Button
  title="About Me"
  className="bg-black hover:bg-gray-800 w-38 px-5 py-3 text-lg text-white transition"
/>
        </div>
        <div className="relative w-90 h-100 group">
          <img
            className="w-full h-full object-cover rounded-3xl group-hover:scale-105 transition-all duration-300"
            src="/me.png"
            alt="Vansh Gupta"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
