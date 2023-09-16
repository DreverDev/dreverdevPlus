import Section from "../layout/Section";

export default function Presentation() {


    return (
        <Section>
            <h1 className="text-4xl md:text-7xl font-semibold flex flex-wrap fade-in">Dídac Reverte.</h1>
            <h2 className="fade-in text-4xl md:text-7xl font-semibold" style={{ '--delay': '0.5s' } as React.CSSProperties}>
                <span className="textGradient">I'm an innovative fullstack developer</span>
            </h2>
            <p className='text-lg md:max-w-[50%] my-4 text-subtext fade-in' style={{'--delay': '1s'} as React.CSSProperties}>I&apos;m a software developer based near Barcelona, Spain, specialized in building extraordinary web solutions from scratch.</p>
        </Section>
    );
}
