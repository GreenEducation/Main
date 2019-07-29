import Header from './Header';
/*import About from './About';
import Contact from './Contact';
import Footer from './Footer';*/

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userID: 2065,
            page: 'home'
        };
    }
    render() {
        return(
            <div>
                <Header />
                { (this.state.page == "home" && <Home />) ||
                  (this.state.page == "about" && <About />) ||
                  (this.state.page == "contact" && <Contact />)
                }
                <Footer />
            </div>
        );
    }
}

/**********/

ReactDOM.render(<App />, document.getElementById("home"));