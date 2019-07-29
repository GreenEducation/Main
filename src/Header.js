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
            <button onClick={props.changePage}>Home</button>
            <button onClick={props.changePage}>About</button>
            <button onClick={props.changePage}>Contact</button>
        </div>
    );
}

export default Header;