import { getCounterInitialValue } from './Utility';

let _counter = getCounterInitialValue();

const Counter = {
    increment() {
        return _counter++;
    }
};

export default Counter;