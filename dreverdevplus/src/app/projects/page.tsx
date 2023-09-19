import ProjectsPage from "@/components/ProjectsPage";
import Footer from "@/components/layout/Footer";

export default function Projects() {

    return (
        <div className="h-screen w-full relative flex flex-col z-20 pt-20 md:pt-48">
            <header className="mb-12">
                <h1 className="text-3xl text-center text-title font-medium">MY WORKS</h1>
                <p className="text-center text-lg mt-4">There are a few of my recent projects, feel free to explore.</p>
            </header>
            <ProjectsPage />
            <Footer />
        </div>
    )
}
