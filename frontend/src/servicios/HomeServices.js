export const getDatosHome = async () => {
    const respuesta = await fetch(
        `${import.meta.env.VITE_API_URL}recetas/ultimos`,
        {
            headers: { "content-type": "application/json" },
        }
    );
    return await respuesta.json();
};
