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
            "Authorization": `Bearer ${localStorage.getItem("recetas_flaites_token")}`
        },
    });
    await respuesta.json();
};
