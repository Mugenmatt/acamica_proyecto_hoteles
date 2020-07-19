
const Hotel = ( { name, photo, description, rooms, city, country, price } ) => {

    const ciudadMasPais = `${city}, ${country}`;

    const cantidadDolar = [1,2,3,4].map((e, idx) => {
        return e <= price ? <i key={e[idx]} className="fas fa-dollar-sign"></i> : <i key={e[idx]} className="fas fa-dollar-sign colorNo"></i>
    })

    return(
        <div className="tarjeta">
            <img className="imagenHotel" src={photo} alt="Imagen del hotel" />
            <div className="info">
                <h1 className="titulo-hotel">{name}</h1>
                <p className="descripcion-hotel">{description}</p>
                <div className="lugar-hab-precio">
                    <div className="bg-pais">
                        <div className="tagCaja">
                            <i className="fas fa-map-marker tagMain"></i>
                        </div>
                            <p className="pais">{ciudadMasPais}</p>
                    </div>
                    <div className="habitaciones-precio">
                        <div className="bg-habitaciones">
                            <div className="tagCaja">
                                <i className="fas fa-bed tagMain"></i>
                            </div>
                            <p className="habitaciones">{rooms}</p>
                        </div>
                        <div className="bg-precio">
                            <div className="tagCaja">{cantidadDolar}</div>
                        </div>
                    </div>
                </div>
            </div>
            <input className="btn-reserva" type="submit" value="Reservar" name="reserva" />
        </div>
    )
}