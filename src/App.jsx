import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Page1 from './components/Page1';
import Profile from './components/Profile';
import Login from './components/Login';
import Transport from './components/Transport';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="page1" element={<Page1 />} />
        <Route path="login" element={<Login />} />
        <Route path="profile" element={<Profile />} />
        <Route path="transport" element={<Transport />} /> 
      </Route>
    </Routes>
  );
}

export default App;
