import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import Shoes from '../../pages/Shoes';
import { useEffect } from 'react';

export function AppRouter() {
  useEffect(() => {
    // GitHub Pages SPA redirect handling
    if (window.location.search.includes('/?/')) {
      const redirect = sessionStorage.redirect;
      delete sessionStorage.redirect;
      if (redirect && redirect !== window.location.href) {
        window.history.replaceState(null, '', redirect);
      }
    }
  }, []);

  return (
    <Router basename="/runnercenter">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shoes" element={<Shoes />} />
      </Routes>
    </Router>
  );
}
