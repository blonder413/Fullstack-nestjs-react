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
        setAuth(true);
        localStorage.setItem("recetas_flaites_id", id);
        localStorage.setItem("recetas_flaites_nombre", nombre);
        localStorage.setItem("recetas_flaites_token", token);
    };
    const handleCerrarSesion = () => {
        if (window.confirm("¿Realmente desea cerrar la sesión?")) {
            localStorage.clear();
            setAuth(false);
            window.location = "/";
        }
    };
    return (
        <AuthContext.Provider
            value={{
                auth,
                authId,
                authNombre,
                authToken,
                handleValidaLogin,
                handleIniciarSesion,
                handleCerrarSesion,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
export { AuthProvider };
export default AuthContext;
