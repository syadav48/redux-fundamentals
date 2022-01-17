const redux = require(redux)
const createStore = redux.createStore


const BUY_PIZZA = 'BUY_PIZZA'

function buyPizza () {
    return{
        type: BUY_PIZZA
    }
}

const initialPizzaState = {
    numOfPizza: 10
}

const reducer = (state = initialPizzaState, action) => {
    switch (action.type) {
        case BUY_PIZZA:
            return {
                ...state, // copying the state 
                numOfPizza: state.numOfPizza - 1
            }
        default:
            return state
    }
}

const store = createStore(reducer)
console.log('Initial State', store.getState())
const unsubscribe = store.subscribe(() => console.log('Update State', store.getState()))

store.dispatch(buyPizza())
store.dispatch(buyPizza())
store.dispatch(buyPizza())
store.dispatch(buyPizza())

unsubscribe()

// essence of Redux
