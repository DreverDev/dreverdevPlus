export default function Section({ children, }: { children: React.ReactNode }) {
    return (
        <section
            className="landing-section h-screen w-full overflow-hidden relative gap-4 py-8 md:py-10 px-6 md:px-20 flex flex-col justify-center max-w-full snap-center"
            data-color="black"
        >
            {children}
        </section>
    )
}
