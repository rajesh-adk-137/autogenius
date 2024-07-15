import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import HomePage from './pages/HomePage';


export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/about" element={<AboutPage/>} />
          <Route exact path="/predict" element={<HomePage />} />
        </Routes>
      </Router>
    </>
  )
}