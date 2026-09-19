const About = () => {
    return (
        <div >
            <h1 className="font-hero w-200 text-7xl px-8 m-8 mx-3">About Me</h1>
            <div className="">
                <p className="text-xl px-25 mt-25">I'm a third-year Computer Science undergraduate at RKGIT, Ghaziabad, and a full-stack web developer currently interning with the IT & Digital Operations team at Gift a Smile Foundation (NIVA). My focus is on building practical, user-friendly web applications — from internal admin tools to campus-safety products — using React and TypeScript.</p>
                <div className="flex px-15 mt-20 justify-around">
                <ul className="list-disc list-inside flex flex-col text-md gap-2">
                <h5 className="text-xl font-extrabold">Strategy</h5>
                    <li>Full-Stack Product Thinking </li>
                    <li>UI/UX-Focused Development</li>
                    <li>Internal Tooling & Automation</li>
                </ul>
                <ul className="list-disc list-inside flex flex-col text-md gap-2">
                <h5 className="text-xl font-extrabold">My Skills</h5>
                    <li>React</li>
                    <li>TypeScript</li>
                    <li>Node.js</li>
                    <li>MongoDB / MySQL</li>
                </ul>
                <ul className="list-disc list-inside flex flex-col text-md gap-2">
                <h5 className="text-xl font-extrabold">Advice</h5>
                    <li>Iterative Development</li>
                    <li>Clean Component Architecture</li>
                    <li>User-Centered Design</li>
                </ul>
                </div>
            </div>
        </div>
    )
}

export default About
