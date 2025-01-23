export const guardarReceta = async (
    tiempo,
    categoriaId,
    descripcion,
    nombre
) => {
    const file = document.querySelector("input[type=file]").files[0];
    const formData = new FormData();
    formData.append("categoria_id", categoriaId);
    formData.append("nombre", nombre);
    formData.append("tiempo", tiempo);
    formData.append("descripcion", descripcion);
    formData.append("usuario_id", localStorage.getItem("recetas_flaites_id"));
    formData.append("file", file);

    const respuesta = await fetch(`${import.meta.env.VITE_API_URL}recetas`, {
        method: "POST",
        body: formData,
        headers: {
            Authorization: `Bearer ${localStorage.getItem(
                "recetas_flaites_token"
            )}`,
        },
    });
    await respuesta.json();
};

export const editarReceta = async (receta, id) => {
    const respuesta = await fetch(
        `${import.meta.env.VITE_API_URL}recetas/${id}`,
        {
            method: "PUT",
            body: JSON.stringify(receta),
            headers: {
                Authorization: `Bearer ${localStorage.getItem(
                    "recetas_flaites_token"
                )}`,
                "content-type": "application/json",
            },
        }
    );
    await respuesta.json();
};

export const editarFoto = async (id) => {
    const file = document.querySelector("input[type=file]").files[0];

    const formData = new FormData();
    formData.append("file", file);
    formData.append("id", id);
    const respuesta = await fetch(
        `${import.meta.env.VITE_API_URL}recetas/update-foto`,
        {
            method: "POST",
            body: formData,
            headers: {
                Authorization: `Bearer ${localStorage.getItem(
                    "recetas_flaites_token"
                )}`,
            },
        }
    );

    return respuesta.status;
};
