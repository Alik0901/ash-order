import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { tonConnect } from '../lib/tonConnect';

export default function Path() {
  const [name, setName] = useState('');
  const [connected, setConnected] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const saved = localStorage.getItem('ash_order_name');
    setName(saved || 'Nameless');

    async function connectWallet() {
      try {
        await tonConnect.restoreConnection(); // Восстановление, если уже подключён
        const connectedWallet = await tonConnect.connect();
        if (connectedWallet) {
          setConnected(true);
        }
      } catch (e) {
        console.error('TON connection error:', e);
        setError('❌ Failed to connect to TON wallet.');
      }
    }

    connectWallet();
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.overlay} />
      <div style={styles.content}>
        <h2 style={styles.title}>The Path Begins</h2>
        <p style={styles.subtitle}>{name}, you have taken the first step.</p>

        {!connected && (
          <p style={styles.subconnecting}>Connecting to your TON wallet...</p>
        )}

        {connected && (
          <button style={styles.button} onClick={() => navigate('/burn')}>
            Burn Yourself
          </button>
        )}

        {error && <p style={styles.error}>{error}</p>}
      </div>
    </div>
  );
}

const styles = {
  container: {
    position: 'relative',
    height: '100vh',
    width: '100%',
    backgroundImage: 'url("/bg-path.webp")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    overflow: 'hidden',
    fontFamily: 'serif',
  },
  overlay: {
    position: 'absolute',
    inset: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1,
  },
  content: {
    position: 'relative',
    zIndex: 2,
    height: '100%',
    width: '100%',
    color: '#d4af37',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '0 20px',
    boxSizing: 'border-box',
  },
  title: {
    fontSize: '26px',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: '16px',
    opacity: 0.85,
    marginBottom: 10,
  },
  subconnecting: {
    fontSize: '16px',
    marginBottom: 10,
    opacity: 0.75,
  },
  button: {
    padding: '10px 24px',
    background: '#d4af37',
    color: '#000',
    border: 'none',
    fontSize: '16px',
    cursor: 'pointer',
    marginTop: '20px',
  },
  error: {
    color: 'orangered',
    marginTop: 12,
    fontSize: '14px',
  },
};
