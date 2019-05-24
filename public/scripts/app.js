'use strict';

var visibility = false;

var render = function render() {
    var jsx = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visible Toggle'
        )
    );

    ReactDOM.render(jsx, document.getElementById('app'));
};

render();
