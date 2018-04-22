import React from 'react';
import Todo from '../Todo';
import { List } from 'semantic-ui-react';

const TodoList = ({
  todos,
  onTodoClick,
  onDeleteClick
}) => (
  <List link divided relaxed size='big'>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onTodoClick={() => onTodoClick(todo.id)}
        onDeleteClick={() => onDeleteClick(todo.id)}
      />
    )}
  </List>
);

export default TodoList;
