export const MARK_COMPLETE = 'MARK_COMPLETE';
export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED';

export const markComplete = index => ({ 
    type: MARK_COMPLETE,
    payload: id 
});

export const addTodo = title => ({ 
    type: ADD_TODO,
    payload: title
});

export const deleteTodo = index => ({
    type: DELETE_TODO,
    payload: id
});

export const clearCompleted = () => ({
    type: CLEAR_COMPLETED
});