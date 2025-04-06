import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Burn() {
  const [name, setName] = useState('');
  const [burning, setBurning] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const saved = localStorage.getItem('ash_order_name');
    setName(saved || 'Безымянный');
  }, []);

  const handleBurn = () => {
    setBurning(true);
    setTimeout(() => {
      navigate('/ash'); // потом создадим экран "Прах"
    }, 3000); // 3 секунды "сожжения"
  };

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
      <h2>Сожжение</h2>
      <p>{name}, ты готов сгореть ради истины?</p>

      {!burning ? (
        <button
          onClick={handleBurn}
          style={{
            marginTop: 20,
            padding: '12px 24px',
            background: 'transparent',
            color: '#d4af37',
            border: '1px solid #d4af37',
            cursor: 'pointer'
          }}
        >
          Принести себя в жертву
        </button>
      ) : (
        <div style={{ marginTop: 20, fontSize: 18, color: 'orangered' }}>
          🔥 Пламя поглощает тебя...
        </div>
      )}
    </div>
  );
}
