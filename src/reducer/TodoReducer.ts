// action type

import { TodoType } from "../type";

const SELECT_TODO = "SELECT_TODO";
const SAVE_TODO = "SAVE_TODO";

const actionTypes = {
  SELECT_TODO,
  SAVE_TODO,
} as const;

// action

const selectTodo = (todo: TodoType) => ({
  type: actionTypes.SELECT_TODO,
  payload: todo,
});
const saveTodo = (todo: TodoType) => ({
  type: actionTypes.SAVE_TODO,
  payload: todo,
});

export const actions = {
  selectTodo,
  saveTodo,
};

export type ActionType =
  | ReturnType<typeof selectTodo>
  | ReturnType<typeof saveTodo>;

// store
export type StoreType = {
  selectedTodo: TodoType | null;
  todos: TodoType[];
};

export const initialState: StoreType = {
  selectedTodo: null,
  todos: [],
};

export default (state: StoreType, action: ActionType): StoreType => {
  switch (action.type) {
    case "SELECT_TODO":
      return { ...state, selectedTodo: action.payload };
    case "SAVE_TODO":
      return { ...state, todos: [...state.todos, action.payload] };
    default:
      throw new Error("unexpected action type");
  }
};
