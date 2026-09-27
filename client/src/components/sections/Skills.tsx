import { useState, useEffect } from "react"
import SectionHeading from "../ui/SectionHeading"

type Skill = {
    name: string
    level: number // 0-100
}

type SkillFile = {
    fileName: string
    label: string
    skills: Skill[]
}

const skillFiles: SkillFile[] = [
    {
        fileName: "frontend.ts",
        label: "frontend",
        skills: [
            { name: "React", level: 90 },
            { name: "TypeScript", level: 85 },
            { name: "HTML / CSS / JS", level: 90 },
        ],
    },
    {
        fileName: "backend.ts",
        label: "backend",
        skills: [
            { name: "Node.js", level: 75 },
            { name: "MongoDB", level: 70 },
            { name: "MySQL", level: 70 },
        ],
    },
    {
        fileName: "foundations.ts",
        label: "foundations",
        skills: [
            { name: "Python", level: 80 },
            { name: "C++", level: 70 },
            { name: "C", level: 65 },
        ],
    },
]

const BAR_WIDTH = 20 // characters

const AsciiBar = ({ level, animate }: { level: number; animate: boolean }) => {
    const filled = Math.round((level / 100) * BAR_WIDTH)
    return (
        <span className="font-mono text-cyan-400">
            {"█".repeat(animate ? filled : 0)}
            <span className="text-white/10">{"░".repeat(BAR_WIDTH - (animate ? filled : 0))}</span>
        </span>
    )
}

const Skills = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const [animate, setAnimate] = useState(false)
    const active = skillFiles[activeIndex]

    useEffect(() => {
        setAnimate(false)
        const t = setTimeout(() => setAnimate(true), 50)
        return () => clearTimeout(t)
    }, [activeIndex])

    return (
        <div className="p-10">
            <SectionHeading className="w-200 px-8 m-8 mx-3">
                SKILLS
            </SectionHeading>

            <div className="px-8 mt-8 max-w-2xl mx-auto">
                <div className="rounded-lg overflow-hidden border border-cyan-400/20 bg-[#0a0e14] shadow-[0_0_50px_-15px_rgba(34,211,238,0.25)]">
                    {/* Title bar */}
                    <div className="flex items-center gap-2 px-4 py-3 bg-white/[0.03] border-b border-white/5">
                        <span className="w-3 h-3 rounded-full bg-red-500/70" />
                        <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                        <span className="w-3 h-3 rounded-full bg-green-500/70" />
                        <span className="ml-3 font-mono text-xs text-white/40">
                            vansh@portfolio: ~/skills
                        </span>
                    </div>

                    {/* File tabs */}
                    <div className="flex border-b border-white/5 bg-white/[0.015]">
                        {skillFiles.map((file, i) => (
                            <button
                                key={file.fileName}
                                onClick={() => setActiveIndex(i)}
                                aria-selected={i === activeIndex}
                                className={`px-4 py-2 font-mono text-xs border-r border-white/5 transition-colors
                                    ${i === activeIndex
                                        ? "bg-[#0a0e14] text-cyan-300"
                                        : "text-white/30 hover:text-white/60"
                                    }`}
                            >
                                {file.fileName}
                            </button>
                        ))}
                    </div>

                    {/* Content */}
                    <div className="p-6 font-mono text-sm leading-7 min-h-[220px]">
                        <p className="text-white/40 mb-3">
                            <span className="text-amber-400">$</span> cat {active.fileName}
                        </p>
                        {active.skills.map((skill, i) => (
                            <p
                                key={skill.name}
                                className="text-white/80 flex items-center gap-3 flex-wrap"
                                style={{
                                    transitionDelay: `${i * 100}ms`,
                                }}
                            >
                                <span className="text-white/30 select-none">{i + 1}</span>
                                <span className="text-purple-400">const</span>
                                <span className="text-cyan-200">{skill.name.replace(/[^a-zA-Z]/g, "")}</span>
                                <span className="text-white/40">=</span>
                                <AsciiBar level={skill.level} animate={animate} />
                                <span className="text-amber-400/80 text-xs">{skill.level}%</span>
                            </p>
                        ))}
                        <p className="text-white/30 mt-2">
                            <span className="text-white/60 animate-pulse">▍</span>
                        </p>
                    </div>
                </div>

                <p className="text-center text-xs text-white/30 mt-3 font-mono">
                    click a tab to switch files
                </p>
            </div>
        </div>
    )
}

export default Skills