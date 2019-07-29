var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import Header from './Header.js';
import Home from './Home.js';
import About from './About.js';
import Contact from './Contact.js';
import Footer from './Footer.js';

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.state = {
            userID: 2065,
            page: 'home'
        };
        _this.changePage = _this.changePage.bind(_this);
        return _this;
    }

    _createClass(App, [{
        key: 'changePage',
        value: function changePage() {
            this.setState({
                userID: 55,
                page: "Changed"
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(Header, { changePage: this.changePage }),
                this.state.userID,
                this.state.page == "home" && React.createElement(Home, null) || this.state.page == "about" && React.createElement(About, null) || this.state.page == "contact" && React.createElement(Contact, null),
                React.createElement(Footer, null)
            );
        }
    }]);

    return App;
}(React.Component);

/**********/

ReactDOM.render(React.createElement(App, null), document.getElementById("home"));