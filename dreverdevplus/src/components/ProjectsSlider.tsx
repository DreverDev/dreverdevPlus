"use client";

import { ProjectType } from "@/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Scrollbar } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import ProjectSlide from "./ProjectSlide";

export default function ProjectsSlider({ projects }: { projects: ProjectType[] }) {

    if (projects.length) {
        return (
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                navigation
                pagination={{ clickable: true }}
                loop
                grabCursor
            >
                {
                    projects.map(project => (
                        <SwiperSlide key={project._id} className="px-10">
                            <ProjectSlide project={project} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        );
    }

}