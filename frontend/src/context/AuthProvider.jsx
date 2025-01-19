import { createContext, useState } from "react";

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(
        localStorage.getItem("recetas_flaites_id") != null
    );
    const [authId, setAuthId] = useState("");
    const [authNombre, setAuthNombre] = useState("");
    const [authToken, setAuthToken] = useState("");
    const handleValidaLogin = () => {
        if (!auth && localStorage.getItem("recetas_flaites_id") == null) {
            window.location = "/login";
        }
        setAuth(true);
        setAuthId(localStorage.getItem("recetas_flaites_id"));
        setAuthNombre(localStorage.getItem("recetas_flaites_nombre"));
        setAuthToken(localStorage.getItem("recetas_flaites_token"));
    };
    const handleIniciarSesion = (id, nombre, token) => {
        setAuth(true)
        localStorage.setItem("recetas_flaites_id", id);
        localStorage.setItem("recetas_flaites_nombre", nombre);
        localStorage.setItem("recetas_flaites_token", token);
    };
    return (
        <AuthContext.Provider
            value={{ auth, handleValidaLogin, handleIniciarSesion }}
        >
            {children}
        </AuthContext.Provider>
    );
};
export { AuthProvider };
export default AuthContext;
