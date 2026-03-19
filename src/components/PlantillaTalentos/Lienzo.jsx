function Lienzo({tituloProyecto,subtituloProyecto,childrenEstructura}) {
    return (
        <>
            <h1>{tituloProyecto}</h1>


            <p>{subtituloProyecto}</p>


            <div>
                {childrenEstructura}
            </div>
        </>
    )
}

export default Lienzo;