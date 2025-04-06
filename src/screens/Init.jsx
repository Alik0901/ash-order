import { useNavigate } from "react-router-dom";
import { useUser } from "../UserContext";

export default function Init() {
  const navigate = useNavigate();
  const { username, setUsername } = useUser();

  const handleSave = () => {
    if (username.trim()) {
      navigate("/path"); // или любой следующий экран
    }
  };

  return (
    <div style={styles.container}>
      <h2>Назови себя</h2>
      <p>(имя будет выгравировано в Пепле)</p>
      <input
        placeholder="Имя"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={styles.input}
      />
      <button style={styles.button} onClick={handleSave}>
        Принести Искру
      </button>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    background: "#0c0c0c",
    color: "#d4af37",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "serif",
    textAlign: "center",
    gap: "10px",
  },
  input: {
    padding: "10px",
    width: "70%",
    fontSize: "16px",
    backgroundColor: "#1a1a1a",
    color: "#fff",
    border: "1px solid #d4af37",
  },
  button: {
    padding: "10px 20px",
    fontSize: 16,
    backgroundColor: "transparent",
    border: "1px solid #d4af37",
    color: "#d4af37",
    cursor: "pointer",
  },
};
