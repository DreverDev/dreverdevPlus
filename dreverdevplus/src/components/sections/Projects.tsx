import Link from "next/link";
import Section from "../layout/Section";

export default function Projects() {

    return (
        <Section>
            <div className="fade-in flex flex-col gap-4">
                <div>
                    <h2 className="text-3xl text-title font-medium">
                        <span className="font-mono text-xl">02.</span>
                        <span>Projects Showcase</span>
                    </h2>
                </div>
                <div className="md:grid md:grid-cols-[2fr_3fr] gap-12">

                    <div className="relative w-3/4 mx-auto md:mx-0 md:max-w-[300px]">
                        <div className="block relative w-full
                            ">
                            <div className="inline-block max-w-full overflow-hidden relative box-border m-0">
                                <img className="rounded-[12px] w-full h-full" src={'/images/other/coding.svg'} alt="Dreverdev Avatar" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="text-[15px] text-subtext flex flex-col gap-2">
                            <h3 className="text-xl text-white">Built projects and web apps:</h3>
                            <p>Here you'll find a range of applications I've designed and developed, some of which are open-source. </p>
                            <p>My work emphasizes robust architecture and forward-thinking design. I invite you to explore further.</p>
                            <br />
                            <Link className="group" href="/projects">
                                <span className="
                                text-title/90
                                py-3 px-5 rounded-full
                                border-title border-solid border-2
                                transition-colors
                                hover:bg-title/5
                                ">
                                    See My Work
                                </span>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </Section>
    );
}