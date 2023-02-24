import React, { useRef, useState } from 'react'
import HomePageCard from './components/home-page-card'
import Navbar from './components/navbar'
import ProjectsCarousel from './components/projects-carousel'
import Contact from './components/contact'
import { DarkThemeContext } from './context/theme-context'

const Home = () => {
  const home = useRef<HTMLDivElement>(null)
  const projects = useRef<HTMLDivElement>(null)
  const contact = useRef<HTMLDivElement>(null)
  const [darkModeEnabled, setDarkModeEnabled] = useState<boolean>(true)

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
    <DarkThemeContext.Provider value={{ setDarkModeEnabled, darkModeEnabled }}>
      <div
        className={
          darkModeEnabled
            ? 'dark grid place-items-center text-white'
            : 'text-black git grid place-items-center '
        }
      >
        <Navbar navHeader={navHeader} />
        <div className="relative">
          <div
            className={
              darkModeEnabled ? 'bg-hero-image-dark' : 'bg-hero-image-light'
            }
            ref={home}
          >
            <HomePageCard />
          </div>

          <div ref={projects} className="bg-white dark:bg-black/0">
            <ProjectsCarousel />
          </div>

          <div ref={contact}>
            <Contact />
          </div>
        </div>
      </div>
    </DarkThemeContext.Provider>
  )
}

export default Home
