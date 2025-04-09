import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { tonConnect } from '../lib/tonConnect';

export default function Burn() {
  const [name, setName] = useState('');
  const [burning, setBurning] = useState(false);
  const [result, setResult] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedName = localStorage.getItem('ash_order_name');
    setName(savedName || 'Nameless');

    const account = tonConnect.account;
    if (!account?.address) {
      navigate('/path');
    }
  }, [navigate]);

  const handleBurn = () => {
    setBurning(true);

    setTimeout(() => {
      const outcomes = ['fragment', 'curse', 'nothing'];
      const outcome = outcomes[Math.floor(Math.random() * outcomes.length)];

      const now = Date.now();
      const walletAddress = tonConnect.account?.address;
      const raw = localStorage.getItem(`ash_data_${walletAddress}`);
      const saved = raw ? JSON.parse(raw) : { fragments: [], cursedUntil: null };

      const updated = { ...saved };

      if (outcome === 'fragment') {
        const newFragment = `Fragment-${Math.floor(Math.random() * 1000)}`;
        updated.fragments.push(newFragment);
      } else if (outcome === 'curse') {
        updated.cursedUntil = now + 24 * 60 * 60 * 1000;
      }

      localStorage.setItem(`ash_data_${walletAddress}`, JSON.stringify(updated));
      setResult(outcome);

      setTimeout(() => navigate('/profile'), 3000);
    }, 3000);
  };

  const renderResult = () => {
    switch (result) {
      case 'fragment':
        return <p style={styles.result}>🜁 A fragment emerges from the ash</p>;
      case 'curse':
        return <p style={styles.result}>☠ You are cursed for 24 hours</p>;
      case 'nothing':
        return <p style={styles.result}>The fire takes... nothing</p>;
      default:
        return <p style={styles.burning}>🔥 The fire consumes you...</p>;
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.overlay} />
      <div style={styles.content}>
        <h2 style={styles.title}>The Sacrifice</h2>
        <p style={styles.subtitle}>{name}, are you ready to burn?</p>

        {!burning ? (
          <button style={styles.button} onClick={handleBurn}>
            Offer Yourself
          </button>
        ) : (
          renderResult()
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
    marginBottom: 30,
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
  result: {
    fontSize: '18px',
    color: '#d4af37',
    marginTop: 20,
  },
};
