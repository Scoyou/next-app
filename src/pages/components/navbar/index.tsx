import React from 'react'

const Navbar = () => {
  return (
    <header className="mt-6 mb-6">
      <ul>
        <li className="float-left mr-5 hover:text-sky-700 text-lg"><a href="/#home">Home</a></li>
        <li className="float-left mr-5 hover:text-sky-700 text-lg"><a href="/#projects">Projects</a></li>
        <li className="float-left hover:text-sky-700 text-lg"><a href="/#contact">Contact</a></li>
      </ul>
    </header>
  )
}

export default Navbar
