import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import Shoes from '../../pages/Shoes';

export function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/runnercenter/" element={<Home />} />
        <Route path="/runnercenter/shoes" element={<Shoes />} />
      </Routes>
    </Router>
  );
}
