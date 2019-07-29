var headerStyles = {
    width: '100vw',
    height: 50,
    background: 'white',
    color: '#555'
};

function Header(props) {
    return React.createElement(
        'div',
        { style: headerStyles },
        'Header'
    );
}

export default Header;