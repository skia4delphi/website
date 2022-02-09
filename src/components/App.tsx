import { HashRouter, Route, Routes } from 'react-router-dom';
import styled from '@emotion/styled';
import '@fontsource/rubik';
import backgroundImage from './bg.jpg';

import About from './pages/About';
import Home from './pages/Home';
import Header from './organisms/Header';
import Footer from './organisms/Footer';

const Content = styled.div({
  minHeight: '100vh',
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundColor: '$background',
  backgroundRepeat: 'no-repeat',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

export default () => (
  <HashRouter>
    <Content>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </Content>
  </HashRouter>
);
