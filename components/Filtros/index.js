class Filtros extends React.Component {

    

    componentDidMount() {
        console.log("Se monto");
    }
    
    componentDidUpdate() {
        console.log("Se actualizo");
    }
    componentWillUnmount() {
        console.log("Se va a desmontar");
    }

    render() {

        const semana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

        return(
            <div className="inputs-hoteles">
            <div className="contenido-inputs">
                <div className="inputDeLaFecha">
                    <i className="fas fa-sign-in-alt tag flecha"></i>
                    <input className="input input-fecha" type="date" name="desde" id="desde" />
                </div>

                <div className="inputDeLaFecha">
                    <i className="fas fa-sign-in-alt tag flecha"></i>
                    <input className="input input-fecha" type="date" name="hasta" id="hasta" />
                </div>

                <div className="contenedorTagInput">
                    <i className="fas fa-globe tag"></i>
                    <select className="input input-select mundo" name="paises" id="">
                        <option value="argentina">Argentina</option>
                        <option value="colombia">Colombia</option>
                        <option value="brasil">Brasil</option>
                    </select>
                </div>

                <div className="contenedorTagInput">
                    <i className="fas fa-dollar-sign tag dolar"></i>
                    <select className="input input-select" name="" id="">
                        <option value="1">$</option>
                        <option value="2">$$</option>
                        <option value="3">$$$</option>
                        <option value="4">$$$$</option>
                    </select>
                </div>

                <div className="contenedorTagInput">
                    <i className="fas fa-bed tag"></i>
                    <select className="input input-select cama" name="tamanio" id="">
                        <option value="pequenio">Hotel Pequeño</option>
                        <option value="mediano">Hotel Mediano</option>
                        <option value="grande">Hotel Grande</option>
                    </select>
                </div>
            </div>
        </div>
        )
    }

}
