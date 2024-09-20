import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Profile from './components/Profile';
import Login from './components/Login';
import Cafeteria from './components/Cafeteria';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="cafeteria" element={<Cafeteria />} />
        <Route path="login" element={<Login />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;
