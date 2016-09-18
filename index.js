var randColor = function() {
    return '#'+Math.floor(Math.random()*16777215).toString(16);
}

var Box = () => {
    return <div style={{
        display: "inline-block",
        background: randColor(),
        width: "100px",
        height: "100px"
    }} />;
}

setInterval(function() {
    ReactDOM.render(
        <div>
            <Box />
            <Box />
        </div>,
        document.getElementById('example')
    );
}, 100)
