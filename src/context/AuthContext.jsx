import { createContext, useContext, useState } from "react";
import certificates from "../data/certificates";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  // future login / admin use
  const [user, setUser] = useState(null);

  // static certificate data
  const [certData] = useState(certificates);

  /* ===============================
     VERIFY CERTIFICATE FUNCTION
  =================================*/
  const verifyCertificate = (id) => {
    if (!id) return null;

    // trim + case insensitive match
    const searchId = id.trim().toLowerCase();

    return certData.find(
      (cert) =>
        cert.serialNumber.toLowerCase() === searchId
    );
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        verifyCertificate,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// custom hook
export const useAuth = () => useContext(AuthContext);
