import { ReduceStore } from 'flux/utils';
import TodoActionTypes from '../TodoActionTypes';
import TodoDispatcher from '../TodoDispatcher';

class FormModeStore extends ReduceStore {
    constructor() {
        super(TodoDispatcher);
    }

    getInitialState() {
        return 'create';
    }

    reduce(state, action) {
        switch (action.type) {
            case TodoActionTypes.CHANGE_MODE:
                return action.mode;

            default:
                return state;
        }
    }
}

export default new FormModeStore();