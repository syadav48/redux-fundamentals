const redux = require('redux')
//const reduxLogger = require('redux-logger')

const createStore = redux.createStore
//const combineReducers = redux.combineReducers
//const applyMiddleware = redux.applyMiddleware
//const logger = reduxLogger.createLogger()

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

//action creator
function buyCake(){
    return {
        type: BUY_CAKE, // action is an obj with a type property
    }
}

function buyIceCream(){
    return {
        type: BUY_ICECREAM
    }
}

//(prevState, action) => newState

/*const initialState = {
    numOfCakes: 10,
    numOfIceCreams: 20
}*/

const initialCakeState = {
    numOfCakes: 10
}       
//store
const initialIceCreamState = {
    numOfIceCreams: 20
}

// const reducer = (state = initialState, action) => {
//     switch(action.type){
//         case BUY_CAKE: return {
//             ...state, //here we are creating the copy of the state object.
//             numOfCakes: state.numOfCakes - 1
//         }
//         case BUY_ICECREAM: return {
//             ...state, 
//             numOfIceCreams: state.numOfIceCreams - 1
//         }
//     default: return state
//     }
// }



const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type){
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
}

// const IceCreamreducer = (state = initialIceCreamState, action) => {
//     switch(action.type){
//         case BUY_ICECREAM: return {
//             ...state, 
//             numOfIceCreams: state.numOfIceCreams - 1
//         }
//     default: return state
//     }
// }

/*const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: IceCreamreducer
})

const store = createStore(rootReducer, applyMiddleware(logger))
*/

const store = createStore(cakereducer)
console.log('Initial State', store.getState())
const unsubscribe = store.subscribe(()=> console.log('Updated State', store.getState()))

//const unsubscribe =  store.subscribe(() => {}) 

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
// store.dispatch(buyIceCream())
// store.dispatch(buyIceCream())
// store.dispatch(buyIceCream())

unsubscribe()