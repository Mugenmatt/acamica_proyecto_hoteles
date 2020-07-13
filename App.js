
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