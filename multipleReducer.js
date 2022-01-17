const redux = require(redux)
const createStore = redux.createStore

const BUY_CHOCOLATES = 'BUY_CHOCOLATES'
const BUY_COLDDRINK = 'BUY_COLDDRINK'

const buyChocolates = () => {
    return {
        type: BUY_CHOCOLATES
    }
}

const buyColdDrink = () => {
    return {
        type: BUY_COLDDRINK
    }
}

const initialState = {
    numOfChocolates: 10, 
    numOfColdDrink: 20
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CHOCOLATES:
            return {
                ...state,
                numOfChocolates: state.numOfChocolates - 2
            }
            case BUY_COLDDRINK:
                return {
                    ...state,
                    numOfColdDrink: state.numOfColdDrink - 2
                }
        default:
            return state
    }
}

const store = createStore(reducer)
console.log('Initial State', store.getState())
const unsubscribe = store.subscribe(() => console.log('Update State', store.getState()))

store.dispatch(buyChocolates())
store.dispatch(buyChocolates())
store.dispatch(buyColdDrink())
store.dispatch(buyColdDrink())