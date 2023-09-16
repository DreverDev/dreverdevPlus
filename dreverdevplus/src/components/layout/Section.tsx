export default function Section({ children, isSlider }: { children: React.ReactNode, isSlider?: Boolean }) {
    return (
        <section
            className={`landing-section h-screen w-full md:overflow-hidden relative
            items-center
            snap-center flex flex-col justify-center z-20`}
        >
            <div className="max-w-5xl w-full flex flex-col justify-center gap:2 md:gap-5">
                {children}
            </div>
        </section>
    )
}
