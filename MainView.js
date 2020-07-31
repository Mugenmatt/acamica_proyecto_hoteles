const MainView = (props) => {

    const {filteredByCountry, filteredByDolar, filteredByBed, filteredByFrom, filteredByTo} = props

    // Filtro de pais
    const countrySelection = filteredByCountry == '' ? hotelsData : hotelsData.filter(hotel => {
    return hotel.country == props.filteredByCountry
    })

    // Filtro de precio
    const DolarSelection = filteredByDolar == '' ? countrySelection : countrySelection.filter(hotel => {
        return hotel.price == Number(props.filteredByDolar)
        })

    // Filtro de tamaño
    const SizeSelection = filteredByBed == '' ? DolarSelection : DolarSelection.filter(hotel => {

        if(filteredByBed == 'small') {
            return hotel.rooms <= 10
        } else if(filteredByBed == 'medium') {
            return hotel.rooms > 10 && hotel.rooms <= 20
        } else if(filteredByBed == 'large'){
            return hotel.rooms > 20
        } else {
            return hotel.rooms
        }
    })

    //Filtro del input de fecha de salida
    let fechaInputFrom = moment(filteredByFrom).startOf('day').add(1, 'days');
    const fromSelection = filteredByFrom == '' ? SizeSelection : SizeSelection.filter( hotel => {

        let fechaHotel = moment(hotel.availabilityFrom).valueOf(); 
        let fechaInput = moment(fechaInputFrom).valueOf();
        let diferenciaHoraria = moment(fechaHotel).diff(moment(fechaInput), 'days')
        if(diferenciaHoraria <= 0 ) {
            return hotel.availabilityFrom
        }
    })

    //Filtro del input de fecha de salida
    let fechaInputTo = moment(filteredByTo).startOf('day').add(1, 'days');
    const toSelection = filteredByTo == '' ? fromSelection : fromSelection.filter( hotel => {
        let fechaHotel = moment(hotel.availabilityTo).valueOf(); 
        let fechaInput = moment(fechaInputTo).valueOf();;
        let diferenciaHoraria = moment(fechaHotel).diff(moment(fechaInput), 'days')
        if(diferenciaHoraria >= 0 && moment(filteredByFrom) < moment(filteredByTo)) {
            return hotel.availabilityTo
        }
    })


    let hotels = toSelection.map(hotel => {
        return <Hotel key={hotel.slug}
            city={hotel.city} 
            country={hotel.country} 
            description={hotel.description} 
            name={hotel.name}
            photo={hotel.photo} 
            price={hotel.price}
            rooms={hotel.rooms} 
        />;
    })

        return(<div className="allCards">
                    
                    {hotels.length > 0 ? hotels : <div className="divMsg">
                            <h2 className="msgNoHotels">No se encontraron hoteles con esas especificaciones</h2>
                            <h4 className="peroMsg">¡Pero tenemos un chiste!</h4>
                            <div className="divJoke">
                                <blockquote className="jokeMsg">Una mujer va entrando a un Hotel con su amante, y en eso, ve saliendo a su esposo con otra, y ella sin titubear le grita:</blockquote>
                                <blockquote className="jokeMsg">-¡Te agarré desgraciado! ¡Gracias a Dios que traje un testigo!</blockquote>
                            </div>
                        </div>
                    }

            </div>

        )

}