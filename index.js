let randColor = function() {
    return '#'+Math.floor(Math.random()*16777215).toString(16);
}

let Box = (props) => {
    return <div style={{
        display: "inline-block",
        background: randColor(),
        height: props.height,
        width: props.width
    }} />;
}

let Row = (props) => {
    return <div style={{
        height: props.height,
        width: props.width
    }}>
        <Box height={props.height} width={props.width / 5} />
        <Box height={props.height} width={props.width / 5} />
        <Box height={props.height} width={props.width / 5} />
        <Box height={props.height} width={props.width / 5} />
        <Box height={props.height} width={props.width / 5} />
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
