import React, { useEffect, useState, useContext } from 'react'
import PropTypes from 'prop-types'
import { DarkThemeContext } from '../../index'
import { Icon } from '@iconify/react'

/**
 * @param {number} currentPosition Current Scroll position
 * @param {Array} sectionPositionArray Array of positions of all sections
 * @param {number} startIndex Start index of array
 * @param {number} endIndex End index of array
 * @return {number} Current Active index
 */
const nearestIndex = (
  currentPosition,
  sectionPositionArray,
  startIndex,
  endIndex
) => {
  if (startIndex === endIndex) return startIndex
  else if (startIndex === endIndex - 1) {
    if (
      Math.abs(
        sectionPositionArray[startIndex].headerRef.current.offsetTop -
          currentPosition
      ) <
      Math.abs(
        sectionPositionArray[endIndex].headerRef.current.offsetTop -
          currentPosition
      )
    )
      return startIndex
    else return endIndex
  } else {
    var nextNearest = ~~((startIndex + endIndex) / 2)
    var a = Math.abs(
      sectionPositionArray[nextNearest].headerRef.current.offsetTop -
        currentPosition
    )
    var b = Math.abs(
      sectionPositionArray[nextNearest + 1].headerRef.current.offsetTop -
        currentPosition
    )
    if (a < b) {
      return nearestIndex(
        currentPosition,
        sectionPositionArray,
        startIndex,
        nextNearest
      )
    } else {
      return nearestIndex(
        currentPosition,
        sectionPositionArray,
        nextNearest,
        endIndex
      )
    }
  }
}

export default function Navbar({ navHeader }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [changeBackground, setChangeBackground] = useState(false)

  const darkThemeContext = useContext(DarkThemeContext)
  const NAV_BACKGROUND = darkThemeContext.darkModeEnabled ? "bg-nav-background-dark" : "bg-nav-background-light"

  useEffect(() => {
    const changeNavbarColor = () => {
      if (window.scrollY >= 80) {
        setChangeBackground(true)
      } else {
        setChangeBackground(false)
      }
    }
    window.addEventListener('scroll', changeNavbarColor)
  })

  useEffect(() => {
    const handleScroll = (e) => {
      var index = nearestIndex(
        window.scrollY,
        navHeader,
        0,
        navHeader.length - 1
      )
      setActiveIndex(index)
    }
    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  })

  return (
    <div
      className={
        changeBackground
          ? 'fixed top-0 py-4 z-50 center-text w-screen sm:grid sm:grid-cols-3  place-items-center bg-nav-background-light-active dark:bg-nav-background-dark transition duration-150 ease-in-out'
          : 'fixed top-0 py-4 z-50 center-text w-screen sm:grid sm:grid-cols-3  place-items-center bg-nav-background-light-inactive dark:bg-black/0 transition duration-150 ease-in-out'
      }
    >
      <div></div>
      <div className="dark:text-white text-black">
        {navHeader &&
          navHeader.map((header, index) => (
            <a
              key={index + header.headerID}
              className={
                activeIndex === index
                  ? 'inline-block mx-3 text-teal-300 text-lg transition ease-in-out duration-400'
                  : 'inline-block mx-3 hover:text-teal-300 text-lg transition ease-in-out duration-400'
              }
              href={`#${header.headerID}`}
            >
              {header.headerTitle}
            </a>
          ))}
        <button
          onClick={() =>
            darkThemeContext.setDarkModeEnabled(
              !darkThemeContext.darkModeEnabled
            )
          }
        >
          <Icon
            icon={
              darkThemeContext.darkModeEnabled
                ? 'ri:moon-fill'
                : 'ph:sun-duotone'
            }
          />
        </button>
      </div>
      <div></div>
    </div>
  )
}

Navbar.propTypes = {
  navHeader: PropTypes.arrayOf(
    PropTypes.shape({
      headerID: PropTypes.string,
      headerRef: PropTypes.object.isRequired,
      headerTitle: PropTypes.string.isRequired,
    })
  ).isRequired,
}
