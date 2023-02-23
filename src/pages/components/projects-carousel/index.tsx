import React from 'react'
import Image from 'next/image'

type ProjectCardProps = {
  title: string
  image: string
  technologies: string
}
const ProjectCard = (props: ProjectCardProps) => (
  <div className="outline-black box-shadow center-text bg-slate-800 hover:transform hover:scale-110 transition ease-in-out duration-400">
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
)

const ProjectsCarousel = () => {
  return (
    <div id="projects" className="md:h-screen grid place-items-center min-h-full">
      <h2 className="text-center mt-6 mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 place-items-center gap-10">
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
  )
}

export default ProjectsCarousel
