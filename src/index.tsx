import { h, render, createContext, } from 'preact';
import { useReducer } from 'preact/compat'
import { Router, Route } from 'preact-router';
import { setup } from 'goober';
import reducer, { initialState, StoreType, ActionType, actions } from './reducer/TodoReducer';
import { TodoContext } from './context/TodoCotext';
import { Todos } from './pages/Todos';
import { Detail } from './pages/Detail';

setup(h)

const Main = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <TodoContext.Provider value={{ state, dispatch }}>
            <Router>
                <Route path="/" component={Todos}></Route>
                <Route path="/todos/:id" component={Detail}></Route>
            </Router></TodoContext.Provider>)
}

render(<Main></Main>, document.body);