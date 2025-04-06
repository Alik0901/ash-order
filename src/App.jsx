import { useEffect } from 'react';
import WebApp from '@twa-dev/sdk';
import { Routes, Route } from 'react-router-dom';
import Welcome from './screens/Welcome';
import Init from './screens/Init';
import Path from './screens/Path';

function App() {
  useEffect(() => {
    WebApp.ready();
    WebApp.expand(); // Растягивает WebApp на весь экран Telegram

    console.log("✅ Telegram WebApp инициализирован");
    console.log("InitData:", WebApp.initData);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/init" element={<Init />} />
      <Route path="/path" element={<Path />} />
    </Routes>
  );
}

export default App;
