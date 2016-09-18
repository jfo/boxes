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

let Row = (props) => {
    return <div style={{
        height: props.height,
        width: props.width
    }}>
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
        <Row height={props.height / 5} width={props.width} />
        <Row height={props.height / 5} width={props.width} />
        <Row height={props.height / 5} width={props.width} />
        <Row height={props.height / 5} width={props.width} />
        <Row height={props.height / 5} width={props.width} />
    </div>
}

setInterval(()=>{
    ReactDOM.render(
        <Grid height={500} width={500} />,
        document.getElementById('example')
    );
}, 100)
