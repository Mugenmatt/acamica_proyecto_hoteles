// import React from "react";
// import "./styles.css";
// import Contador from './components/Contador' ;

class App extends React.Component {
    render() {
        return (
        
        <React.Fragment>

        <header>

            <Header />

            <Filtros />
                
        </header>

        <main className="mainView">
            
            <MainView />

        </main>
        </React.Fragment>

        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))