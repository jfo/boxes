var thing = "Hello World!";
var colors = [ "red", "blue", "orange", "green" ];
var color = colors[Math.floor(Math.random() * colors.length)];

ReactDOM.render(
    <h1 style={ {"color":color} }>{thing}</h1>,
    document.getElementById('example')
);

setInterval(function() {
    color = colors[Math.floor(Math.random() * colors.length)];
    console.log(color);
}, 1000)
