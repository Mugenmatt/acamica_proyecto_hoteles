
const Filtros = (props) => {

// PARA TENER EN CUENTA
//   handleIncrement = () => {
//     this.setState(prevState => {
//         console.log(prevState.target.value);
//         return { count: prevState.count + 1 };
//     });
//   };

// ARREGLAR FECHA 
// const dateFrom = new Date(e.target.value + "T00:00");

        const {onChangeDesde, onChangePais, onChangeDolar, onChangeCamas} = props

        const semana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

        return(
            <div className="inputs-hoteles">
            <div className="contenido-inputs">
                <div className="inputDeLaFecha">
                    <i className="fas fa-sign-in-alt tag flecha"></i>
                    <input className="input input-fecha" type="date" name="desde" id="desde" onChange={onChangeDesde} />
                </div>

                <div className="inputDeLaFecha">
                    <i className="fas fa-sign-in-alt tag flecha"></i>
                    <input className="input input-fecha" type="date" name="hasta" id="hasta"  />
                </div>

                <div className="contenedorTagInput">
                    <i className="fas fa-globe tag"></i>
                    <select className="input input-select mundo" name="paises" id="" onChange={onChangePais} >
                        <option value="">Todos los Paises</option>
                        <option value="Argentina">Argentina</option>
                        <option value="Chile">Chile</option>
                        <option value="Brasil">Brasil</option>
                        <option value="Uruguay">Uruguay</option>
                    </select>
                </div>

                <div className="contenedorTagInput">
                    <i className="fas fa-dollar-sign tag dolar"></i>
                    <select className="input input-select" name="" id="" onChange={onChangeDolar} >
                        <option value="">Cualquier Precio</option>
                        <option value="1">$</option>
                        <option value="2">$$</option>
                        <option value="3">$$$</option>
                        <option value="4">$$$$</option>
                    </select>
                </div>

                <div className="contenedorTagInput">
                    <i className="fas fa-bed tag"></i>
                    <select className="input input-select cama" name="tamanio" id="" onChange={onChangeCamas} >
                        <option value="">Cualquier Tamaño</option>
                        <option value="pequenio">Hotel Pequeño</option>
                        <option value="mediano">Hotel Mediano</option>
                        <option value="grande">Hotel Grande</option>
                    </select>
                </div>
            </div>
        </div>
        )

}