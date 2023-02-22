import React from 'react'
import Typewriter from 'typewriter-effect'

const HomePageCard = () => (
  <div style={{ alignItems: 'left', fontSize: '2rem' }}>
    <span style={{ float: 'left', marginRight: '5px' }}>Hello, I am</span>
    <span style={{ color: 'green', float: 'left' }}>
      <Typewriter
        options={{
          strings: ['Scott Young', 'a web designer', 'a software engineer'],
          autoStart: true,
          loop: true,
        }}
      />
    </span>
  </div>
)

export default HomePageCard