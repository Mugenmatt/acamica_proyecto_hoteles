
const Filtros = (props) => {

        const { onChangeCountry, onChangeDolar, onChangeBed, onChangeFrom, onChangeTo } = props

        return(
            <div className="inputsHotels">
            <div className="inputsContent">
                <div className="inputOfDate inputDiv">
                    <i className="fas fa-sign-in-alt tag" ></i>
                    <input className="input dateInput" type="date" onChange={onChangeFrom} />
                </div>

                <div className="inputOfDate inputDiv">
                    <i className="fas fa-sign-in-alt tag"></i>
                    <input className="input dateInput" type="date" onChange={onChangeTo} />
                </div>

                <div className="tagInputContent inputDiv">
                    <i className="fas fa-globe tag"></i>
                    <select className="input inputSelect mundo" onChange={onChangeCountry} >
                        <option value="">Todos los Paises</option>
                        <option value="Argentina">Argentina</option>
                        <option value="Chile">Chile</option>
                        <option value="Brasil">Brasil</option>
                        <option value="Uruguay">Uruguay</option>
                    </select>
                </div>

                <div className="tagInputContent inputDiv">
                    <i className="fas fa-dollar-sign tag dolar"></i>
                    <select className="input inputSelect" onChange={onChangeDolar} >
                        <option value="">Cualquier Precio</option>
                        <option value="1">$</option>
                        <option value="2">$$</option>
                        <option value="3">$$$</option>
                        <option value="4">$$$$</option>
                    </select>
                </div>

                <div className="tagInputContent">
                    <i className="fas fa-bed tag"></i>
                    <select className="input inputSelect cama" onChange={onChangeBed} >
                        <option value="">Cualquier Tamaño</option>
                        <option value="small">Hotel Pequeño</option>
                        <option value="medium">Hotel Mediano</option>
                        <option value="large">Hotel Grande</option>
                    </select>
                </div>
            </div>
        </div>
        )

}