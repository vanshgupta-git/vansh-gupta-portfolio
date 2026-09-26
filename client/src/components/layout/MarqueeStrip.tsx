const MarqueeStrip = () => {
  const skills = [
    "ReactJS",
    "NodeJS",
    "CSS",
    "JavaScript",
    "Tailwind CSS",
    "MongoDB",
    "Supabase",
    "Git",
    "GitHub",
  ];

  return (
    <section className="relative h-28 w-full">

      <div className="absolute left-1/2 top-1/2 w-[115%] -translate-x-1/2 -translate-y-1/2 rotate-2">
        <div className="bg-black py-4 px-6">
          <h1 className="text-black">Test</h1>
        </div>
      </div>
      <div className="absolute left-1/2 top-1/2 w-[115%] -translate-x-1/2 -translate-y-1/2 -rotate-2">
        <div className="bg-[#ff3158] py-4">
          <div className="marquee flex w-max items-center whitespace-nowrap">
            {[...skills, ...skills].map((skill, index) => (
              <div key={index} className="flex items-center">
                <span className="px-6 text-xl font-bold text-white">
                  {skill}
                </span>

                <span className="text-xl text-white">⬢</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .marquee {
          animation: marquee 25s linear infinite;
        }

        @keyframes marquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default MarqueeStrip;