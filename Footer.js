var footerStyles = {
    width: '100vw',
    height: 50,
    background: 'white',
    color: '#555',
    borderBottom: '1px solid #ccc'
};

function Footer(props) {
    return React.createElement(
        'div',
        { style: footerStyles },
        'Footer'
    );
}

export default Footer;