const Filtros = () => {

    return(
        <div className="inputs-hoteles">
        <div className="contenido-inputs">
            <div className="inputDeLaFecha">
                <i className="fas fa-sign-in-alt tag"></i>
                <input className="input input-fecha" type="date" name="fecha1" id="" />
            </div>

            <div className="inputDeLaFecha">
                <i className="fas fa-sign-in-alt tag"></i>
                <input className="input input-fecha" type="date" name="fecha2" id="" />
            </div>

            <div className="contenedorTagInput">
                <i className="fas fa-globe tag"></i>
                <select className="input input-select " name="paises" id="">
                    <option value="argentina">Argentina</option>
                    <option value="colombia">Colombia</option>
                    <option value="brasil">Brasil</option>
                </select>
            </div>

            <div className="contenedorTagInput">
                <i className="fas fa-dollar-sign tag"></i>
                <select className="input input-select" name="" id="">
                    <option value="Barato">Barato</option>
                    <option value="Caro">Caro</option>
                    <option value="carisimo">Carisimo</option>
                </select>
            </div>

            <div className="contenedorTagInput">
                <i className="fas fa-bed tag"></i>
                <select className="input input-select" name="tamanio" id="">
                    <option value="pequenio">Pequeño</option>
                    <option value="mediano">Mediano</option>
                    <option value="grande">Grande</option>
                </select>
            </div>
        </div>
    </div>
    )

}