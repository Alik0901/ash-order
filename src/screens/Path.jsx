import { useUser } from "../UserContext";

export default function Path() {
  const { username } = useUser();

  // Пока нет смарт-контракта — вставим заглушки
  const level = "Жертва";
  const burned = 3;
  const fragments = 2;

  return (
    <div style={styles.container}>
      <h2>Да будет Путь, {username || "Безымянный"}</h2>
      <p>Текущий круг: <strong>{level}</strong></p>

      <div style={styles.stats}>
        <div>Сожжено: {burned} 🔥</div>
        <div>Фрагменты: {fragments} / 7 🜃</div>
      </div>

      <div style={styles.buttons}>
        <button>СЖЕЧЬ</button>
        <button>ПОЛУЧИТЬ ФРАГМЕНТ</button>
        <button>ПРОСМОТР ПУТИ</button>
      </div>
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
    gap: "16px",
    textAlign: "center",
  },
  stats: {
    fontSize: "16px",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  buttons: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
};
