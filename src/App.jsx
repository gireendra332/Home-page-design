import './App.css'
import Navbar from './Navbar.jsx'
import ScrollText from './ScrollText.jsx'
import Herosection from './Herosection.jsx'
import TrendingTech from './TrendingTech.jsx'
import Section3 from './Section-3.jsx'
import StatSection from './statSection.jsx'
import Section4 from './Section-4.jsx'
import GridCards from './GridCards.jsx'
import TopCategory from './TopCategory.jsx'
import Footer from './Footer.jsx'
import Features from './Features.jsx'
// import Backdround from './LastPage.jsx'
import FAQ from './questions.jsx'
import ContactForm from './Contact.jsx'
import Testimonails from './Testimonials.jsx'

function App() {
  return (
    <div>
      <Navbar />
      <ScrollText />
      <Herosection />
      <TrendingTech />
      <Section3 /> 
      <StatSection/>
      <Section4/>
      <GridCards/>
      <TopCategory/>
      <Features/>
      <FAQ/> 
      <ContactForm/>
      <Testimonails/>
      <Footer/>
      {/* <LastPage/> */}
      

      
    </div>
  )
}

export default App
