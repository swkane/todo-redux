import React from 'react';
import TodoItem from './TodoItem';
import { connect } from 'react-redux';

const TodoList = props => {
    return (
        <ul className="todo-list">
            {props.todos.map((todo, i) => (
                <TodoItem key={i} id={todo.id} text={todo.title} completed={todo.completed} 
                onDelete={props.onDelete(i)} />
            ))}
        </ul>
    );
}

const mapStateToProps = state => ({
    todos: state.todos
})

export default connect(mapStateToProps)(TodoList);