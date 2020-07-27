
const Hotel = ( { name, photo, description, rooms, city, country, price } ) => {

    const ciudadMasPais = `${city}, ${country}`;

    const cantidadDolar = [1,2,3,4].map((e, idx) => {
        return e <= price ? <i key={e[idx]} className="fas fa-dollar-sign"></i> : <i key={e[idx]} className="fas fa-dollar-sign colorNo"></i>
    })

    return(
        <div className="card">
            <img className="hotelImage" src={photo} alt="Imagen del hotel" />
            <div className="info">
                <h1 className="hotelTitle">{name}</h1>
                <p className="hotelDescription">{description}</p>
                <div className="placeBedPrice">
                    <div className="countryBg">
                        <div className="tagBox">
                            <i className="fas fa-map-marker tagMain"></i>
                        </div>
                            <p className="country">{ciudadMasPais}</p>
                    </div>
                    <div className="bedAndPrice">
                        <div className="bedsBg">
                            <div className="tagBox">
                                <i className="fas fa-bed tagMain"></i>
                            </div>
                            <p className="beds">{rooms}</p>
                        </div>
                        <div className="bgPrecio">
                            <div className="tagBox">{cantidadDolar}</div>
                        </div>
                    </div>
                </div>
            </div>
            <input className="reservationBtn" type="submit" value="Reservar" name="reserva" />
        </div>
    )
}