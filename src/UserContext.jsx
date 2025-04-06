import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [username, setUsername] = useState("");

  // Загружаем имя из localStorage при старте
  useEffect(() => {
    const savedName = localStorage.getItem("ash-order-username");
    if (savedName) {
      setUsername(savedName);
    }
  }, []);

  // Сохраняем имя при изменении
  useEffect(() => {
    if (username) {
      localStorage.setItem("ash-order-username", username);
    }
  }, [username]);

  return (
    <UserContext.Provider value={{ username, setUsername }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
