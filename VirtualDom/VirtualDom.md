
# Virtual DOM

A data structure in React that tracks changes from one render to the next. Reconcilliation happens if something has changed and the actual DOM is updated.

React figures out the changes that need to happen to the actual DOM.

# Synthetic Events

Supports all browser events but don't have to do anything specific for a browser type.

# Events

`onClick` example

```
class ClickExample extends Component {
    constructor(props) {
        super(props);
        this.state = { name: 'Leroy' };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.setState((previous, props) => {
            name: previous.name.toUpperCase()
        });
    }
    render() {
        return(
            <div>
                <p>{this.state.name}</p>
                <button type="button" onClick={() => this.setState({name: 'Roy'})}>
                    Change
                </button>

                <button type="button" onClick={this.handleClick}>
                    Change
                </button>
            </div>
        )
    }
}
```

Add events directly to the component

# Forms

Need to set an onChange

```
 <input 
    type="text"
    name="inputText"
    value={this.state.name}
    onChange={(e) => { this.setState({name: e.target.value})}}
 />
```

# Using onSubmit

```
<form onSubmit={(e) => {
    e.preventDefault();

    const data = [...this.state.data, this.state.name];
    this.setState({ data, name: ''});
}}>

 <input 
    type="text"
    name="inputText"
    value={this.state.name}
    onChange={(e) => { this.setState({[e.target.name]: e.target.value})}}
 />

</form>
```