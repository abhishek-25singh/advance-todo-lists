import { ReduceStore } from 'flux/utils';
import TodoActionTypes from '../TodoActionTypes';
import TodoDispatcher from '../TodoDispatcher';
import { getDefaultsData } from '../Utility';


class TodoDraftStore extends ReduceStore {
    constructor() {
        super(TodoDispatcher);
    }

    getInitialState() {
        return getDefaultsData();
    }

    reduce(state, action) {
        switch (action.type) {
            case TodoActionTypes.UPDATE_DRAFT:
                return action.todo;

            default:
                return state;
        }
    }
}

export default new TodoDraftStore();