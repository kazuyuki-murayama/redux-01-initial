import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';

const actionCreator = (count) => ({
    type: ACTION_COUNT_UP,
    payload: {
        count
    }
});

function CountApp({ store }) {
    const { count } = store.getState();
    return (
        <div>
            <span>{count}</span> <button value={ACTION_COUNT_UP} onClick={() => store.dispatch(actionCreator(count))}>Count Up.</button>
        </div>
    );
}

const initialState = {
    count: 0
};
const ACTION_COUNT_UP = 'COUNT_UP';
function reducer(state = initialState, action) {
    switch (action.type) {
        case ACTION_COUNT_UP:
            return {
                count: ++action.payload.count
            };
        default:
            return state;
    }
}

const store = createStore(reducer);
store.subscribe(() => renderCountApp(store));

function renderCountApp(store) {
    render(
        <CountApp store={store} />,
        document.getElementById('root')
    );
}
renderCountApp(store);