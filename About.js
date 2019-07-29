var aboutStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
};

function About(props) {
    return React.createElement(
        'div',
        { style: aboutStyles },
        'About'
    );
}

export default About;