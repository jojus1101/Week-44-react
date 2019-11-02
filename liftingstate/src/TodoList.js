import React from 'react';
import PropTypes from 'prop-types';

const TodoList = props => {
  const { todos, editTodo } = props;
  return (
    <React.Fragment>
      <h2>All Todos</h2>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.todoText}
            <a href="#/" onClick={() => editTodo(todo.id)}>
              , edit){" "}
            </a>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};
export default TodoList;

TodoList.propTypes = {
  todos: PropTypes.array
};
