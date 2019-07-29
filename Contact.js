var contactStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
};

function Contact(props) {
    return React.createElement(
        'div',
        { style: contactStyles },
        'Contact'
    );
}

export default Contact;