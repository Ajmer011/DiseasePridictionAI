import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import HomePage from './components/HomePage';
import HelpContact from './components/HelpContact';
import History from './components/History';
import Profile from './components/Profile';
import Dashboard from './components/Dashboard';
import PersonalInfo from './components/PersonalInfo';
import Aboutwork from './components/Aboutwork';
import Login from './components/Login';
import Signup from './components/Signup';
import ProEdit from './components/ProEdit';
import AboutUs from './components/AboutUs';
import Feedback from './components/Feedback';
import HeartQ from './components/HeartQ';

// import ScrollToTop from './components/ScrollToTop'; // 👈 import it

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<HomePage />} />
        <Route path="/history" element={<History />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/help" element={<HelpContact />} />
        <Route path="/predict" element={<PersonalInfo />} />
        <Route path="/about" element={<Aboutwork />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/edit" element={<ProEdit />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/heart" element={<HeartQ />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
