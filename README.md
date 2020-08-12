#In Progress ...

# Changes
1. _index.js_ -> Wrap the app within the `<Provider />`
    ```
    <Provider store={store} >
        <App />
    </Provider>
    ```
2. Create a `store`.
    ```
    import { applyMiddleware, createStore } from 'redux'
    import { logger } from 'redux-logger'
    import reducer from './reducers'

    const middleware = applyMiddleware(logger)

    export default createStore(reducer, middleware)
    ```