import React from 'react';
import { List } from 'semantic-ui-react';

const Todo = ({
  onTodoClick,
  onDeleteClick,
  completed,
  text
}) => (
    <List.Item
      onDoubleClick={() => console.log('double click')} active={!completed}
    >
      <List.Content floated='right'>
        <List.Icon
          verticalAlign='middle'
          onClick={onDeleteClick}
          size='large'
          name='close'
          link
          color='red'
        />
      </List.Content>
      <List.Icon
        verticalAlign='middle'
        onClick={onTodoClick}
        size='large'
        name={completed ? 'checkmark box' : 'square outline'}
        link
      />
      <List.Content
        verticalAlign='middle'
        style={{
          textDecoration:
          completed ?
          'line-through' :
          'none'
        }}
      >
        {text}
      </List.Content>
    </List.Item>
);

export default Todo;
