import TodoDispatcher from './TodoDispatcher';
import TodoActionTypes from './TodoActionTypes';

const Actions = {
    dummyData(todo) {
        TodoDispatcher.dispatch({
            type: TodoActionTypes.DUMMY_DATA,
            todo
        });
    },

    changeMode(mode) {
        TodoDispatcher.dispatch({
            type: TodoActionTypes.CHANGE_MODE,
            mode
        });
    },

    createTodo(todo) {
        TodoDispatcher.dispatch({
            type: TodoActionTypes.CREATE_TODO,
            todo
        });
    },

    toggleCompleteTodo(id) {
        TodoDispatcher.dispatch({
            type: TodoActionTypes.TOGGLE_COMPLETE_TODO,
            id
        });
    },

    editTodo(todo) {
        TodoDispatcher.dispatch({
            type: TodoActionTypes.EDIT_TODO,
            todo
        });
    },

    removeTodo(id) {
        TodoDispatcher.dispatch({
            type: TodoActionTypes.REMOVE_TODO,
            id
        });
    },

    updateDraft(todo) {
        TodoDispatcher.dispatch({
            type: TodoActionTypes.UPDATE_DRAFT,
            todo
        });
    },

    sortTodos(todos) {
        TodoDispatcher.dispatch({
            type: TodoActionTypes.SORT_TODOS,
            todos
        });
    }
};

export default Actions;