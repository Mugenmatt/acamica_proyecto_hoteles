
const Hotel = () => {
    return(
        <div className="tarjeta">
            <img className="imagenHotel" src="./images/la-bamba-de-areco.jpg" alt="Nombre del hotel" />
            <div className="info">
                <h1 className="titulo-hotel">La Bamba de Areco</h1>
                <p className="descripcion-hotel">La Bamba de Areco está ubicada en San Antonio de Areco, en el corazón de la pampa. Es una de las estancias m'as antiguas de la Argentina, recientemente restaurada para ofrecer a sus huespedes todo el confort y esplendor colonial.</p>
                <div className="lugar-hab-precio">
                    <div className="bg-pais">
                        <div className="tagCaja">
                            <i className="fas fa-map-marker tagMain"></i>
                        </div>
                        <p className="pais">Buenos Aires, Argentina</p>
                    </div>
                    <div className="habitaciones-precio">
                        <div className="bg-habitaciones">
                            <div className="tagCaja">
                                <i className="fas fa-bed tagMain"></i>
                            </div>
                            <p className="habitaciones">11 Habitaciones</p>
                        </div>
                        <div className="bg-precio">
                            <div className="tagCaja">
                                <i className="fas fa-dollar-sign tagMain"></i>
                                <i className="fas fa-dollar-sign tagMain"></i>
                                <i className="fas fa-dollar-sign tagMain"></i>
                                <i className="fas fa-dollar-sign tagMain"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <input className="btn-reserva" type="submit" value="Reservar" name="reserva" id="" />
        </div>
    )
}