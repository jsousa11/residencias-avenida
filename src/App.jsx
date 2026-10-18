import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Intro from './components/Intro.jsx'
import Apartments from './components/Apartments.jsx'
import Gallery from './components/Gallery.jsx'
import Reasons from './components/Reasons.jsx'
import Location from './components/Location.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Intro />
        <Apartments />
        <Gallery />
        <Reasons />
        <Location />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
