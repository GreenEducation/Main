var headerStyles = {
    width: '100vw',
    height: 50,
    background: 'white',
    color: '#555',
    borderBottom: '1px solid #ccc'
};

function Header(props) {
    handleClick = function handleClick(p) {
        props.changePage(p);
    };
    return React.createElement(
        'div',
        { style: headerStyles },
        'Header',
        React.createElement(
            'button',
            { onClick: this.handleClick("home") },
            'Home'
        ),
        React.createElement(
            'button',
            { onClick: this.handleClick("about") },
            'About'
        ),
        React.createElement(
            'button',
            { onClick: this.handleClick("contact") },
            'Contact'
        )
    );
}

export default Header;