export const sendDataRegistro = async (request) => {
    const respuesta = await fetch(
        `${import.meta.env.VITE_API_URL}usuarios/registro`,
        {
            method: "POST",
            body: JSON.stringify(request),
            headers: { "content-type": "application/json" },
        }
    );
    return respuesta.status;
};
