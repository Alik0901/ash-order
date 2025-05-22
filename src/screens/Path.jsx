import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getTonConnectInstance } from '../lib/tonConnect';

export default function Path() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const saved = localStorage.getItem('ash_order_name');
    setName(saved || 'Nameless');

    async function connectWallet() {
      try {
        console.log('[DEBUG] Инициализация TonConnect...');
        const tonConnect = getTonConnectInstance();
        await tonConnect.restoreConnection();

        const connected = await tonConnect.connect();
        console.log('[DEBUG] Ответ от connect:', connected);

        if (connected) {
          console.log('[SUCCESS] Кошелёк подключён:', tonConnect.account);
          setAddress(tonConnect.account?.address);
        } else {
          console.warn('[WARNING] Кошелёк не подключился');
        }
      } catch (err) {
        console.error('[ERROR] TON Connect Exception:', err);
        setError('❌ Ошибка подключения TON кошелька');
      }
    }

    connectWallet();
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.overlay} />
      <div style={styles.content}>
        <h2 style={styles.title}>The Path Begins</h2>
        <p style={styles.subtitle}>
          {name}, you have taken the first step.
        </p>

        {address ? (
          <>
            <p style={styles.addr}>🜂 {address}</p>
            <button style={styles.button} onClick={() => navigate('/burn')}>
              Burn Yourself
            </button>
          </>
        ) : (
          <p style={styles.subconnecting}>Connecting to your TON wallet...</p>
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
    marginBottom: 20,
  },
  addr: {
    fontSize: '15px',
    marginBottom: 20,
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
    fontSize: '14px',
    marginTop: 10,
  },
};
