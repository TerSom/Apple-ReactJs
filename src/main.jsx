import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'
import Home from './Home.jsx'
import Sales from './Sales.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Router>
      <Routes>
        <Route path="/Apple-ReactJs/" element={<Home/>} />
        <Route path="/Apple-ReactJs/Sales" element={<Sales />} />
      </Routes>
    </Router>
  </StrictMode>,
)
