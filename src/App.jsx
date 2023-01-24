import './App.css'
import Content from './Components/Content'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import Images from './Components/Images'
import Testimonials from './Components/Testimonials'

function App() {
  return (
    <div className="App font-Barl">
      <Hero/>
      <Content/>
      <Testimonials/>
      <Images/>
      <Footer/>
    </div>
  )
}

export default App
