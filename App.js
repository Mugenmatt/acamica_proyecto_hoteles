// import React from "react";
// import "./styles.css";
// import Contador from './components/Contador' ;

class App extends React.Component {
    render() {
        return (
            <div className="App">
                
{/* -------------------------- MENU -------------------------- */}
                
                <header>

                    <div className="contenidoHeader">
                        <div className="titulo-fecha">
                            <h1 className="header-titulo">Hoteles</h1>
                            <h4 className="info-header">desde el martes, 1 de enero de 2019 hasta el miercoles, 2 de enero de 2019</h4>
                        </div>

                        <div className="inputs-hoteles">
                            <div className="contenido-inputs">
                                <div className="inputDeLaFecha">
                                    <i className="fas fa-sign-in-alt tag"></i>
                                    <input className="input input-fecha" type="date" name="fecha1" id="" />
                                </div>

                                <div className="inputDeLaFecha">
                                    <i className="fas fa-sign-in-alt tag"></i>
                                    <input className="input input-fecha" type="date" name="fecha2" id="" />
                                </div>

                                <div className="contenedorTagInput">
                                    <i className="fas fa-globe tag"></i>
                                    <select className="input input-select " name="paises" id="">
                                        <option value="argentina">Argentina</option>
                                        <option value="colombia">Colombia</option>
                                        <option value="brasil">Brasil</option>
                                    </select>
                                </div>

                                <div className="contenedorTagInput">
                                    <i className="fas fa-dollar-sign tag"></i>
                                    <select className="input input-select" name="" id="">
                                        <option value="Barato">Barato</option>
                                        <option value="Caro">Caro</option>
                                        <option value="carisimo">Carisimo</option>
                                    </select>
                                </div>

                                <div className="contenedorTagInput">
                                    <i className="fas fa-bed tag"></i>
                                    <select className="input input-select" name="tamanio" id="">
                                        <option value="pequenio">Pequeño</option>
                                        <option value="mediano">Mediano</option>
                                        <option value="grande">Grande</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

{/* -------------------------- MAINVIEW -------------------------- */}

                <main className="mainView">
                    <div className="todasLasTarjetas">

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

                    </div>
                </main>


            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))