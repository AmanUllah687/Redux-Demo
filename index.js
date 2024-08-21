const redux = require('redux')
const createStore = redux.createStore
const CAKE_ORDERED = 'CAKE_ORDERED'
const CAKE_RESTOCKED = 'CAKE_RESTOCKED' 
const bindActionCreators = redux.bindActionCreators
function OrderCake () {
return {
    type: CAKE_ORDERED,
    payload: 1
}
}
function restockCake (qty = 1) {
    return {
        type: 'CAKE_RESTOCKED',
        payload: qty
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
        case CAKE_RESTOCKED: 
            return {
                ...state,
                numOfCakes: state.numOfCakes + action.payload
            }    
            default:
                return state
    }
}
const store = createStore(reducer)
console.log('Initial State', store.getState())
const unsubscribe = store.subscribe(() => console.log('update State', store.getState()))
// store.dispatch(OrderCake())
// store.dispatch(OrderCake())
// store.dispatch(OrderCake())
// store.dispatch(restockCake(3))
const actions = bindActionCreators({OrderCake, restockCake},store.dispatch)
actions.OrderCake()
actions.OrderCake()
actions.OrderCake()
actions.restockCake(3)
 unsubscribe()