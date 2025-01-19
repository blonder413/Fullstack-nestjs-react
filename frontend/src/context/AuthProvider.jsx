import { createContext, useState } from "react";

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState();
    const handleValidaLogin = () => {};
    return (
        <AuthContext.Provider
            value={{ auth, handleValidaLogin }}
        ></AuthContext.Provider>
    );
};
export { AuthProvider };
export default AuthContext;
