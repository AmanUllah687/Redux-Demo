const redux = require('redux')
const createStore = redux.createStore
const CAKE_ORDERED = 'CAKE_ORDERED'
const CAKE_RESTOCKED = 'CAKE_RESTOCKED'
const ICECREAM_ORDERED = 'ICECREAM_ORDERED'
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED'

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
function orderIceCream(qty = 1) {
    return {
        type: ICECREAM_ORDERED,
        payload: qty
    }
}
function restockIceCream(qty = 1) {
    return {
        type: ICECREAM_RESTOCKED,
        payload: qty
    }
}
// (prevState, action) = newState
// const initialState = {
//    numOfCakes: 10,
//    numOfIceCreams: 20

//}
const initialCakeState = {
    numOfCakes: 10,
}
const initialIceCreamState =  {
    numOfIceCreams: 20,
}
const cakeReducer = (state = initialCakeState, action) => {
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
const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch(action.type) {   
            case ICECREAM_ORDERED:
                return {
                    ...state,
                    numOfIceCreams: state.numOfIceCreams -1
                }
            case ICECREAM_RESTOCKED: 
                return {
                    ...state,
                    numOfIceCreams: state.numOfIceCreams + action.payload
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
const actions = bindActionCreators({OrderCake, restockCake, orderIceCream, restockIceCream},store.dispatch)
actions.OrderCake()
actions.OrderCake()
actions.OrderCake()
actions.restockCake(3)
actions.orderIceCream()
actions.orderIceCream()
actions.restockIceCream(2)
 unsubscribe()