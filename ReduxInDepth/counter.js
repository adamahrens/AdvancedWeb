$(document).ready(function () {
    console.log('document on ready');

    var initialState = { count: 0 };

    // Action creators
    var inc = function () {
        return {
            type: '++'
        }
    }

    var dec = function () {
        return {
            type: '--'
        }
    }

    var reducer = function rootReducer(state = initialState, action) {
        console.log('Calling rootReducer with state ' + JSON.stringify(state));
        console.log('Calling rootReducer with action ' + JSON.stringify(action));

        let newState = Object.assign({}, state);
        switch (action.type) {
            case '++':
                newState.count++;
                break;
            case '--':
                newState.count--;
                break;
        }

        state.unknownAction = action.type
        return newState;
    }

    var store = Redux.createStore(reducer);

    function updateCounter(value) {
        $("#counter").text(value);
    }

    $('#increment').on('click', function () {
        console.log('increment hit')
        store.dispatch(inc())
        var state = store.getState();
        updateCounter(state.count);
    });

    $('#decrement').on('click', function () {
        console.log('decrement hit')
        store.dispatch(dec())
        var state = store.getState();
        updateCounter(state.count);
    });
})