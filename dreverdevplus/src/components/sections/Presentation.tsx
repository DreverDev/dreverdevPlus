import ColorText from "../ColorText";
import Section from "../layout/Section";

export default function Presentation() {

    
    return (
        <Section bgClass={'bg-gradient-1'}>
            <h2 className="text-5xl md:text-8xl text-blue-500 flex flex-wrap fade-in">Dídac Reverte.</h2>
            <span className="fade-in" style={{'--delay': '0.5s'} as React.CSSProperties}><ColorText /></span>
            <p className='text-lg md:max-w-[70%] my-4 fade-in' style={{'--delay': '1s'} as React.CSSProperties}>I&apos;m a software developer based near Barcelona, Spain, specialized in building extraordinary web solutions.</p>
        </Section>
    );
}
