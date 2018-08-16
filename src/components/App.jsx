import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import TodoList from "./TodoList";
import { addTodo, clearCompleted } from "../actions";
import "../App.css";

class App extends Component {
  state = {
    text: "",
    nextId: 6
  };

  // adding a todo
  handleEnter = e => {
    if (e.key === "Enter") {
      let newTodo = {
        userId: 1,
        id: this.state.nextId,
        title: this.state.text,
        completed: false
      };
      this.props.dispatch(addTodo(newTodo));
      this.setState(prevState => ({ text: "", nextId: prevState.nextId + 1 }));
    }
  };

  // controlled adding todo input
  handleChange = event => {
    this.setState({ text: event.target.value });
  };

  // deleting all todos marked as complete
  handleDeleteAll = () => {
    this.props.dispatch(clearCompleted());
  };

  render() {
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <input
            onChange={this.handleChange}
            onKeyUp={this.handleEnter}
            className="new-todo"
            value={this.state.text}
            autoFocus
          />
        </header>
        <section className="main">
          <Switch>
            <Route exact path="/" render={() => <TodoList filter="all" />} />
            <Route
              exact
              path="/active"
              render={() => <TodoList filter="active" />}
            />
            <Route
              exact
              path="/completed"
              render={() => <TodoList filter="completed" />}
            />
          </Switch>
        </section>
        <footer className="footer">
          <span className="todo-count">
            <strong>0</strong> item(s) left
          </span>
          <ul className="filters">
            <li>
              <Link to="/">All</Link>
            </li>
            <li>
              <Link to="/active">Active</Link>
            </li>
            <li>
              <Link to="/completed">Completed</Link>
            </li>
          </ul>
          <button onClick={this.handleDeleteAll} className="clear-completed">
            Clear completed
          </button>
        </footer>
      </section>
    );
  }
}

export default withRouter(connect()(App));
