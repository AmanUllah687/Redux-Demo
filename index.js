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
