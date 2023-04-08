import React from 'react';

function ProgressBar(props) {
    const todosCompletedCount = () => {
        return props.todos.filter(todo => todo.complete).size;
    };

    const percentage = () => {
        return (todosCompletedCount() / props.todos.size) * 100;
    };

    return (
        <progress
            className="progress is-success"
            value={percentage().toString()}
            max="100"
        >
            {percentage()}%
        </progress>
    );
}

export default ProgressBar;