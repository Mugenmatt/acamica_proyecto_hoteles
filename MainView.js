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

    // ================ ACA ESTA EL PROBLEMA :( ====================
    let fechaInputFrom = moment(filteredByFrom); 
    const fromSelection = fechaInputFrom.valueOf() == 0 ? SizeSelection : SizeSelection.filter( hotel => {

        let fecha1 = new Date(hotel.availabilityFrom); // Objeto con todo de la fecha del hotel recorrido
        let fecha2 = new Date(filteredByFrom); // Objeto con todo de la fecha de lo que se puso en el INPUT
        fecha1.setHours(0,0,0,0); // HH, MM, ss y ms a 0
        fecha2.setHours(0,0,0,0); 

        if(fecha1.getTime() >= fecha2.getTime()) {
            // console.log(fecha1.getTime());
            // console.log(fecha2.getTime());
            // console.log(fecha1.getTime() >= fecha2.getTime());
            return hotel.availabilityFrom
        } else if(fecha2 == ' ') {
            return SizeSelection
        }
        return hotel[0]
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