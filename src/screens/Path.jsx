import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { tonConnect } from '../lib/tonConnect';

export default function Path() {
  const [address, setAddress] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const saved = localStorage.getItem('ash_order_name');
    if (!saved) navigate('/init');

    tonConnect.restoreConnection().then(() => {
      const acc = tonConnect.account;
      if (acc?.address) {
        setAddress(acc.address);
      } else {
        tonConnect.connect();
      }
    });
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.overlay} />
      <div style={styles.content}>
        <h2 style={styles.title}>The Path Begins</h2>
        <p style={styles.subtitle}>
          {address ? `🜂 ${address}` : 'Connecting to your TON wallet...'}
        </p>

        {address && (
          <button style={styles.burn} onClick={() => navigate('/burn')}>
            Burn Yourself
          </button>
        )}
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
    boxSizing: 'border-box',
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
  burn: {
    padding: '10px 24px',
    background: '#d4af37',
    color: '#000',
    border: 'none',
    fontSize: '16px',
    cursor: 'pointer',
    marginTop: '10px',
  },
};
