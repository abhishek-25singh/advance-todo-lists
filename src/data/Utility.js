export function getDefaultsData() {
    return {
        id      : 0,
        complete: false,
        date    : getTodaysDate(),
        timestamp: getTodaysDate(),
        name    : '',
        description: '',
        priority: '3',

    };
}

export function getDummyData() {
    return [
        { id: 1, complete: false, date: '2024-11-02', timestamp: '2038-12-30', name: 'Go to store', description: 'store in C sector', priority: '3' },
        { id: 2, complete: false, date: '2025-09-04', timestamp: '2043-01-23', name: 'Buy some food', description: 'burger pizza momos pasta maggi', priority: '1' },
        { id: 3, complete: false, date: '2034-11-05', timestamp: '2039-21-03', name: 'Go to school', description: 'St rons H S Scholl', priority: '2' },
        { id: 4, complete: true, date: '2034-01-07', timestamp: '2036-02-13', name: 'Call Mr. John', description: '9823445727', priority: '3' },
        { id: 5, complete: false, date: '2028-11-12', timestamp: '2035-01-11', name: 'Do something fun', description: 'crack a joke', priority: '3' },
        { id: 6, complete: true, date: '2048-07-23', timestamp: '2023-08-02', name: 'Come back home', description: 'A 56 Near NH Colony Noida UP', priority: '1' },
        { id: 7, complete: true, date: '2029-11-23', timestamp: '2012-17-08', name: 'Watch movie', description: 'Stay till the end', priority: '2' },
        { id: 8, complete: false, date: '2082-09-27', timestamp: '2082-11-09', name: 'Go to bed', description: 'max to max at 11 pm', priority: '3' }
    ];
}

export function getCounterInitialValue() {
    return getDummyData().length + 1;
}

export function getTodaysDate() {
    const today = new Date();
    const day   = String(today.getDate()).padStart(2, '0'); 
    const month = String(today.getMonth() + 1).padStart(2, '0');  // January is 0!

    return `${today.getFullYear()}-${month}-${day}`;
}

/**
 * Sort functions
 * ============== 
 */

export function sortByDateAsc(todos) {
    return todos.sort((a, b) => a.date > b.date ? 1 : -1);
}

export function sortByDateDesc(todos) {
    return todos.sort((a, b) => a.date > b.date ? -1 : 1);
}

export function sortByNameAsc(todos) {
    return todos.sort((a, b) => a.name > b.name ? 1 : -1);
}

export function sortByNameDesc(todos) {
    return todos.sort((a, b) => a.name > b.name ? -1 : 1);
}

export function sortByPriorityAsc(todos) {
    return todos.sort((a, b) => a.priority > b.priority ? 1 : -1);
}

export function sortByPriorityDesc(todos) {
    return todos.sort((a, b) => a.priority > b.priority ? -1 : 1);
}
