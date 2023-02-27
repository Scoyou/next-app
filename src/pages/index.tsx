import React, { useRef, useState, createContext, useEffect } from 'react'
import HomePageCard from './components/home-page-card'
import Navbar from './components/navbar'
import ProjectsCarousel from './components/projects-carousel'
import Contact from './components/contact'
import Image from 'next/legacy/image'
import darkHero from '../images/night-mountains.jpg'
import lightHero from '../images/day-mountains.jpg'

export const DarkThemeContext = createContext({})

const Home = () => {
  const home = useRef<HTMLDivElement>(null)
  const projects = useRef<HTMLDivElement>(null)
  const contact = useRef<HTMLDivElement>(null)
  const [darkModeEnabled, setDarkModeEnabled] = useState<boolean>(true)

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme')
    setDarkModeEnabled(storedTheme === 'dark')
  }, [darkModeEnabled])

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

  const changeTheme = () => {
    const theme = darkModeEnabled ? 'light' : 'dark'
    localStorage.setItem('theme', theme)
    setDarkModeEnabled(!darkModeEnabled)
  }

  return (
    <DarkThemeContext.Provider value={{ changeTheme, darkModeEnabled }}>
      <div
        className={
          darkModeEnabled
            ? 'dark grid place-items-center text-white'
            : 'text-black grid place-items-center'
        }
      >
        <Navbar navHeader={navHeader} />
        <div>
          <div className="w-screen relative bg-hero-image-gradient" ref={home}>
            <Image
              src={darkModeEnabled ? darkHero : lightHero}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              alt="Mountains background"
              className="-z-50 transition ease-in-out delay-150"
            />
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
