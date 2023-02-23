import React from 'react'

const ProjectsCarousel = () => {
  return (
    <div id="projects" className="h-screen">
      <h2 className="conten-center text-center mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 place-items-center md:w-screen">
        <div>one</div>
        <div>two</div>
        <div>three</div>
      </div>
    </div>
  )
}

export default ProjectsCarousel
