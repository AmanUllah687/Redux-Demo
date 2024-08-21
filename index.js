

const redux = require('redux')
const createStore = redux.createStore
const CAKE_ORDERED = 'CAKE_ORDERED'
function OrderCake () {
return {
    type: CAKE_ORDERED,
    quantity: 1
}
}

// (prevState, action) = newState
const initialState = {
    numOfCakes: 10,

}
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
                numOfCakes: state.numOfCakes -1
            }
            default:
                return state
    }
}
const store = createStore(reducer)
console.log('Initial State', store.getState())
const unsubscribe = store.subscribe(() => console.log('update Stae', store.getState()))
store.dispatch(OrderCake())
store.dispatch(OrderCake())
store.dispatch(OrderCake())
 unsubscribe()