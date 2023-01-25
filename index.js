import {legacy_createStore as createStore } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension';
// 1. Criando reducer com o estado inicial
const INITIAL_STATE = {count: 0};

const reducer = (state = INITIAL_STATE, action) => {
    if(action.type === "INCREMENT_COUNTER") {
        return { count: state.count + 1 };
    } 
    return state;
} ;
// 2 criando a store já com redux dev tools
const store = createStore(reducer, composeWithDevTools());
// 3 criando a action
const action = { type: "INCREMENT_COUNTER" }
// 4 disparando a action
const incrementeButton = document.querySelector('button')
incrementeButton.addEventListener('click', () => {
    store.dispatch(action)
})
// 5 lendo as alterações do estado
store.subscribe(() => {
    const counterElement =  document.querySelector('h2')
    const globalState = store.getState()
    counterElement.innerHTML = globalState.count;    
})