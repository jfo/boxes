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
    }}>{
        Array(props.count).fill().map((_, i) => {
            return <Box height={props.height}
                        width={props.width / props.count}
                        key={i} />;
        })
    }</div>
}

let Grid = (props) => {
    return <div style={{
        display: "inline-block",
        height: props.height,
        width: props.width
    }}>{
        Array(props.dimensions.y).fill().map((_, i) => {
            return <Row height={props.height / props.dimensions.y}
                        width={props.width}
                        count={props.dimensions.x}
                        key={i} />;
        })
    }</div>
}

let renderAll = function() {
    ReactDOM.render(
        <Grid height={window.innerHeight}
              width={window.innerWidth}
              dimensions={{
                  x: 9,
                  y: 5
              }}/>,
        document.getElementById('grid')
    );
}

renderAll();
window.onresize = () => renderAll();
