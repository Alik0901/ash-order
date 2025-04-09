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
    <div style={styles.container}>
      <div style={styles.overlay} />
      <div style={styles.content}>
        <h2 style={styles.title}>Name yourself</h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="The name that will burn"
          style={styles.input}
        />
        <button style={styles.button} onClick={handleContinue}>
          Continue
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    position: 'relative',
    height: '100vh',
    backgroundImage: 'url("/bg-init.webp")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    overflow: 'hidden',
    width: '100%',
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
    width: '100%',
    maxWidth: '100%',
    padding: '0 20px',
    boxSizing: 'border-box',
  },
  title: {
    fontSize: '24px',
    marginBottom: 10,
  },
  input: {
    padding: '10px',
    width: '100%',
    maxWidth: '400px',
    fontSize: '16px',
    backgroundColor: 'black',
    color: '#d4af37',
    border: '1px solid #d4af37',
    marginBottom: '20px',
    boxSizing: 'border-box',
  },
  button: {
    padding: '10px 20px',
    background: 'transparent',
    color: '#d4af37',
    border: '1px solid #d4af37',
    cursor: 'pointer',
    fontSize: '16px',
  },
};
