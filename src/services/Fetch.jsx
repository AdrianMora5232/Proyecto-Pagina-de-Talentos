async function postData(obj, endpoint) {
    const res = await fetch(`http://localhost:3001/${endpoint}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(obj)
    });

    return await res.json();
}

async function getData(endpoint) {
    try {
        const peticion = await fetch(`http://localhost:3001/${endpoint}`)
        const data = await peticion.json()
        return data
    } catch (error) {
        console.error(error);
    }
}

async function patchData(endpoint, obj, id) {
    try {
        const peticion = await fetch(`http://localhost:3001/${endpoint}/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        })
        const data = await peticion.json()
        return data
    } catch (error) {
        console.error(error);
    }
}

async function deleteData(endpoint, id) {
    try {
        const peticion = await fetch(`http://localhost:3001/${endpoint}/${id}`, {
            method: "DELETE",
        });

        if (!peticion.ok) {
            throw new Error(`Error al eliminar: ${peticion.statusText}`);
        }

        return true;
    } catch (error) {
        console.error("Error al eliminar:", error);
        return false;
    }
}

export default { postData, getData, patchData, deleteData }
