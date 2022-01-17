Store: One Store for the entire application

Responsiblities: 
Holds Application State
Allows access to state via getState()
Allows state to be updated via dispatch(action)
Registers listners via subscribe(listner)
Handles unregistering of listners via the function return by subscribe

// essence of Redux
The whole global state of your app is stored in an object tree inside a single store. The only way to change the state tree is to create an action, an object describing what happened, and dispatch it to the store. To specify how state gets updated in response to an action, you write pure reducer functions that calculate a new state based on the old state and the action.