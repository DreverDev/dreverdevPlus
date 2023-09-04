export default function Section({ children, isSlider, bgClass }: { children: React.ReactNode, isSlider?: Boolean, bgClass?: String }) {
    return (
        <section
            className={`landing-section h-screen w-full overflow-hidden relative
            gap-4 py-8 md:py-10 px-6 ${isSlider ? 'md:px-20' :'md:px-52'} max-w-full
            snap-center flex flex-col justify-center gap-10 z-20`}
            data-bgclass={bgClass}
        >
            {children}
        </section>
    )
}
