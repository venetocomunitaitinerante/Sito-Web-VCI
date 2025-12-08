import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Walks } from './pages/Walks';
import { Partners } from './pages/Partners';
import { Participate } from './pages/Participate';
import { Projects, Blog, Media, Info } from './pages/Others';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chi-siamo" element={<About />} />
          <Route path="/cammini" element={<Walks />} />
          <Route path="/progetti" element={<Projects />} />
          <Route path="/associazioni" element={<Partners />} />
          <Route path="/partecipa" element={<Participate />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/media" element={<Media />} />
          <Route path="/info" element={<Info />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;