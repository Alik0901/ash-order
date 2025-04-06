import { useEffect } from 'react';
import WebApp from '@twa-dev/sdk';
import { Routes, Route } from 'react-router-dom';
import Welcome from './screens/Welcome';
import Init from './screens/Init';
import Path from './screens/Path';
import Burn from './screens/Burn';

export default function App() {
  useEffect(() => {
    WebApp.ready();
    WebApp.expand();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/init" element={<Init />} />
      <Route path="/path" element={<Path />} />
      <Route path="/burn" element={<Burn />} />
    </Routes>
  );
}
