import SectionHeading from "../ui/SectionHeading"

const WorkingProcess = () => {
    const process = [
        {
            title: "Research",
            description:
                "Understanding the project, users, goals, and requirements before writing any code."
        },
        {
            title: "Strategy",
            description:
                "Planning the structure, technologies, user experience, and development approach."
        },
        {
            title: "Development",
            description:
                "Turning the plan into a functional, responsive, and polished digital product."
        },
    ]

    return (
        <section className="bg-[#0b0b0b] text-white py-20 px-6">
            
            {/* Heading */}
            <div className="flex justify-center mb-20">
                <SectionHeading>

                    MY WORKING PROCESS
                </SectionHeading>
                
            </div>

            {/* Process */}
            <div className="max-w-5xl mx-auto">
                {process.map((item, index) => (
                    <div
                        key={item.title}
                        className="grid grid-cols-[1fr_40px_2fr] md:grid-cols-[1fr_60px_2fr] items-center min-h-[130px]"
                    >

                        {/* Step title */}
                        <div>
                            <h2
                                className={`font-textFont text-xl md:text-2xl font-semibold ${
                                    index === 0 ? "text-sky-400" : "text-white"
                                }`}
                            >
                                {item.title}
                            </h2>
                        </div>

                        {/* Timeline */}
                        <div className="relative h-full flex justify-center">
                            
                            {/* Vertical line */}
                            {index !== process.length - 1 && (
                                <div className="absolute top-1/2 bottom-0 w-px bg-white/40" />
                            )}

                            {/* Dot */}
                            <div className="relative z-10 w-2 h-2 rounded-full bg-white mt-[50%] -translate-y-1/2" />
                        </div>

                        {/* Description */}
                        <div className="pl-6 md:pl-10">
                            <p className="font-textFont text-sm md:text-base leading-relaxed text-white/70 max-w-xl">
                                {item.description}
                            </p>
                        </div>

                    </div>
                ))}
            </div>

        </section>
    )
}

export default WorkingProcess