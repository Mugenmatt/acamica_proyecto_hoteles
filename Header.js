

const Header = (props) => {

    const { filteredByFrom ,filteredByTo } = props

    const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']

    const months = ['Enero','Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

    let chosenDayFrom = days.find(dia => {
        if(days.indexOf((dia)) == moment(filteredByFrom).format('d')){
            return dia
        }
    })

    let chosenDayTo = days.find(dia => {
        if(days.indexOf((dia)) == moment(filteredByTo).format('d')){
            return dia
        }
    })

    let chosenMonthFrom = months.find(mes => {
        if((months.indexOf(mes) + 1) == moment(filteredByFrom).format('M')){
            return mes
        }
    })

    let chosenMonthTo = months.find(mes => {
        if((months.indexOf(mes) + 1) == moment(filteredByTo).format('M')){
            return mes
        }
    })


    if(filteredByFrom == '' && filteredByFrom == ''){
        return <div className="headerContent">
                    <div className="dateTitle">
                        <h1 className="headerTitle">Hoteles</h1>
                        <h4 className="noHotels">Establezca fecha de entrada y salida</h4>
                    </div>
                </div>
            } else {
        return(
            <div className="headerContent">
                <div className="dateTitle">
                    <h1 className="headerTitle">Hoteles</h1>
                    <h4 className="infoHeader">
                    
                        <span className="notBoldDate">Desde el</span>
                            {<span className="boldDate">{`${chosenDayFrom},
                            ${moment(filteredByFrom).format('D')}
                            de
                            ${chosenMonthFrom}
                            de
                            ${moment(filteredByFrom).format('YYYY')}`}</span>}

                    {filteredByTo !== '' ?
                        <React.Fragment>
                        <span className="notBoldDate">hasta el</span>
                            <span className="boldDate">{`${chosenDayTo},
                            ${moment(filteredByTo).format('D')}
                            de
                            ${chosenMonthTo}
                            de
                            ${moment(filteredByTo).format('YYYY')}`}</span>
                        </React.Fragment> : <span className="notBoldDate">establezca fecha de salida</span>}
                    </h4>
                </div>
            </div>
        )
    }
}