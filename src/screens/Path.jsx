import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';

export default function Path() {
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const { address, isConnected } = useAccount();

  const { connect } = useConnect({
    connector: new InjectedConnector(),
    onError(error) {
      console.error('Connection error:', error);
      setError('❌ Failed to connect wallet. Make sure MetaMask is installed.');
    },
  });

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
              <p style={styles.address}>🜂 {address.slice(0, 6)}...{address.slice(-4)}</p>
              <button style={styles.disconnect} onClick={disconnect}>Disconnect</button>
            </>
          ) : (
            <button style={styles.button} onClick={() => connect()}>Connect Wallet</button>
          )}
        </div>

        {error && <p style={styles.error}>{error}</p>}

        {isConnected && (
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
  wallet: {
    marginBottom: 20,
  },
  address: {
    fontSize: '15px',
    marginBottom: 10,
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
  burn: {
    padding: '10px 24px',
    background: '#d4af37',
    color: '#000',
    border: 'none',
    fontSize: '16px',
    cursor: 'pointer',
    marginTop: '10px',
  },
  error: {
    color: 'orangered',
    fontSize: '14px',
    marginTop: 10,
  },
};
