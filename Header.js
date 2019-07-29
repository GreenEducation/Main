var headerStyles = {
    width: '100vw',
    height: 50,
    background: 'white',
    color: '#555',
    borderBottom: '1px solid #ccc'
};

function Header(props) {
    return React.createElement(
        'div',
        { style: headerStyles },
        'Header',
        React.createElement(
            'button',
            { onClick: props.changePage('home') },
            'Home'
        ),
        React.createElement(
            'button',
            { onClick: props.changePage('about') },
            'About'
        ),
        React.createElement(
            'button',
            { onClick: props.changePage('contact') },
            'Contact'
        )
    );
}

export default Header;