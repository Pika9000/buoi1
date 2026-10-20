import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SiteLayout from './components/SiteLayout.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import HomePage from './pages/HomePage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import ProductsPage from './pages/ProductsPage.jsx'
import './App.css'

function App() {
  const [cartCount, setCartCount] = useState(0)
  const [notice, setNotice] = useState('')

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout cartCount={cartCount} notice={notice} setNotice={setNotice} />}>
          <Route path="/" element={<HomePage addToCart={() => setCartCount((count) => count + 1)} />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage addToCart={() => setCartCount((count) => count + 1)} />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
