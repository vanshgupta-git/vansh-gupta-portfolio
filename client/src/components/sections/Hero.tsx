import { ArrowRight } from "lucide-react"

const Hero = () => {
  return (
    <div >
      <div className="flex justify-center items-center gap-5 px-8 m-6 mx-3">
        <div className="flex flex-col justify-around gap-10">

        <h1 className="font-hero w-200 text-7xl">CREATIVE WEB -DEVELOPER</h1>
        <p className="font-text text-lg w-150 ">Third-year CSE student turning code into real products — full-stack builds with React and Node, sharpened by a steady grind on DSA.</p>
        <a className="flex justify-between items-center bg-black rounded-full px-5 py-3 w-38 text-white text-lg border border-black" href="#About">About Me<ArrowRight /></a>
        </div>
        <div className="relative w-90 h-100 group">
  <img
    className="w-full h-full object-cover rounded-3xl"
    src="/me.png"
    alt="Vansh Gupta"
  />

  <div className="
    absolute inset-0
    rounded-3xl
    bg-sky-500/0
    group-hover:bg-sky-500/20
    transition-all
    duration-300
  " />
</div>
      </div>
    </div>
  )
}

export default Hero
