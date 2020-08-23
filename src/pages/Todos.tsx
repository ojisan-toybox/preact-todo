import { h } from "preact";
import { useContext } from "preact/hooks";
import { Link } from "preact-router";
import { styled } from "goober";
import { TodoContext } from "../context/TodoCotext";
import { actions } from "../reducer/TodoReducer";
import { genRandomId } from "../helper";
import { Item as _Item } from "../component/Item";

export const Todos = () => {
  const context = useContext(TodoContext);
  const { state, dispatch } = context;
  return (
    <Layout>
      <Title>TODO LIST</Title>
      <Items>
        {state.todos.map((todo) => (
          <Link
            href={`/todos/${todo.id}`}
            onClick={() => {
              dispatch(actions.selectTodo(todo));
            }}
          >
            <Item data={todo} key={todo.id}></Item>
          </Link>
        ))}
      </Items>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          try {
            // @ts-ignore
            const todo = e.target.todo.value as string;
            const id = genRandomId();
            dispatch(actions.saveTodo({ id, todo }));
          } catch (e) {
            console.error(e);
            alert("入力の保存に失敗しました。");
          }
        }}
      >
        <Input name="todo"></Input>
        <button>submit</button>
      </form>
    </Layout>
  );
};

const Layout = styled("div")`
  padding: 12px;
  font-size: 1.6rem;
`;

const Title = styled("h1")`
  font-size: 3rem;
  margin-bottm: 0.8rem;
`;

const Input = styled("input")`
  margin-top: 1.2rem;
  margin-right: 0.8rem;
`;

const Items = styled("div")`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 450px) {
    flex-direction: column;
  }
`;

const Item = styled(_Item)`
  border: solid 1px #ccc;
  border-radius: 8px;
  margin: 4px 12px;
  @media screen and (max-width: 450px) {
    flex-direction: column;
    margin: 12px 0px;
  }
`;
