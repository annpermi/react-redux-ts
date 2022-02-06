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

interface AppState {
  fetching: boolean;
}

//<> - generic
//_App - avoid a name colution, ex
export class _App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = { fetching: false };
  }

  componentDidUpdate(prevProps: AppProps): void {
    //if prevprops has no todos and current has
    if (!prevProps.todos.length && this.props.todos.length) {
      this.setState({ fetching: false });
    }
  }

  //:void --> don't expect this function return anything
  onButtonClick = (): void => {
    this.props.fetchTodos();
    this.setState({ fetching: true });
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
        <br />
        {this.state.fetching && "Loading..."}
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
