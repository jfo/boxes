var thing = "Hello World!";
var colors = [ "red", "blue", "orange", "green" ];
var color = colors[Math.floor(Math.random() * colors.length)];

ReactDOM.render(
    <h1 style={ {"color":color} }>{thing}</h1>,
    document.getElementById('example')
);
