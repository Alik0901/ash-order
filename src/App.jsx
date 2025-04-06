import { useEffect } from 'react';
import WebApp from '@twa-dev/sdk';
import { Routes, Route } from 'react-router-dom';
import Welcome from './screens/Welcome';

export default function App() {
  useEffect(() => {
    WebApp.ready();
    WebApp.expand();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
    </Routes>
  );
}
