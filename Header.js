

const Header = ({}) => {

    return(
        <div className="contenidoHeader">
            <div className="titulo-fecha">
                <h1 className="header-titulo">Hoteles</h1>
                <h4 className="info-header">
                    {
                    `Desde el 
                        ${moment().calendar()} 
                    hasta 
                        ${moment().calendar()}`
                    }
                </h4>
            </div>
        </div>
    )
}