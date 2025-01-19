import axios from "axios";

export const getRecetas = async () => {
    const datos = axios
        .get(`${import.meta.env.VITE_API_URL}recetas`, {
            headers: { "content-type": "application/json" },
        })
        .then((response) => {
            if (response.status == 200) {
                return response.data;
            }
            console.log("Falló");
        })
        .catch((err) => {
            console.log(`Falló: ${err}`);
        });
    return datos;
};

export const getReceta = async (id) => {
    const dato = axios
        .get(`${import.meta.env.VITE_API_URL}recetas/${id}`, {
            headers: { "content-type": "application/json" },
        })
        .then((response) => {
            if (response.status == 200) {
                return response.data;
            }
            console.log("Falló");
        })
        .catch((err) => {
            console.log(`Falló: ${err}`);
        });
    return dato;
};

export const getRecetasBuscador = async (categoria_id, search) => {
    const datos = axios
        .get(
            `${
                import.meta.env.VITE_API_URL
            }recetas/buscador?categoria_id=${categoria_id}&search=${search}`,
            {
                headers: { "content-type": "application/json" },
            }
        )
        .then((response) => {
            if (response.status == 200) {
                return response.data;
            }
            console.log("Falló");
        })
        .catch((err) => {
            console.log(`Falló: ${err}`);
        });
    return datos;
};

export const getCategorias = async () => {
    const dato = axios
        .get(`${import.meta.env.VITE_API_URL}categorias`, {
            headers: { "content-type": "application/json" },
        })
        .then((response) => {
            if (response.status == 200) {
                return response.data;
            }
            console.log("Falló");
        })
        .catch((err) => {
            console.log(`Falló: ${err}`);
        });
    return dato;
};
