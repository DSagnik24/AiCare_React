import React from 'react'
import NavigationBar from './components/Navbar'
import Footer from './components/Footer'
import MarqueeSection from './components/MarqueSection'

function App() {
  return (
    <>
      <NavigationBar />
      <main className="container mt-4">
        <h1 className="text-center mb-4">Welcome to AICARE React</h1>
      </main>
      <MarqueeSection />
      <Footer />
    </>
  )
}

export default App
