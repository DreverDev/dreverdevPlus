import Section from "../layout/Section";

export default function About() {

    const skillTags = [
        { name: "NextJS", img: "nextjs" },
        { name: "HTML5", img: "html5" },
        { name: "CSS3", img: "css3" },
        { name: "Javascript", img: "javascript" },
    ]

    return (
        <Section>
            <p className="text-xl flex flex-wrap md:w-[85%] fade-in">I&apos;m a web developer skilled in JavaScript, experienced with Node.js and Next.js. I excel at solving complex challenges and value both teamwork and autonomy. My inherent curiosity keeps me evolving in the dynamic world of web development.</p>

            <div className="flex w-full justify-between px-24">
                {
                    skillTags.map((skillTag, index) => (
                        <div key={skillTag.img} className="flex flex-col items-center gap-4 fade-in" style={{'--delay': `${index * 0.3}s`} as React.CSSProperties}>
                            <img className="h-28" src={`/images/icons/${skillTag.img}.svg`} />
                            <span className="font-bold">{skillTag.name}</span>
                        </div>
                    ))
                }
            </div>
        </Section>
    );
}