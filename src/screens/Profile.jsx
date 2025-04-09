import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const [name, setName] = useState('');
  const [fragments, setFragments] = useState([]);
  const [cursedUntil, setCursedUntil] = useState(null);
  const [isCursed, setIsCursed] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const savedName = localStorage.getItem('ash_order_name');
    setName(savedName || 'Nameless');

    const savedResult = JSON.parse(localStorage.getItem('ash_order_result'));
    if (savedResult) {
      setFragments(savedResult.fragments || []);
      setCursedUntil(savedResult.cursedUntil || null);

      const now = Date.now();
      if (savedResult.cursedUntil && savedResult.cursedUntil > now) {
        setIsCursed(true);
      }
    }
  }, []);

  const handleReturn = () => {
    if (!isCursed) {
      navigate('/path');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.overlay} />
      <div style={styles.content}>
        <h2 style={styles.title}>Ash Ledger</h2>
        <p style={styles.subtitle}>🜁 {name}</p>

        <div style={styles.section}>
          <h4 style={styles.label}>Fragments Collected:</h4>
          {fragments.length > 0 ? (
            <ul>
              {fragments.map((frag, idx) => (
                <li key={idx} style={styles.fragment}>🝓 {frag}</li>
              ))}
            </ul>
          ) : (
            <p style={styles.text}>None yet</p>
          )}
        </div>

        <div style={styles.section}>
          <h4 style={styles.label}>Curse Status:</h4>
          {isCursed ? (
            <p style={styles.curse}>☠ Cursed until {new Date(cursedUntil).toLocaleString()}</p>
          ) : (
            <p style={styles.text}>You are not cursed</p>
          )}
        </div>

        <button
          onClick={handleReturn}
          style={{
            ...styles.button,
            opacity: isCursed ? 0.3 : 1,
            cursor: isCursed ? 'not-allowed' : 'pointer',
          }}
          disabled={isCursed}
        >
          Return to Path
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    position: 'relative',
    height: '100vh',
    backgroundImage: 'url("/ledger_bg.webp")',
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
    alignItems: 'center',
    fontFamily: 'serif',
    textAlign: 'center',
    height: '100%',
    padding: '40px 20px',
    boxSizing: 'border-box',
  },
  title: {
    fontSize: '26px',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: '16px',
    opacity: 0.8,
    marginBottom: 30,
  },
  section: {
    marginBottom: 30,
  },
  label: {
    fontSize: '18px',
    marginBottom: 8,
  },
  fragment: {
    fontSize: '15px',
    marginBottom: 4,
  },
  text: {
    fontSize: '15px',
    opacity: 0.7,
  },
  curse: {
    fontSize: '15px',
    color: 'orangered',
  },
  button: {
    padding: '10px 24px',
    background: 'transparent',
    color: '#d4af37',
    border: '1px solid #d4af37',
    fontSize: '16px',
    transition: 'opacity 0.3s ease',
  },
};
