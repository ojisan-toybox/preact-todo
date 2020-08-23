import { createContext } from "preact";
import { StoreType, ActionType, initialState } from "../reducer/TodoReducer";

export const TodoContext = createContext<{ state: StoreType, dispatch: (action: ActionType) => void }>({ state: initialState, dispatch: () => { } })