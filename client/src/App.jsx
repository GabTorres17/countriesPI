import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css'
import LandingPage from './pages/LandingPage/LandingPage'
import HomePage from './pages/HomePage/HomePage'
import FormPage from './pages/FormPage/FormPage';
import DetailPage from './pages/DetailPage/DetailPage';
import NavBar from './components/NavBar/NavBar'
import NotFound from './pages/NotFound/NotFound'

function App() {
  //const [count, setCount] = useState(0)
  //<Route path="/countries" element={<HomePage />} >
  //<Route path="/countries/:id" element={<DetailPage />} />
  const location = useLocation();
  console.log(location.pathname);

  return (
    <>
      <div>
        {/*         {
          location.pathname === "/countries" ? <NavBar /> : null
        } */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/countries" element={<HomePage />} >
            <Route path="/countries/:id" element={<DetailPage />} />
          </Route>
          <Route path="/form" element={<FormPage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </>
  )
}

export default App
