import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Profile from './components/Profile';
import Login from './components/Login';
import Dashboard from './components/dashboard/Dashboard';
import Cafeteria from './components/Cafeteria';
import Transport from './components/Transport';
import Page2 from './components/page2';
import EventPage from './components/EventPage';
import LibraryPage from './components/LibraryPage';
import LandingPage from './components/Landingpage';
import EventsPage from './components/EventsPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* <Route path="" element={<Page2 />} /> */}
        <Route path="cafeteria" element={<Cafeteria />} />
        <Route path="LibraryPage" element={<LibraryPage />} />
        <Route path="LandingPage" element={<LandingPage />} />


        {/* <Route path="page1" element={<Page1 />} /> */}
        <Route path="login" element={<Login />} />
        <Route path="profile" element={<Profile />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="track-transport" element={<Transport />} /> 
        <Route path="event" element={<EventPage />} /> 
        <Route path="events" element={<EventsPage />} /> 
      </Route>
    </Routes>
  );
}

export default App;
