
class App extends React.Component {
    state = {
        pais : '',
        dolar : '',
        camas : '',
        desde : '',
        hasta : '',
        // showMe : false,
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

    handleChangeFrom = (e) => {
        // console.log(e.target.value);
        let fecha = e.target.value;
        this.setState({desde : fecha.valueOf()});
    }

    handleChangeTo = (e) => {
        // console.log(e.target.value);
        let fecha = e.target.value;
        this.setState({hasta : fecha.valueOf()});
    }

    render() {
        const {pais, dolar, camas, desde, hasta} = this.state
    return (<div>

            <header>

                <Header filteredByFrom={desde} filteredByTo={hasta} />

                <Filtros onChangeCountry={this.handleChangeCountry} onChangeDolar={this.handleChangeDolar} onChangeBed={this.handleChangeBed} onChangeFrom={this.handleChangeFrom} onChangeTo={this.handleChangeTo} />
                    
            </header>

            <main className="mainView">

            <MainView filteredByCountry={pais} filteredByDolar={dolar} filteredByBed={camas} filteredByFrom={desde} filteredByTo={hasta} />

            </main>

            </div>

        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))