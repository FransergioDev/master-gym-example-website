//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import About from './components/about'
import Banner from './components/banner'
import Classe from './components/classe'
import Contact from './components/contact'
import Footer from './components/footer'
import Header from './components/header'
import Location from './components/location'
import OurSpace from './components/our-space'
import Plans from './components/plans'

function App() {
  return (
    <>
      <Header/>
      <Banner/>
      <About/>
      <OurSpace/>
      <Classe/>
      <Plans/>
      <Contact/>
      <Location/>
      {/**
       * <img src={viteLogo} className="logo" alt="Vite logo" />
       * <img src={reactLogo} className="logo react" alt="React logo" />
       */}
      <Footer/>
    </>
  )
}

export default App
