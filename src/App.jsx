import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
// import Page1 from './components/Page1';
import Profile from './components/Profile';
import Login from './components/Login';
import Page2 from './components/page2';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* <Route path="page1" element={<Page1 />} /> */}
        <Route path="page2" element={<Page2 />} />
        <Route path="login" element={<Login />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;
