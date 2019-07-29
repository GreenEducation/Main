var homeStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
};

function Home(props) {
    return React.createElement(
        'div',
        { style: homeStyles },
        'Home'
    );
}

export default Home;