import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getTonConnectInstance } from '../lib/tonConnect';

export default function Burn() {
  const [name, setName] = useState('');
  const [burning, setBurning] = useState(false);
  const [address, setAddress] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const saved = localStorage.getItem('ash_order_name');
    setName(saved || 'Nameless');

    const tonConnect = getTonConnectInstance();
    if (tonConnect.account?.address) {
      setAddress(tonConnect.account.address);
    }
  }, []);

  const handleBurn = () => {
    setBurning(true);
    setTimeout(() => {
      navigate('/profile');
    }, 3000);
  };

  return (
    <div style={styles.container}>
      <div style={styles.overlay} />
      <div style={styles.content}>
        <h2 style={styles.title}>The Sacrifice</h2>
        <p style={styles.subtitle}>{name}, are you ready to burn?</p>
        {address && <p style={styles.addr}>🜂 {address}</p>}

        {!burning ? (
          <button style={styles.button} onClick={handleBurn}>
            Offer Yourself
          </button>
        ) : (
          <p style={styles.burning}>🔥 The fire consumes you...</p>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    position: 'relative',
    height: '100vh',
    backgroundImage: 'url("/bg-burn.webp")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    overflow: 'hidden',
  },
  overlay: {
    position: 'absolute',
    inset: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    zIndex: 1,
  },
  content: {
    position: 'relative',
    zIndex: 2,
    color: '#d4af37',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'serif',
    textAlign: 'center',
    height: '100%',
    padding: '0 20px',
  },
  title: {
    fontSize: '26px',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: '16px',
    marginBottom: 10,
  },
  addr: {
    fontSize: '14px',
    marginBottom: 30,
    opacity: 0.9,
  },
  button: {
    padding: '10px 24px',
    background: 'transparent',
    color: '#d4af37',
    border: '1px solid #d4af37',
    cursor: 'pointer',
    fontSize: '16px',
  },
  burning: {
    fontSize: '18px',
    color: 'orangered',
  },
};
