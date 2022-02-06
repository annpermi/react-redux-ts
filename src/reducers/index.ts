import { combineReducers } from "redux";
import { Todo } from "../actions";
import { todosReducers } from "./todos";

//describe the intiere state
export interface StoreState {
  todos: Todo[];
}
export const reducers = combineReducers<StoreState>({
  todos: todosReducers,
});
