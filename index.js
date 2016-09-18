let randColor = function() {
    return '#'+Math.floor(Math.random()*16777215).toString(16);
}

let Box = () => {
    return <div style={{
        display: "inline-block",
        background: randColor(),
        width: "100px",
        height: "100px"
    }} />;
}

setInterval(()=>{
    ReactDOM.render(
        <div>
            <Box />
            <Box />
        </div>,
        document.getElementById('example')
    );
}, 100)
