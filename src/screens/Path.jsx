import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Path() {
  const [name, setName] = useState('');
  const navigate = useNavigate();

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
      textAlign: 'center',
      padding: '0 20px'
    }}>
      <h2>Путь начат</h2>
      <p>{name}, ты сделал первый шаг.</p>

      <button
        style={{
          marginTop: 30,
          padding: '12px 24px',
          background: 'transparent',
          color: '#d4af37',
          border: '1px solid #d4af37',
          cursor: 'pointer'
        }}
        onClick={() => navigate('/burn')}
      >
        🔥 Сжечь себя
      </button>
    </div>
  );
}
