const headerStyles = {
    width: '100vw',
    height: 50,
    background: 'white',
    color: '#555',
    borderBottom: '1px solid #ccc'
};

function Header(props) {
    return(
        <div style={headerStyles}>
            Header
            <button onClick={this.props.changePage('home')}>Home</button>
            <button onClick={this.props.changePage('about')}>About</button>
            <button onClick={this.props.changePage('contact')}>Contact</button>
        </div>
    );
}

export default Header;