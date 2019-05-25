let visibility = false;

const toggleVisivility = () => {
    visibility = !visibility;
    render();
}

const render = () => {
    const jsx = (
        <div>
            <h1>Visible Toggle</h1>
            <button onClick={toggleVisivility}>
            {visibility ? 'Hide details': 'Show details'}
            </button>
            {visibility && (
                <div>
                <p>These are some details</p>
                </div>
            )}
        </div>
    );

    ReactDOM.render(jsx, document.getElementById('app'));
};

render();