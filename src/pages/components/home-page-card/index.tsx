import React from 'react'
import Typewriter from 'typewriter-effect'

const HomePageCard = () => (
  <div
    id="home"
    className="max-w-md mx-auto overflow-hidden md:max-w-2xl grid h-screen place-items-center text-center"
  >
    <div className="md:flex">
      <div className="p-8">
        <h1 className="font-mono text-2xl text-white">
          Hello, I&apos;m Scott Young
        </h1>
        <div className="tracking-wide text-xl text-white font-semibold">
          {' '}
          <h2 className="inline-block mr-2 font-mono">I am</h2>
          <h2 className="inline-block text-lime-600 font-mono">
            <Typewriter
              options={{
                strings: [
                  'a web designer',
                  'a full-stack developer',
                  'a freelancer',
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
        </div>
        <br />
        <p className="mt-2 text-slate-400 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <br />
        <button
          className="hover:text-teal-500 hover:underline font-medium"
          onClick={() => {
            window.location.replace('#contact')
          }}
        >
          Let&apos;s work together
        </button>
      </div>
    </div>
  </div>
)

export default HomePageCard
