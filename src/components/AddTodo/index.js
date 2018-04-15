import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Segment } from 'semantic-ui-react';
import { addTodo } from '../../store/actions';

class AddTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ''
    };
  }

  render() {
    const { dispatch } = this.props;
    const { input } = this.state;

    return (
        <Form
          size='large'
          onSubmit={() => {
            if (input.trim() !== '') {
              dispatch(addTodo(input.trim()));
              this.setState({ input: '' });
            }
          }}
        >
          <Segment basic>
            <Form.Input
              name='input'
              value={input}
              placeholder='What do you need?'
              fluid
              onChange={(e, {name, value}) => this.setState({ [name]: value })}
            />
          </Segment>
        </Form>
    );
  }
}
AddTodo = connect()(AddTodo);

export default AddTodo;
