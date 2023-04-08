import { Container } from 'flux/utils';
import AppView from '../views/AppView';
import TodoActions from '../data/TodoActions';
import FormModeStore from '../data/stores/FormModeStore';
import TodoDraftStore from '../data/stores/TodoDraftStore';
import TodoStore from '../data/stores/TodoStore';

function getStores() {
    return [
        FormModeStore,
        TodoDraftStore,
        TodoStore
    ];
}

function getState() {
    return {
        mode: FormModeStore.getState(),
        todo: TodoDraftStore.getState(),
        todos: TodoStore.getState(),

        onDummyData: TodoActions.dummyData,
        onChangeMode: TodoActions.changeMode,
        onCreateTodo: TodoActions.createTodo,
        onToggleCompleteTodo: TodoActions.toggleCompleteTodo,
        onEditTodo: TodoActions.editTodo,
        onRemoveTodo: TodoActions.removeTodo,
        onUpdateDraft: TodoActions.updateDraft,
        onSortTodos: TodoActions.sortTodos
    };
}

export default Container.createFunctional(AppView, getStores, getState);