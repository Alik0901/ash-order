import { useNavigate } from 'react-router-dom';

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <div style={styles.overlay} />
      <div style={styles.content}>
        <h1 style={styles.title}>ORDER OF ASH</h1>
        <p style={styles.subtitle}>Those who seek light must first burn.</p>
        <button style={styles.button} onClick={() => navigate('/init')}>
          ENTER
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    position: 'relative',
    height: '100vh',
    backgroundImage: 'url("/bg-welcome.webp")',
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
    height: '100%',
    color: '#d4af37',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'serif',
    textAlign: 'center',
    padding: '0 20px',
  },
  title: {
    fontSize: '32px',
    letterSpacing: '2px',
  },
  subtitle: {
    fontSize: '16px',
    marginTop: '10px',
    opacity: 0.85,
  },
  button: {
    marginTop: 30,
    padding: '12px 24px',
    background: 'transparent',
    color: '#d4af37',
    border: '1px solid #d4af37',
    cursor: 'pointer',
    fontSize: '16px',
  },
};
