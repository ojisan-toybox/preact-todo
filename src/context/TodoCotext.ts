import { createContext } from "preact";
import { StoreType, ActionType, initialState } from "../reducer/TodoReducer";

export const TodoStateContext = createContext<{
  state: StoreType;
}>({ state: initialState });

export const TodoDispatchContext = createContext<{
  dispatch: (action: ActionType) => void;
}>({ dispatch: () => {} });
