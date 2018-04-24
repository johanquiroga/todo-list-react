import { normalize } from 'normalizr';
import * as schema from './schema';
import { getIsFetching, getIsActionLoading } from '../reducers';
import * as api from '../../api';

export const fetchTodos = (filter) => (dispatch, getState) => {
  if (getIsFetching(getState(), filter)) {
    return Promise.resolve();
  }

  dispatch({
    type: 'FETCH_TODOS_REQUEST',
    filter,
  });

  return api.fetchTodos(filter).then(
    response => {
      dispatch({
        type: 'FETCH_TODOS_SUCCESS',
        filter,
        response: normalize(response, schema.arrayOfTodos)
      });
    },
    error => {
      dispatch({
        type: 'FETCH_TODOS_FAILURE',
        filter,
        message: error.message || 'Something went wrong.'
      });
    }
  );
};

export const addTodo = (text) => (dispatch, getState) => {
  const actionName = 'add';

  if (getIsActionLoading(getState(), actionName)) {
    return Promise.resolve();
  }

  dispatch({
    type: 'ADD_TODO_REQUEST',
    actionName,
  });

  return api.addTodo(text).then(
    response => {
      dispatch({
        type: 'ADD_TODO_SUCCESS',
        response: normalize(response, schema.todo),
        actionName
      });
    },
    error => {
      dispatch({
        type: 'ADD_TODO_FAILURE',
        actionName,
        message: error.message || 'Something went wrong.'
      });
    }
  );
}

export const toggleTodo = (id) => (dispatch, getState) => {
  const actionName = 'toggle';

  if (getIsActionLoading(getState(), actionName)) {
    return Promise.resolve();
  }

  dispatch({
    type: 'TOGGLE_TODO_REQUEST',
    actionName,
  });

  return api.toggleTodo(id).then(
    response => {
      dispatch({
        type: 'TOGGLE_TODO_SUCCESS',
        actionName,
        response: normalize(response, schema.todo),
      });
    },
    error => {
      dispatch({
        type: 'TOGGLE_TODO_FAILURE',
        actionName,
        message: error.message || 'Something went wrong.'
      });
    }
  );
};

export const deleteTodo = (id) => (dispatch, getState) => {
  const actionName = 'delete';

  if (getIsActionLoading(getState(), actionName)) {
    return Promise.resolve();
  }

  dispatch({
    type: 'DELETE_TODO_REQUEST',
    actionName,
  });

  return api.deleteTodo(id).then(
    response => {
      if (response.deleted) {
        dispatch({
          type: 'DELETE_TODO_SUCCESS',
          response: normalize(response.todo, schema.todo),
          actionName,
        });
      } else {
        dispatch({
          type: 'DELETE_TODO_FAILURE',
          actionName,
          message: response.message || 'Something went wrong.'
        });
      }
    },
    error => {
      dispatch({
        type: 'DELETE_TODO_FAILURE',
        actionName,
        message: error.message || 'Something went wrong.'
      });
    }
  );
};
