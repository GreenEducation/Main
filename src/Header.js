const headerStyles = {
    width: '100vw',
    height: 50,
    background: 'white',
    color: '#555',
    borderBottom: '1px solid #ccc'
};

function Header(props) {
    const handleClick = (p) => {
        props.changePage(p);
    }
    return(
        <div style={headerStyles}>
            Header
            <button onClick={handleClick("home")}>Home</button>
            <button onClick={handleClick("about")}>About</button>
            <button onClick={handleClick("contact")}>Contact</button>
        </div>
    );
}

export default Header;