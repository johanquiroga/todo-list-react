import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import TodoList from '../TodoList';
import { getVisibleTodos } from '../../store/reducers';
import { toggleTodo } from '../../store/actions';

const mapStateToProps = (state, { match: { params }}) => ({
  todos: getVisibleTodos(state, params.filter || 'all')
});

const VisibleTodoList = withRouter(connect(
  mapStateToProps,
  { onTodoClick: toggleTodo }
)(TodoList));

export default VisibleTodoList;
