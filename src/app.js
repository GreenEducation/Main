import Header from './Header.js';
import Home from './Home.js';
import About from './About.js';
import Contact from './Contact.js';
import Footer from './Footer.js';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userID: 2065,
            page: 'home'
        };
        this.changePage = this.changePage.bind(this);
    }
    changePage(page) {
        this.setState({page: page});
    }
    render() {
        return(
            <div>
                <Header changePage={this.changePage}/>
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