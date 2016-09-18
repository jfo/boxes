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

let Row = () => {
    return <div>
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
    </div>
}

let Grid = () => {
    return <div>
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
    </div>
}

setInterval(()=>{
    ReactDOM.render(
        <Grid />,
        document.getElementById('example')
    );
}, 100)
