import { h } from "preact";
import { useContext } from "preact/hooks";
import { TodoContext } from "../context/TodoCotext";

export const Detail = () => {
  const context = useContext(TodoContext);
  const { state, dispatch } = context;
  console.log("state", state);
  return <div>{state.selectedTodo?.todo}</div>;
};
