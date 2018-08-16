import React from "react";
import TodoItem from "./TodoItem";
import { connect } from "react-redux";
import { withRouter } from "react-router";

const TodoList = props => {
  return (
    <ul className="todo-list">
      {props.todos.map((todo, i) => (
        <TodoItem
          key={i}
          id={todo.id}
          text={todo.title}
          completed={todo.completed}
        />
      ))}
    </ul>
  );
};

const mapStateToProps = (state, ownProps) => {
  let todoFilter = {
    all: state.todos,
    active: state.todos.filter(todo => !todo.completed),
    completed: state.todos.filter(todo => todo.completed)
  };

  return { todos: todoFilter[ownProps.filter] };
};

export default withRouter(connect(mapStateToProps)(TodoList));
