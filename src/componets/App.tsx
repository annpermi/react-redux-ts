import React from "react";
import { connect } from "react-redux";
import { Todo, fetchTodos } from "../actions";
import { StoreState } from "../reducers";
import { todosReducers } from "../reducers/todos";

interface AppProps {
  todos: Todo[];
  fetchTodos(): any; //function
}

//<> - generic
//_App - avoid a name colution, ex
export class _App extends React.Component<AppProps> {
  //:void --> don't expect this function return anything
  onButtonClick = (): void => {
    this.props.fetchTodos();
  };

  //helper function
  renderList(): JSX.Element[] {
    return this.props.todos.map((todo: Todo) => {
      return <div key={todo.id}>{todo.title}</div>;
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

export const App = connect(mapStateToProps, { fetchTodos })(_App);
