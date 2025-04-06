import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Init() {
  const navigate = useNavigate();
  const [name, setName] = useState('');

  const handleContinue = () => {
    if (name.trim() !== '') {
      localStorage.setItem('ash_order_name', name);
      navigate('/path');
    }
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
      <h2>Назови себя</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Имя, которое сгорит"
        style={{
          padding: '10px',
          marginTop: '10px',
          fontSize: '16px',
          background: 'black',
          border: '1px solid #d4af37',
          color: '#d4af37'
        }}
      />
      <button
        style={{
          marginTop: 20,
          padding: '10px 20px',
          border: '1px solid #d4af37',
          background: 'transparent',
          color: '#d4af37',
          cursor: 'pointer'
        }}
        onClick={handleContinue}
      >
        Продолжить
      </button>
    </div>
  );
}
