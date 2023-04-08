import Immutable from 'immutable';
import { getDefaultsData } from './Utility';

const Todo = Immutable.Record(getDefaultsData());

export default Todo;