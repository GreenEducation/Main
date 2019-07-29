const headerStyles = {
    width: '100vw',
    height: 50,
    background: 'white',
    color: '#555',
    borderBottom: '1px solid #ccc'
};

function Header(props) {
    handleClick = (p) => {
        props.changePage(p);
    }
    return(
        <div style={headerStyles}>
            Header
            <button onClick={this.handleClick("home")}>Home</button>
            <button onClick={this.handleClick("about")}>About</button>
            <button onClick={this.handleClick("contact")}>Contact</button>
        </div>
    );
}

export default Header;