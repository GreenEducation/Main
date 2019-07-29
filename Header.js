var headerStyles = {
    width: '100vw',
    height: 50,
    background: 'white',
    color: '#555',
    borderBottom: '1px solid #ccc'
};

function Header(props) {
    var handleClick = function handleClick(p) {
        props.changePage(p);
    };
    return React.createElement(
        'div',
        { style: headerStyles },
        'Header',
        React.createElement(
            'button',
            { onClick: handleClick("home") },
            'Home'
        ),
        React.createElement(
            'button',
            { onClick: handleClick("about") },
            'About'
        ),
        React.createElement(
            'button',
            { onClick: handleClick("contact") },
            'Contact'
        )
    );
}

export default Header;