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
