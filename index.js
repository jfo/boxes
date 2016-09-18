var thing = "Hello World!";
var randColor = function() {
    return '#'+Math.floor(Math.random()*16777215).toString(16);
}

setInterval(function() {
    ReactDOM.render(
        <div>
            <h1 style={ {"color":"brown"} }>{thing}</h1>
            <h1 style={ {"color":"purple"} }>{thing}</h1>
            <h1 style={ {"color":randColor()} }>{thing}</h1>
            <h1 style={ {"color":"pink"} }>{thing}</h1>
            <h1 style={ {"color":"indigo"} }>{thing}</h1>
        </div>,
        document.getElementById('example')
    );
}, 100)
