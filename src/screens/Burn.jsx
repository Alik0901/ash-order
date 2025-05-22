import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { tonConnect } from '../lib/tonConnect';

export default function Burn() {
  const [address, setAddress] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    async function checkWallet() {
      try {
        await tonConnect.restoreConnection();
        const connected = await tonConnect.connect();

        if (connected) {
          setAddress(tonConnect.account?.address);
        } else {
          console.warn('[WARNING] Кошелек не подключен');
          setError('❌ Ошибка подключения TON кошелька');
        }
      } catch (err) {
        console.error('[ERROR] TON Connect Exception:', err);
        setError('❌ Ошибка подключения TON кошелька');
      }
    }

    checkWallet();
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.overlay} />
      <div style={styles.content}>
        <h2 style={styles.title}>🔥 Burn Phase</h2>

        {address ? (
          <>
            <p style={styles.addr}>🜂 {address}</p>
            <button style={styles.button} onClick={() => navigate('/ash')}>
              Confirm Sacrifice
            </button>
          </>
        ) : (
          <p style={styles.connecting}>Checking wallet...</p>
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
    backgroundImage: 'url("/bg-burn.webp")',
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
  addr: {
    fontSize: '15px',
    marginBottom: 20,
  },
  connecting: {
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
