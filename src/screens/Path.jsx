import { useEffect, useState } from 'react';

export default function Path() {
  const [name, setName] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('ash_order_name');
    setName(saved || 'Безымянный');
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
      <h2>Путь начат</h2>
      <p>{name}, ты сделал первый шаг.</p>
    </div>
  );
}
