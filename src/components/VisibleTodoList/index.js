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

const mapDispatchToProps = (dispatch) => ({
  onTodoClick(id) {
    dispatch(toggleTodo(id));
  }
});

const VisibleTodoList = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList));

export default VisibleTodoList;
