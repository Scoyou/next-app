import React from "react";
import Image from "next/image";

type ProjectCardProps = {
  title: string;
  image: string;
  technologies: string;
};
const ProjectCard = (props: ProjectCardProps) => (
  <div className="h-fit w-fit outline-black hover:shadow-xl center-text bg-slate-800 hover:transform hover:scale-110 transition ease-in-out duration-400">
    <Image
      loader={() => props.image}
      src={props.image}
      alt={props.title}
      width="250"
      height="300"
    />
    <h3>{props.title}</h3>
    <span>{props.technologies}</span>
  </div>
);

const ProjectsCarousel = () => {
  return (
    <div className="text-center">
      <div
        id="projects"
        className="text-center flex items-center justify-center sm:h-screen"
      >
        <div>
          <h1 className="my-12 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Projects
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <ProjectCard
              title="project 1"
              image="https://via.placeholder.com/250x300"
              technologies="stuff"
            />
            <ProjectCard
              title="project 2"
              image="https://via.placeholder.com/250x300"
              technologies="stuff"
            />
            <ProjectCard
              title="project 3"
              image="https://via.placeholder.com/250x300"
              technologies="stuff"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCarousel;
