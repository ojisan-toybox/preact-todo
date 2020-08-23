import { h } from "preact";
import { styled } from "goober";
import { useContext } from "preact/hooks";
import { TodoStateContext } from "../context/TodoCotext";

export const Detail = () => {
  const context = useContext(TodoStateContext);
  const { state } = context;
  return <Layout>{state.selectedTodo?.todo}</Layout>;
};

const Layout = styled("div")`
  padding: 12px;
  font-size: 1.6rem;
`;
