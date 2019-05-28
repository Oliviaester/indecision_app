class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }
    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    }
    render() {
        return (
            <div>
                <h1>Visible Toggle</h1>
                <button onClick={this.handleToggleVisibility}>
                {this.state.visibility ? 'Hide details': 'Show details'}
                </button>
                {this.state.visibility && (
                    <div>
                    <p>These are some details</p>
                    </div>
                )}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));


// let visibility = false;

// const toggleVisivility = () => {
//     visibility = !visibility;
//     render();
// }

// const render = () => {
    // const jsx = (
    //     <div>
    //         <h1>Visible Toggle</h1>
    //         <button onClick={toggleVisivility}>
    //         {visibility ? 'Hide details': 'Show details'}
    //         </button>
    //         {visibility && (
    //             <div>
    //             <p>These are some details</p>
    //             </div>
    //         )}
    //     </div>
    // );

//     ReactDOM.render(jsx, document.getElementById('app'));
// };

// render();