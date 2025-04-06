import { useEffect } from 'react';
import WebApp from '@twa-dev/sdk';

export default function App() {
  useEffect(() => {
    WebApp.ready();
    WebApp.expand();
    console.log('✅ WebApp инициализирован');
  }, []);

  return (
    <div style={{
      height: '100vh',
      backgroundColor: '#111',
      color: '#0f0',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '24px',
      fontWeight: 'bold',
    }}>
      Привет, Telegram 👁‍🗨
    </div>
  );
}
