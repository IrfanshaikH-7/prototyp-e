import { Routes, Route } from 'react-router-dom'
import LenisScroll from './components/shared/LenisScroll'
import Navbar from './components/shared/Navbar'
import Home from './pages/Home'
import Footer from './components/shared/Footer'

function App() {

  return (
    <div className="relative min-h-screen">
      <LenisScroll />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  )
  
}

export default App
