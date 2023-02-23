import HomePageCard from './components/home-page-card'
import Navbar from './components/navbar'
import ProjectsCarousel from './components/projects-carousel'
import React, { useRef } from 'react'
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
          <div ref={home}>
            <HomePageCard />
          </div>

          <div ref={projects}>
            <ProjectsCarousel />
          </div>

          <div ref={contact}>contact</div>
        </div>
      </div>
    </>
  )
}
