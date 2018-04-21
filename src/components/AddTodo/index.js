import React from 'react';
import { connect } from 'react-redux';
import { withState, compose } from 'recompose';
import { Form, Segment } from 'semantic-ui-react';
import { addTodo } from '../../store/actions';

let AddTodo = ({dispatch, input, setInput}) => (
    <Form
      size='large'
      onSubmit={() => {
        if (input.trim() !== '') {
          dispatch(addTodo(input.trim()));
          setInput('');
        }
      }}
    >
      <Segment basic>
        <Form.Input
          name='input'
          value={input}
          placeholder='What do you need?'
          fluid
          onChange={(e, {name, value}) => setInput(value)}
        />
      </Segment>
    </Form>
);
AddTodo = compose(
  connect(),
  withState('input', 'setInput', ''),
)(AddTodo);

export default AddTodo;
