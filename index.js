var thing = "Hello World!";
var colors = [ "red", "blue", "orange", "green", "yellow"];

setInterval(function() {
    var color = colors[Math.floor(Math.random() * colors.length)];
    ReactDOM.render(
        <div>
            <h1 style={ {"color":"brown"} }>{thing}</h1>
            <h1 style={ {"color":"purple"} }>{thing}</h1>
            <h1 style={ {"color":color} }>{thing}</h1>
            <h1 style={ {"color":"pink"} }>{thing}</h1>
            <h1 style={ {"color":"indigo"} }>{thing}</h1>
        </div>,
        document.getElementById('example')
    );
}, 100)
