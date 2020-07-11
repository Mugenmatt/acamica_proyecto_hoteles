// import React from "react";
// import "./styles.css";
// import Contador from './components/Contador' ;

class App extends React.Component {
    render() {
        return (
            <div className="App">
                
{/* -------------------------- MENU -------------------------- */}
                
                <header>
                    <div className="titulo-fecha">
                        <h1>Hoteles</h1>
                        <h4>desde el martes, 1 de enero de 2019 hasta el miercoles, 2 de enero de 2019</h4>
                    </div>

                    <div className="inputs-hoteles">

                    <input type="date" name="fecha1" id="" />
                    <input type="date" name="fecha2" id="" />
                    <select name="paises" id="">
                        <option value="argentina">Argentina</option>
                        <option value="colombia">Colombia</option>
                        <option value="brasil">Brasil</option>
                    </select>

                    <select name="" id="">
                        <option value="Barato">Barato</option>
                        <option value="Caro">Caro</option>
                        <option value="carisimo">Carisimo</option>
                    </select>

                    <select name="tamanio" id="">
                        <option value="pequenio">Pequeño</option>
                        <option value="mediano">Mediano</option>
                        <option value="grande">Grande</option>
                    </select>
                    
                    </div>
                </header>

{/* -------------------------- MAINVIEW -------------------------- */}

                <div className="mainView">
                    <div className="todasLasTarjetas">
                        <div className="tarjeta">
                            <div className="imagen-hotel">
                                <img src="./images/la-bamba-de-areco.jpg" alt="Nombre del hotel" />
                            </div>
                            <div className="info">
                                <h1 className="titulo-hotel">La Bamba de Areco</h1>
                                <p className="descripcion-hotel">La Bamba de Areco está ubicada en San Antonio de Areco, en el corazón de la pampa. Es una de las estancias m'as antiguas de la Argentina, recientemente restaurada para ofrecer a sus huespedes todo el confort y esplendor colonial.</p>
                                <div className="lugar-hab-precio">
                                    <p className="">Buenos Aires, Argentina</p>
                                    <div className="habitaciones-precio">
                                        <p className="habitaciones">11 Habitaciones</p>
                                        <p className="precio">$$$$</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))