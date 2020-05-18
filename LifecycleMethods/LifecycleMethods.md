# Component Lifecycle Methods

Mounting. When component is first rendered in the dom. Order of calls

`constructor`
`componentWillMount`
`render`
`componentDidMount` // After component markup is rendered in the DOM

will and did are only called once for the lifetime of a component


Unmounting. Called for cleanup. Good idea to cancel setInterval

`componentWillUnmount`

Updating. Happens when `setState` is called

`componentWillReceiveProps`
`shouldComponentUpdate` // Way to shortcircuit render
`componentWillUpdate` 
`render`
`componentDidUpdate`

Force Update. Skips shouldComponentUpdate and forces a render

`forceUpdate`

# Examples

## componentWillUnmount

```
const NUM_BOXES = 32
class Box extends Component {
    constructor(props) {
        super(props);
        const boxes = Array(NUM_BOXES).fill().map(this.getRandomColor, this);
        this.state = {boxes};

        this.intervalId = setInterval(() => {
            const boxes = this.state.boxes.slice();
            const index = Math.floor(Math.random() * boxes.length);
            boxes[index] = this.getRandomColor();
            this.setState({boxes})
        }, 300);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }
}
```
