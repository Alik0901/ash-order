import { useEffect, useState } from 'react';

export default function Profile() {
  const [name, setName] = useState('');
  const [fragments, setFragments] = useState([]);
  const [cursedUntil, setCursedUntil] = useState(null);
  const [canEnterShadow, setCanEnterShadow] = useState(false);

  useEffect(() => {
    const savedName = localStorage.getItem('ash_order_name');
    setName(savedName || 'Nameless Wanderer');

    // Пока заглушки:
    setFragments([
      'Ash of Memory',
      'Whisper of Fire',
    ]);

    const curseTime = localStorage.getItem('ash_curse_until');
    if (curseTime && new Date(curseTime) > new Date()) {
      setCursedUntil(new Date(curseTime));
    }

    // В будущем заменим на вызов canEnterShadow()
    setCanEnterShadow(false);
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Your Journey</h1>

      <div style={styles.section}>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Wallet:</strong> Not connected</p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.subtitle}>Fragments Collected</h2>
        {fragments.length === 0 ? (
          <p style={styles.empty}>You have found nothing yet.</p>
        ) : (
          <ul style={styles.list}>
            {fragments.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        )}
      </div>

      <div style={styles.section}>
        <h2 style={styles.subtitle}>Curse</h2>
        {cursedUntil ? (
          <p>You are cursed until {cursedUntil.toLocaleString()}</p>
        ) : (
          <p>You are free.</p>
        )}
      </div>

      <div style={styles.section}>
        <h2 style={styles.subtitle}>Shadow Labyrinth</h2>
        {canEnterShadow ? (
          <p>You may enter the shadow…</p>
        ) : (
          <p>The gate remains closed.</p>
        )}
      </div>

      <div style={styles.section}>
        <h2 style={styles.subtitle}>Global Progress</h2>
        <p className="progress">The fire grows... (unknown percent)</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '40px 20px',
    maxWidth: '600px',
    margin: '0 auto',
    color: '#d4af37',
    fontFamily: 'serif',
  },
  title: {
    fontSize: '28px',
    textAlign: 'center',
    marginBottom: '30px',
  },
  section: {
    marginBottom: '30px',
  },
  subtitle: {
    fontSize: '20px',
    marginBottom: '10px',
  },
  empty: {
    fontStyle: 'italic',
    opacity: 0.6,
  },
  list: {
    listStyle: 'disc',
    paddingLeft: '20px',
  },
};
