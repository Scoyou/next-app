import React, { useRef } from 'react'
import HomePageCard from './components/home-page-card'
import Navbar from './components/navbar'
import ProjectsCarousel from './components/projects-carousel'
import Contact from './components/contact'

export default function Home() {
  const home = useRef<HTMLDivElement>(null)
  const projects = useRef<HTMLDivElement>(null)
  const contact = useRef<HTMLDivElement>(null)

  const navHeader = [
    {
      headerTitle: 'Home',
      headerRef: home,
      headerID: 'home',
    },
    {
      headerTitle: 'Projects',
      headerRef: projects,
      headerID: 'projects',
    },
    {
      headerTitle: 'Contact',
      headerRef: contact,
      headerID: 'contact',
    },
  ]

  return (
    <>
      <div className="grid place-items-center">
        <Navbar navHeader={navHeader} />
        <div className="relative">
          <div className="bg-header-image" ref={home}>
            <HomePageCard />
          </div>

          <div ref={projects}>
            <ProjectsCarousel />
          </div>

          <div ref={contact}>
            <Contact />
          </div>
        </div>
      </div>
    </>
  )
}
