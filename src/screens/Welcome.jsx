import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import WebApp from "@twa-dev/sdk";

export default function Welcome() {
  const navigate = useNavigate();

  useEffect(() => {
    WebApp.ready();
    WebApp.expand(); // Telegram: разрешить и развернуть WebApp
  }, []);

  return (
    <div style={styles.container}>
      <h1>ОРДЕН ПЕПЛА</h1>
      <p>Тот, кто ищет свет — должен сгореть.</p>
      <button style={styles.button} onClick={() => navigate('/init')}>
        ВОЙТИ
      </button>
    </div>
  );
}

const styles = {
  container: {
    height: '100vh',
    background: '#0c0c0c',
    color: '#d4af37',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'serif',
    textAlign: 'center',
  },
  button: {
    padding: '12px 24px',
    fontSize: 16,
    backgroundColor: 'transparent',
    border: '1px solid #d4af37',
    color: '#d4af37',
    cursor: 'pointer',
    marginTop: 20,
  },
};
