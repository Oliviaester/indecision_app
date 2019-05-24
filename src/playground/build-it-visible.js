let visibility = false;

const render = () => {
    const jsx = (
        <div>
            <h1>Visible Toggle</h1>
        </div>
    );

    ReactDOM.render(jsx, document.getElementById('app'));
};

render();