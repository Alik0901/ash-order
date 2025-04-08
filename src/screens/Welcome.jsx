import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Welcome() {
  const navigate = useNavigate();
  const [showScroll, setShowScroll] = useState(false);

  const handleEnter = () => {
    navigate('/init');
  };

  return (
    <div style={styles.container}>
      <div style={styles.overlay} />
      <div style={styles.content}>
        <h1 style={styles.title}>ORDER OF ASH</h1>
        <p style={styles.subtitle}>Those who seek light must first burn.</p>

        <button style={styles.button} onClick={handleEnter}>
          ENTER
        </button>

        <button style={styles.reveal} onClick={() => setShowScroll(true)}>
          Read the Scroll
        </button>
      </div>

      {showScroll && (
        <div style={styles.scrollOverlay}>
          <div style={styles.scroll}>
            <h2 style={styles.scrollTitle}>The Scroll of Ash</h2>
            <p style={styles.scrollText}>
              This is not a game of gain. It is a ritual of loss. <br /><br />
              You burn what you hold — and through it, cleanse what you are. <br /><br />
              As you burn, you may find fragments. Pieces. Echoes. <br />
              Gather them. Interpret them. They form a labyrinth. <br /><br />
              At the end, something will take shape — an artifact not even the creator knows. <br />
              A final NFT, forged from the ashes of many. <br /><br />
              He who completes the path shall shape the second season, <br />
              and be granted a tribute of <b>twenty Remnants</b> — a sacred share of what was lost.<br /><br />
              Some say the Creator is watching. <br />
              Some say he seeks a brilliant, unusual mind to join him. <br /><br />
              Some say… that mind is you.
            </p>

            <button style={styles.close} onClick={() => setShowScroll(false)}>
              I Understand
            </button>
          </div>
        </div>
      )}
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
    fontFamily: 'serif',
  },
  overlay: {
    position: 'absolute',
    inset: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.65)',
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
  reveal: {
    marginTop: 16,
    fontSize: '14px',
    textDecoration: 'underline',
    background: 'none',
    border: 'none',
    color: '#d4af37',
    cursor: 'pointer',
  },
  scrollOverlay: {
    position: 'fixed',
    inset: 0,
    backgroundColor: 'rgba(12, 12, 12, 0.92)',
    zIndex: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  scroll: {
    background: '#1a1a1a',
    border: '1px solid #d4af37',
    padding: '30px',
    maxWidth: '600px',
    color: '#d4af37',
    textAlign: 'left',
    boxShadow: '0 0 15px rgba(212, 175, 55, 0.3)',
    borderRadius: '8px',
  },
  scrollTitle: {
    fontSize: '20px',
    marginBottom: '20px',
    textAlign: 'center',
  },
  scrollText: {
    fontSize: '14px',
    lineHeight: '1.6',
  },
  close: {
    marginTop: 20,
    background: 'transparent',
    color: '#d4af37',
    border: '1px solid #d4af37',
    padding: '8px 16px',
    cursor: 'pointer',
    fontSize: '14px',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
};
