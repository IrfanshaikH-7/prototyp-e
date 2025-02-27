import { Routes, Route } from 'react-router-dom'
import LenisScroll from './components/shared/LenisScroll'
import Navbar from './components/shared/Navbar'
import Home from './pages/Home'
import Footer from './components/shared/Footer'
import DashboardForm from './components/home/DashboardForm'
import Strategies from './pages/Strategies'
import React, { useEffect, useState } from 'react'
import DiscountModal from './components/shared/DiscountModal'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(true)
    }, 3000) // Show modal after 3 seconds

    return () => clearTimeout(timer) // Cleanup timer on unmount
  }, [])

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div className="relative ">
      <LenisScroll />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
       
      </Routes>
      <Footer />
      {isModalOpen && <DiscountModal onClose={closeModal} />}
    </div>
  )
}

export default App
