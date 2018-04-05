import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import TodoList from '../TodoList';
import { toggleTodo } from '../../store/actions';

const getVisibleTodos = (
  todos,
  filter
) => {
  switch (filter) {
    case 'all':
      return todos;
    case 'active':
      return todos.filter(todo => !todo.completed);
    case 'completed':
      return todos.filter(todo => todo.completed);
    default:
      return todos;
  }
};

const mapStateToProps = (state, { match: { params }}) => ({
  todos: getVisibleTodos(state.todos,params.filter || 'all')
});

const VisibleTodoList = withRouter(connect(
  mapStateToProps,
  { onTodoClick: toggleTodo }
)(TodoList));

export default VisibleTodoList;
