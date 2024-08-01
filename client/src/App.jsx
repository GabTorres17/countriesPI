import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import LandingPage from './pages/LandingPage/LandingPage'
import HomePage from './pages/HomePage/HomePage'
import FormPage from './pages/FormPage/FormPage';
import DetailPage from './pages/DetailPage/DetailPage';
import NotFound from './pages/NotFound/NotFound'
import BackgroundPlanets from './components/Background Planet/BackgroundPlanets';

function App() {
  return (
    <>
      <div className='w-full'>
        <BackgroundPlanets />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/countries" element={<HomePage />} />
          <Route path="/countries/:id" element={<DetailPage />} />
          <Route path="/form" element={<FormPage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </>
  )
}

export default App
