const MainView = (props) => {

    const {filtradoPais, filtradoDolar, filtradoCamas} = props

    const funcionPais = filtradoPais == '' ? hotelsData : hotelsData.filter(hotel => {
    return hotel.country == props.filtradoPais
    })
    // console.log(funcionPais);
    // console.log(props.filtradoPais == '');


    const funcionDolar = filtradoDolar == '' ? funcionPais : funcionPais.filter(hotel => {
        return hotel.price == Number(props.filtradoDolar)
        })
        // console.log(props.funcionDolar == 1);
        // console.log(typeof props.filtradoDolar );


    const funcionCamas = filtradoCamas == '' ? funcionDolar : funcionDolar.filter(hotel => {

        if(filtradoCamas == 'pequenio') {
            return hotel.rooms <= 10
        } else if(filtradoCamas == 'mediano') {
            return hotel.rooms > 10 && hotel.rooms <= 20
        } else {
            return hotel.rooms > 20
        }
    })

        return(
            
            <div className="todasLasTarjetas">
                <React.Fragment>
                
                {funcionCamas.map(hotel => {
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
                    
                    
                </React.Fragment>
                
            </div>

        )

}