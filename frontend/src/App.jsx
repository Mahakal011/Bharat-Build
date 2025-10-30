import './App.css'
import Home from './pages/Home'
import TermsAndConditions from "./pages/footerPage/TermsAndConditions"
import ReachUs from "./pages/footerPage/ReachUs"
import WebsitePolicies from "./pages/footerPage/WebsitePolicies"
import Help from "./pages/footerPage/Help"
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <div className="min-h-screen bg-white flex flex-col overflow-hidden" >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/help" element={<Help />} />
            <Route path="/reachus" element={<ReachUs />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="/policies" element={<WebsitePolicies />} />
          </Routes>
        </BrowserRouter>
        
      </div>
    </>
  )
}

export default App
