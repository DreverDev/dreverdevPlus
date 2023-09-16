import Section from "../layout/Section";

export default function About() {

    const skills = [
        "Javascript",
        "Typescript",
        "NextJS",
        "NodeJS",
        "Tailwind",
        "MySQL",
    ]

    return (
        <Section>
            <div className="fade-in flex flex-col gap-4">
                <div>
                    <h2 className="text-3xl text-title font-medium">
                        <span className="font-mono text-xl">01.</span>
                        <span>About Me</span>
                    </h2>
                </div>
                <div className="md:grid md:grid-cols-[3fr_2fr] gap-12">
                    <div>
                        <div className="text-[15px] text-subtext">
                            <p>Hello! I&apos;m Dídac, a Fullstack Developer based in Collbató, Spain.</p>
                            <p>I'm passionate about creating aesthetic and responsive applications. I always aim to develop scalable products and provide high-performance experiences.</p>
                            <br />
                            <p>These are the technologies I've been using recently:</p>
                        </div>
                        <ul className="text-subtext text-[14px] font-mono mt-5 grid grid-cols-[repeat(2,_minmax(140px,_200px))] md:grid-cols-[repeat(3,_minmax(140px,_200px))]">
                            {
                                skills.map(skill => <li key={skill} className="relative pl-5 before:content-['▹'] before:absolute before:left-0 before:text-title">{skill}</li>)
                            }
                        </ul>
                    </div>

                    <div className="relative w-3/4 mt-6 mx-auto md:xt-0 md:max-w-[300px]">
                        <div className="block relative w-full shadow-[rgba(2,12,27,0.7)_0px_10px_30px_-10px]
                                hover:after:top-[15px] hover:after:left-[15px]
                                after:transition-all after:ease-cubic-bezier(0.645, 0.045, 0.355, 1) after:duration-[0.24s]
                                after:content-[''] after:block after:absolute after:w-full after:h-full after:rounded-[12px] 
                                after:top-[20px] after:left-[20px] after:border-solid after:border-[2px] after:border-title after:z-[-1]
                            ">
                            <div className="inline-block max-w-full overflow-hidden relative box-border m-0">
                                <img className="grayscale rounded-[12px]" src={'/images/other/dreverdev.webp'} alt="Dreverdev Avatar" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}