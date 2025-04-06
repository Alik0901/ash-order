import { useNavigate } from 'react-router-dom';

export default function Welcome() {
  const navigate = useNavigate();

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
      <button
        style={{
          marginTop: 20,
          padding: '10px 20px',
          border: '1px solid #d4af37',
          background: 'transparent',
          color: '#d4af37',
          cursor: 'pointer'
        }}
        onClick={() => navigate('/init')}
      >
        ВОЙТИ
      </button>
    </div>
  );
}
