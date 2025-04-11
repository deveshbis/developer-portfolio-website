import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination"; 

import { FreeMode, Pagination } from "swiper/modules"; 
import ProjectCard from "../ProjectCard/ProjectCard";
import projects from "../../../public/project";

const Projects = () => {
  return (
    <div id="Projects">
      <div className="bg-gray-100 md:px-10 px-4 py-12 font-[sans-serif]">
        <div className="max-md:max-w-lg mx-auto">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-10 text-center">
            Projects Showcase
          </h2>
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]} 
            className="mySwiper py-8"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <ProjectCard project={project} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Projects;
