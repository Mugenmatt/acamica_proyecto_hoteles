
class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            desde : '',
            hasta : '',
            pais : '',
            dolar : '',
            camas : '',
            }
    }

    componentDidMount() {
        console.log('SE MONTÓ');

        // let momentJs = moment();

        // console.log(moment().subtract(10, 'days').calendar()) // 07/07/2020
        // console.log(moment().format('dddd')); // DIA
        // console.log(moment().format("MMM Do YY")); //MES FECHA AÑO
        // console.log(moment().calendar()); //HOY A LAS hora PM/AM
    }

    handleChangeDesde = (e) => {
        // console.log(typeof e.target.value);
        this.setState({desde : e.target.value});
    }

    handleChangePais = (e) => {
        // console.log(e.target.value);
        this.setState({pais : e.target.value}, () => {console.log(this.state);})
    }

    handleChangeDolar = (e) => {
        // console.log(e.target.value);
        this.setState({dolar : e.target.value}, () => {console.log(typeof this.state.dolar);})
    }

    handleChangeCamas = (e) => {
        console.log(e.target.value);
        // this.setState({camas : e.target.value}, () => {console.log(typeof this.state.dolar);})
        this.setState({camas : e.target.value})
    }

    render() {
        const {pais, dolar, camas} = this.state
        return (
        
            <React.Fragment>

            <header>

                <Header  />

                <Filtros onChangeDesde={this.handleChangeDesde} onChangePais={this.handleChangePais} onChangeDolar={this.handleChangeDolar} onChangeCamas={this.handleChangeCamas} />
                    
            </header>

            <main className="mainView">

            <MainView filtradoPais={pais} filtradoDolar={dolar} filtradoCamas={camas} />

            </main>
            </React.Fragment>

        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))