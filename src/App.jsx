import { Routes, Route } from 'react-router-dom'
import LenisScroll from './components/shared/LenisScroll'
import Navbar from './components/shared/Navbar'
import Home from './pages/Home'
import Footer from './components/shared/Footer'
import DashboardForm from './components/home/DashboardForm'

function App() {

  return (
    <div className="relative min-h-screen">
      <LenisScroll />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<DashboardForm />} />
      </Routes>
      <Footer />
    </div>
  )
  
}

export default App
