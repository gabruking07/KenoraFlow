import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [business, setBusiness] = useState(null);

  const login = (user, token) => {
    localStorage.setItem("token", token);
    setBusiness(user);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setBusiness(null);
  };

  return (
    <AuthContext.Provider
      value={{
        business,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);