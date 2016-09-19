let randColor = function() {
    return '#'+Math.floor(Math.random()*16777215).toString(16);
}

class Box extends React.Component {
    constructor() {
        super();
        this.state = {
            color: "black"
        }
    }

    render() {
        return <div style={{
            display: "inline-block",
            background: this.state.color,
            height: this.props.height,
            width: this.props.width,
            transition: "0.5s"
        }} onMouseOver={()=> this.setState({color: randColor()})}/>;
    }
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
                  x: 60,
                  y: 40
              }}/>,
        document.getElementById('grid')
    );
}

renderAll();
window.onresize = () => renderAll();
