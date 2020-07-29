const MainView = (props) => {

    const {filteredByCountry, filteredByDolar, filteredByBed, filteredByFrom, filteredByTo} = props

    const countrySelection = filteredByCountry == '' ? hotelsData : hotelsData.filter(hotel => {
    return hotel.country == props.filteredByCountry
    })

    const DolarSelection = filteredByDolar == '' ? countrySelection : countrySelection.filter(hotel => {
        return hotel.price == Number(props.filteredByDolar)
        })

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

    let fechaInputFrom = moment(filteredByFrom); // Devuelve lo que viene del input "desde" como objeto moment
        // Lo que sigue se fija si lo que viene del input es igual a 0 (que esta en el state de App) sino filtra lo que venia de todos los filtros anteriores
    const fromSelection = fechaInputFrom.valueOf() == 0 ? SizeSelection : SizeSelection.filter( hotel => {

        return hotel.availabilityFrom >= today.valueOf() //Devuelve todos los hoteles que sean mayor o igual a los milisegundos de este momento.
        
    })

    let hotels = fromSelection.map(hotel => {
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