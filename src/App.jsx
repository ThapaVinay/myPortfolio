import { BrowserRouter, Route, Routes } from "react-router-dom"
import { About, Contact, Experience, Hero, Navbar, Works, StarsCanvas } from './components';

const App = () => {

  return (

    <BrowserRouter>

      <div className="relative z-0 bg-primary ">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Hero />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/experience" element={<Experience />} />
          <Route exact path="/works" element={<Works />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>

  )
}

export default App
