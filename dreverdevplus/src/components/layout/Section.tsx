export default function Section({ children, isSlider }: { children: React.ReactNode, isSlider?: Boolean }) {
    return (
        <section
            className={`landing-section h-screen w-full overflow-hidden relative gap-4 py-8 md:py-10 px-6 ${isSlider ? 'md:px-20' :'md:px-52'} max-w-full snap-center flex flex-col justify-center gap-10`}
            data-color="black"
        >
            {children}
        </section>
    )
}
