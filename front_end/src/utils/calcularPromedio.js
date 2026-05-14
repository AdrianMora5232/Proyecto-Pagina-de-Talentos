export const calcularPromedio = (resenas) => {
    if (!resenas || resenas.length === 0) return 0;
    const suma = resenas.reduce((acc, r) => acc + r.rating, 0);
    return (suma / resenas.length).toFixed(1);
};
