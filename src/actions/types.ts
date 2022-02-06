import { FetchTodosAction, DeleteTodoAction } from "./todos";

//enum contains the set of different values and properties that are all very similar in nature and also close to related
export enum ActionTypes {
  fetchTodos,
  deleteTodo,
}

export type Action = FetchTodosAction | DeleteTodoAction;
