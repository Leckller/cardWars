import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import NotFound from './routes/NotFound';
import Profile from './routes/Profile';
import Map from './routes/Map';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/Map" element={<Map />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
