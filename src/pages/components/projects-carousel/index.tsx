import React from 'react'

const ProjectsCarousel = () => {
  return (
    <div id="projects" className="h-screen grid place-items-center">
      <h2 className="text-center mt-6 mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 place-items-center md:w-screen">
        <div>one</div>
        <div>two</div>
        <div>three</div>
      </div>
    </div>
  )
}

export default ProjectsCarousel
