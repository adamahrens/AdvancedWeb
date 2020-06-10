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

## componentDidMount

Useful for making AJAX requests

`GET https://hacker-news.firebaseio.com/v0/topstories.json`
` [list of ids]`

`GET https://hacker-news.firebaseio.com/v0/item1500069.json`
```
{ "by", "id", "title", "url" } keys of returned JSON
```

```
constructor(props) {
    this.state = { stories: [] };
}

componentDidMount() {
    const top = 'https://hacker-news.firebaseio.com/v0/topstories.json'
    const storyBase = 'https://hacker-news.firebaseio.com/v0/' // need id.json

    fetch(topStores)
    .then(data => data.json())
    .then(data => data.map(id => { 
        const url = `${storybase}${id}.json`
        return fetch(url).then(d => d.json())
    }))
    .then(promies => Promise.all(promises))
    .then(stories => this.setState{stories}));
}
```
