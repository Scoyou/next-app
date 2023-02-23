import React from 'react'

const ProjectsCarousel = () => {
  const renderProject = () => (
    <div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </div>
  )
  return (
    <div id="projects" className="h-screen grid place-items-center">
      <h2 className="text-center mt-6 mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 place-items-center md:w-screen">
        {renderProject()}
        {renderProject()}
        {renderProject()}
      </div>
    </div>
  )
}

export default ProjectsCarousel
