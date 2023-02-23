import HomePageCard from './components/home-page-card'
import Navbar from './components/navbar'
import ProjectsCarousel from './components/projects-carousel'

export default function Home() {
  return (
    <>
      <div className="grid place-items-center">
        <Navbar />
        <div className="relative">
          <HomePageCard />

          <ProjectsCarousel />
        </div>
      </div>
    </>
  )
}
