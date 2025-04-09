import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { injected } from 'wagmi/connectors';

export default function Path() {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const { address, isConnected } = useAccount();
  const { connect } = useConnect({ connector: injected() });
  const { disconnect } = useDisconnect();

  useEffect(() => {
    const saved = localStorage.getItem('ash_order_name');
    setName(saved || 'Nameless');
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.overlay} />
      <div style={styles.content}>
        <h2 style={styles.title}>The Path Begins</h2>
        <p style={styles.subtitle}>{name}, you have taken the first step.</p>

        <div style={styles.wallet}>
          {isConnected ? (
            <>
              <p className="connected">🜂 {address.slice(0, 6)}...{address.slice(-4)}</p>
              <button style={styles.disconnect} onClick={disconnect}>Disconnect</button>
            </>
          ) : (
            <button style={styles.button} onClick={() => connect()}>Connect Wallet</button>
          )}
        </div>

        {isConnected && (
          <button style={styles.button} onClick={() => navigate('/burn')}>
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
    backgroundImage: 'url("/bg-path.webp")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    overflow: 'hidden',
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
    opacity: 0.85,
    marginBottom: 20,
  },
  wallet: {
    marginBottom: 20,
  },
  button: {
    padding: '10px 24px',
    background: 'transparent',
    color: '#d4af37',
    border: '1px solid #d4af37',
    cursor: 'pointer',
    fontSize: '16px',
    marginBottom: 10,
  },
  disconnect: {
    padding: '8px 20px',
    background: 'transparent',
    border: '1px solid #d4af37',
    color: '#d4af37',
    fontSize: '14px',
    cursor: 'pointer',
  },
};
