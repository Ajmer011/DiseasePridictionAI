import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Auth from './components/Auth';
import HomePage from './components/HomePage';
import HelpContact from './components/HelpContact';
import History from './components/History';
import Profile from './components/Profile';
import Dashboard from './components/Dashboard';
import PersonalInfo from './components/PersonalInfo';

// import ScrollToTop from './components/ScrollToTop'; // 👈 import it

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/main" element={<HomePage />} />
        <Route path="/history" element={<History />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/help" element={<HelpContact />} />
        <Route path="/predict" element={<PersonalInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
