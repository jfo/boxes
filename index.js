var thing = "Hello World!";
var randColor = function() {
    return '#'+Math.floor(Math.random()*16777215).toString(16);
}


var ExampleOne = (props) => <h1 style={{color: props.color}}>{props.text}</h1>;

var ExampleTwo = function(props) {
    return <h1 style={{color: props.color}}>{props.text}</h1>;
}

var ExampleThree = React.createClass({
    render() {
        return <h1 style={{color:this.props.color}}>{this.props.text}</h1>;
    }
})

class ExampleFour extends React.Component {
    render() {
        return <h1 style={{color:this.props.color}}>{this.props.text}</h1>;
    }
}

setInterval(function() {
    ReactDOM.render(
        <div>
            <ExampleOne text="it came from a stabby proc function!" color={randColor()} />
            <ExampleTwo text="it came from a function!" color={randColor()} />
            <ExampleThree text="it came from React.createClass!" color={randColor()} />
            <ExampleFour text="it came from an ES6 class that extends React.Component" color={randColor()} />
        </div>,
        document.getElementById('example')
    );
}, 100)
