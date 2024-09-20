import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Profile from './components/Profile';
import Login from './components/Login';
import Dashboard from './components/dashboard/Dashboard';
import Cafeteria from './components/Cafeteria';
import Transport from './components/Transport';
import Page2 from './components/page2';
import EventPage from './components/EventPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="cafeteria" element={<Cafeteria />} />
        {/* <Route path="page1" element={<Page1 />} /> */}
        <Route path="page2" element={<Page2 />} />
        <Route path="login" element={<Login />} />
        <Route path="profile" element={<Profile />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="track-transport" element={<Transport />} /> 
        <Route path="event" element={<EventPage />} /> 
      </Route>
    </Routes>
  );
}

export default App;
