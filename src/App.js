import './App.css'
import Hero from './components/Hero'
import Programs from './components/Program/Programs'
import Reasons from './components/Reason/Reasons'
import Plans from './components/Plan/Plans'
import Testimonials from './components/Testimonial/Testimonials'
import Join from './components/Join/Join'
import Footer from './components/Footers/Footer'
import Clips from './components/Program/clips/Clips'

function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Testimonials />
      <Join />
      <Clips />
      <Footer />
    </div>
  )
}

export default App
