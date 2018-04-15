import React from 'react';
import { Grid, Container, Segment, Header } from 'semantic-ui-react';
import AddTodo from '../AddTodo';
import VisibleTodoList from '../VisibleTodoList';
import Footer from '../Footer';

const TodoApp = () => (
  <div>
    <Container text>
      <Grid
        textAlign='center'
        verticalAlign='middle'
        padded
      >
        <Grid.Column>
          <Header as='h1' color='teal'>
            Todos
          </Header>
          <AddTodo />
          <VisibleTodoList />
          <Footer />
        </Grid.Column>
      </Grid>
    </Container>
  </div>
);

export default TodoApp;
