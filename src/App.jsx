import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Profile from './components/Profile';
import Login from './components/Login';
import Cafeteria from './components/Cafeteria';
import Transport from './components/Transport';
import EventPage from './components/EventPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="cafeteria" element={<Cafeteria />} />
        <Route path="login" element={<Login />} />
        <Route path="profile" element={<Profile />} />
        <Route path="track-transport" element={<Transport />} /> 
        <Route path="event" element={<EventPage />} /> 
      </Route>
    </Routes>
  );
}

export default App;
