import { h } from "preact";
import { styled } from "goober";
import { useContext } from "preact/hooks";
import { TodoContext } from "../context/TodoCotext";

export const Detail = () => {
    const context = useContext(TodoContext);
    const { state, } = context;
    return <div>{state.selectedTodo?.todo}</div>;
};

