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
        <Box height={props.height} width={props.width / props.count} />
        <Box height={props.height} width={props.width / props.count} />
        <Box height={props.height} width={props.width / props.count} />
        <Box height={props.height} width={props.width / props.count} />
        <Box height={props.height} width={props.width / props.count} />
    </div>
}

let Grid = (props) => {
    return <div style={{
        display: "inline-block",
        height: props.height,
        width: props.width
    }}>
        <Row height={props.height / props.dimensions.y} width={props.width} count={props.dimensions.y}/>
        <Row height={props.height / props.dimensions.y} width={props.width} count={props.dimensions.y}/>
        <Row height={props.height / props.dimensions.y} width={props.width} count={props.dimensions.y}/>
        <Row height={props.height / props.dimensions.y} width={props.width} count={props.dimensions.y}/>
        <Row height={props.height / props.dimensions.y} width={props.width} count={props.dimensions.y}/>
    </div>
}

setInterval(()=>{
    ReactDOM.render(
        <Grid height={500} width={500} dimensions={{x: 5, y: 5}} />,
        document.getElementById('example')
    );
}, 100)
