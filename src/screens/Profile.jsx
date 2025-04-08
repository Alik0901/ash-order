import { useEffect, useState } from 'react';

export default function Profile() {
  const [name, setName] = useState('');
  const [fragments, setFragments] = useState([]);
  const [cursedUntil, setCursedUntil] = useState(null);
  const [canEnterShadow, setCanEnterShadow] = useState(false);

  useEffect(() => {
    const savedName = localStorage.getItem('ash_order_name');
    setName(savedName || 'Nameless Wanderer');

    // Заглушки
    setFragments([
      'Ash of Memory',
      'Whisper of Fire',
    ]);

    const curseTime = localStorage.getItem('ash_curse_until');
    if (curseTime && new Date(curseTime) > new Date()) {
      setCursedUntil(new Date(curseTime));
    }

    setCanEnterShadow(false);
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.overlay} />
      <img src="/ledger_bg.webp" alt="Ash Ledger" style={styles.background} />

      <div style={styles.content}>
        <h1 style={styles.title}>Ash Ledger</h1>
        <p style={styles.subtitle}>"What you’ve lost shall guide you."</p>

        <div style={styles.section}>
          <p><strong>Name:</strong> {name}</p>
        </div>

        <div style={styles.section}>
          <h2 style={styles.heading}>Fragments</h2>
          {fragments.length === 0 ? (
            <p style={styles.empty}>No fragments have found you yet.</p>
          ) : (
            <ul style={styles.list}>
              {fragments.map((f, i) => (
                <li key={i} style={styles.fragment}>✦ {f}</li>
              ))}
            </ul>
          )}
        </div>

        <div style={styles.section}>
          <h2 style={styles.heading}>Curse</h2>
          {cursedUntil ? (
            <p className="cursed">☠️ You are cursed until {cursedUntil.toLocaleString()}</p>
          ) : (
            <p>You are free… for now.</p>
          )}
        </div>

        <div style={styles.section}>
          <h2 style={styles.heading}>Shadow Gate</h2>
          {canEnterShadow ? (
            <p className="gate">A whisper calls…</p>
          ) : (
            <p>The gate remains sealed by unseen forces.</p>
          )}
        </div>

        <div style={styles.section}>
          <h2 style={styles.heading}>World Progress</h2>
          <div style={styles.progressBar}>
            <div style={{ ...styles.progressFill, width: '5%' }} /> {/* Заглушка */}
          </div>
          <p style={styles.progressLabel}>The fire grows…</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    position: 'relative',
    height: '100vh',
    overflow: 'hidden',
    fontFamily: 'serif',
    color: '#d4af37',
  },
  overlay: {
    position: 'absolute',
    inset: 0,
    backgroundColor: 'rgba(0,0,0,0.65)',
    zIndex: 1,
  },
  background: {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    opacity: 0.35,
    zIndex: 0,
  },
  content: {
    position: 'relative',
    zIndex: 2,
    padding: '40px 20px',
    maxWidth: '600px',
    margin: '0 auto',
    textAlign: 'center',
  },
  title: {
    fontSize: '36px',
    letterSpacing: '2px',
    marginBottom: '10px',
  },
  subtitle: {
    fontStyle: 'italic',
    marginBottom: '30px',
    opacity: 0.7,
  },
  section: {
    marginBottom: '25px',
  },
  heading: {
    fontSize: '20px',
    marginBottom: '10px',
    borderBottom: '1px solid #d4af37',
    paddingBottom: '4px',
  },
  list: {
    listStyle: 'none',
    padding: 0,
  },
  fragment: {
    padding: '5px 0',
    fontSize: '16px',
    letterSpacing: '1px',
  },
  empty: {
    fontStyle: 'italic',
    opacity: 0.6,
  },
  progressBar: {
    width: '100%',
    height: '10px',
    background: '#555',
    borderRadius: '5px',
    overflow: 'hidden',
    margin: '10px 0',
  },
  progressFill: {
    height: '100%',
    background: '#d4af37',
    transition: 'width 1s ease',
  },
  progressLabel: {
    fontSize: '14px',
    opacity: 0.6,
  },
};
