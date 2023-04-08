import { ReduceStore } from 'flux/utils';
import Immutable from 'immutable';
import TodoActionTypes from '../TodoActionTypes';
import TodoDispatcher from '../TodoDispatcher';
import Counter from '../Counter';
import Todo from '../Todo';


class TodoStore extends ReduceStore {
    constructor() {
        super(TodoDispatcher);
    }

    getInitialState() {
        return Immutable.OrderedMap();
    }

    reduce(state, action) {
        switch (action.type) {
            case TodoActionTypes.DUMMY_DATA:
                return state.set(
                    action.todo.id,
                    new Todo(action.todo)
                );

            case TodoActionTypes.CREATE_TODO:
                if (! action.todo.name) {
                    return state;
                }

                const id = Counter.increment();
                return state.set(id, new Todo({
                    id,
                    complete: false,
                    name    : action.todo.name,
                    date    : action.todo.date,
                    priority: action.todo.priority,
                    timestamp: action.todo.timestamp,
                    description: action.todo.description,
                    
                }));

            case TodoActionTypes.TOGGLE_COMPLETE_TODO:
                return state.update(
                    action.id,
                    todo => todo.set('complete', !todo.complete)
                );

            case TodoActionTypes.EDIT_TODO:
                // Eh! don't like this process :(
                return state.setIn([action.todo.id, 'date'], action.todo.date)
                            .setIn([action.todo.id, 'name'], action.todo.name)
                            .setIn([action.todo.id, 'description'], action.todo.description)
                            .setIn([action.todo.id, 'priority'], action.todo.priority);

            case TodoActionTypes.REMOVE_TODO:
                return state.delete(action.id);
        
            case TodoActionTypes.SORT_TODOS:
                return Immutable.OrderedMap(action.todos);

            default:
                return state;
        }
    }
}

export default new TodoStore();