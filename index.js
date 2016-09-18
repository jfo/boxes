var randColor = function() {
    return '#'+Math.floor(Math.random()*16777215).toString(16);
}

var Box = () => {
    return <div style={{
        background: randColor(),
        width: "100px",
        height: "100px"
    }} />;
}

setInterval(function() {
    ReactDOM.render(
        <Box />,
        document.getElementById('example')
    );
}, 100)
