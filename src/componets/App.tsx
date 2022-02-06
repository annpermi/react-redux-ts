import React from "react";
import { connect } from "react-redux";
import { Todo, fetchTodos, deleteTodo } from "../actions";
import { StoreState } from "../reducers";
import { todosReducers } from "../reducers/todos";

interface AppProps {
  todos: Todo[];
  //   fetchTodos: typeof fetchTodos; //function
  fetchTodos: Function; //function
  deleteTodo: typeof deleteTodo;
}

//<> - generic
//_App - avoid a name colution, ex
export class _App extends React.Component<AppProps> {
  //:void --> don't expect this function return anything
  onButtonClick = (): void => {
    this.props.fetchTodos();
  };

  onTodoClick = (id: number): void => {
    this.props.deleteTodo(id);
  };

  //helper function
  renderList(): JSX.Element[] {
    return this.props.todos.map((todo: Todo) => {
      return (
        <div key={todo.id} onClick={() => this.onTodoClick(todo.id)}>
          {todo.title}
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.onButtonClick}>Fetch</button>
        {this.renderList()}
      </div>
    );
  }
}

//: {todos: Todo[]} --> type innotation for the function

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos };
};

export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App);
