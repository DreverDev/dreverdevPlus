"use client";

import { useEffect, useState } from "react";
import { useProject } from "@/hooks/useProject";
import { ProjectType } from "@/types";
import ProjectsSlider from "../ProjectsSlider";
import Section from "../layout/Section";

export default function Projects() {

    const [projects, setprojects] = useState<ProjectType[]>([]);
    const { getAll } = useProject();

    useEffect(() => {

        const fetchData = async () => {
            try {
                setprojects(await getAll());
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [])

    return (
        <Section isSlider>
            <div className="block py-8">
                <h2 className="text-3xl text-blue-500 self-start mt-0 mb-2">PROJECTS SHOWCASE</h2>
                {projects.length > 0 ? (
                    <ProjectsSlider projects={projects} />
                ) : (
                    <span>No hay elementos disponibles</span>
                )}
            </div>
        </Section>
    );
}