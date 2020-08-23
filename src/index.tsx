import { h, render, } from "preact";
import { useReducer } from "preact/hooks";
import { Router, Route } from "preact-router";
import { setup, glob } from "goober";
import reducer, {
  initialState,
} from "./reducer/TodoReducer";
import { TodoStateContext, TodoDispatchContext } from "./context/TodoCotext";
import { Todos } from "./pages/Todos";
import { Detail } from "./pages/Detail";

setup(h);

glob`
*,
*:after,
*:before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  font-size: 62.5%;
}

body {
  box-sizing: border-box;
}
`;

const Main = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TodoStateContext.Provider value={{ state, }}>
      <TodoDispatchContext.Provider value={{ dispatch }}>
        <Router>
          <Route path="/" component={Todos}></Route>
          <Route path="/todos/:id" component={Detail}></Route>
        </Router>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
};

render(<Main></Main>, document.body);
