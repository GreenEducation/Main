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
            { onClick: props.changePage },
            'Home'
        ),
        React.createElement(
            'button',
            { onClick: props.changePage },
            'About'
        ),
        React.createElement(
            'button',
            { onClick: props.changePage },
            'Contact'
        )
    );
}

export default Header;