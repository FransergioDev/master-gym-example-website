import './App.css'
import About from './components/about'
import Banner from './components/banner'
import ButtonTopPage from './components/buttonTopPage'
import ButtonWhatsapp from './components/buttonWhatsapp'
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
      <ButtonWhatsapp/>
      <ButtonTopPage/>
      <Footer/>
    </>
  )
}

export default App
