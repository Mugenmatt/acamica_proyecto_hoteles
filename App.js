
class App extends React.Component {
    state = {
        pais : '',
        dolar : '',
        camas : '',
        mainViewDesde : '',
        mainViewHasta : '',
    }


    handleChangeCountry = (e) => {
        // this.setState({pais : e.target.value}, () => {console.log(this.state);})
        this.setState({pais : e.target.value})
    }

    handleChangeDolar = (e) => {
        this.setState({dolar : e.target.value})
    }

    handleChangeBed = (e) => {
        this.setState({camas : e.target.value})
    }

    handleHeaderChangeFrom = (e) => {
        let fecha = e.target.value
        // console.log(e.target.name);
            // console.log(fecha);
            this.setState({
                headerDesde : fecha.valueOf(),
                mainViewDesde : fecha.valueOf()});
    }

    handleHeaderChangeTo = (e) => {
        let fecha = e.target.value;
        this.setState({
            headerHasta : fecha.valueOf(),
            mainViewHasta : fecha.valueOf()});
    }

    render() {
        const {pais, dolar, camas, mainViewDesde, mainViewHasta} = this.state
    return (<div>

            <header>

                <Header filteredByFrom={mainViewDesde} filteredByTo={mainViewHasta} />

                <Filtros onChangeCountry={this.handleChangeCountry} onChangeDolar={this.handleChangeDolar} onChangeBed={this.handleChangeBed} onChangeFrom={this.handleHeaderChangeFrom} onChangeTo={this.handleHeaderChangeTo} />
                    
            </header>

            <main className="mainView">

            <MainView filteredByCountry={pais} filteredByDolar={dolar} filteredByBed={camas} filteredByFrom={mainViewDesde} filteredByTo={mainViewHasta} />

            </main>

            </div>

        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))