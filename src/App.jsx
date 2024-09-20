import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Profile from './components/Profile';
import Login from './components/Login';
<<<<<<< HEAD
import Dashboard from './components/dashboard/Dashboard';
=======
import Cafeteria from './components/Cafeteria';
import Transport from './components/Transport';
>>>>>>> 72a471b6da5fc1f9c6ee153a5953aced46529d28

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="cafeteria" element={<Cafeteria />} />
        <Route path="login" element={<Login />} />
        <Route path="profile" element={<Profile />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="track-transport" element={<Transport />} /> 
      </Route>
    </Routes>
  );
}

export default App;
