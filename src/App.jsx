import { useEffect } from 'react';
import WebApp from '@twa-dev/sdk';

export default function App() {
  useEffect(() => {
    WebApp.ready();
    WebApp.expand();
  }, []);

  return (
    <div style={{
      height: '100vh',
      background: '#0c0c0c',
      color: '#d4af37',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'serif',
      textAlign: 'center'
    }}>
      <h1>ОРДЕН ПЕПЛА</h1>
      <p>Тот, кто ищет свет — должен сгореть.</p>
    </div>
  );
}
