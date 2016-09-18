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

let Grid = (props) => {
    return <div style={{
        display: "inline-block",
        height: props.height,
        width: props.width
    }}>
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
    </div>
}

setInterval(()=>{
    ReactDOM.render(
        <Grid height="500px" width="500px" />,
        document.getElementById('example')
    );
}, 100)
