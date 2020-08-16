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
    import thunk from 'redux-thunk';
    import reducer from './reducers'

const middleware = applyMiddleware(logger, thunk)

export default createStore(reducer, middleware)
    ```   
*** Note the "store" is passed as a paramaeter int the Provider (step 1)  
3. Checkout the components to see how to tie the `store` with the components.  

    ```
    export default connect(mapStateToProps, {homePageInput1Changed, homePageInput2Changed})(Home)
    ``` 