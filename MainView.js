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
        } else {
            return hotel.rooms > 20
        }
    })

    const fromSelection = filteredByFrom == '' ? SizeSelection : SizeSelection.filter(hotel => {

        let hotelDateMilisecondsFrom = moment(hotel.availabilityFrom);

        let requestedDateMilisecondsFrom = moment(props.filteredByFrom)

        if( hotelDateMilisecondsFrom >= requestedDateMilisecondsFrom ) {
            return hotel.availabilityFrom;
        }

    })

    const toSelection = filteredByTo == '' ? fromSelection : fromSelection.filter(hotel => {

        let hotelDateMilisecondsTo = moment(hotel.availabilityTo);

        let requestedDateMilisecondsTo = moment(props.filteredByTo)

        if( hotelDateMilisecondsTo >= requestedDateMilisecondsTo ) {
            return hotel.availabilityTo;
        }

    })

        return(<div className="allCards">
                
                {toSelection.map(hotel => {
                    return <Hotel 
                        city={hotel.city} 
                        country={hotel.country} 
                        description={hotel.description} 
                        name={hotel.name}
                        photo={hotel.photo} 
                        price={hotel.price}
                        rooms={hotel.rooms} 
                        key={hotel.slug}
                    />;
                })}
                
            </div>

        )

}