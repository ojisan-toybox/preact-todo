import { createContext } from "preact";
import { StoreType, ActionType, initialState } from "../reducer/TodoReducer";

export const StateContext = createContext<{ state: StoreType, dispatch: (action: ActionType) => void }>({ state: initialState, dispatch: () => { } })