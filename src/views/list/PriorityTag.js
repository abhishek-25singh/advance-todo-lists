import React from 'react';

function PriorityTag(props) {
    let classes = 'tag';

    switch (props.priority) {
        case '4':
            classes += ' has-background-success has-text-light ';
            break;
        case '3':
            classes += ' has-background-info has-text-light ';
            break;

        case '2':
            classes += ' has-background-warning has-text-black ';
            break;

        case '1':
            classes += ' has-background-danger has-text-black ';
            break;

        default:
    }

    const getTagName = (priority) => {
        let tag;

        switch (priority) {
            case '1':
                tag = 'OVERDUE';
            break;

            case '2':
                tag = 'WORKING';
            break;

            case '3':
                tag = 'OPEN';
            break;

            case '4':
                tag = 'DONE';
            break;

            default:
        }

        return tag;
    };

    return (
        <span className={classes}>
            {getTagName(props.priority)}
        </span>
    );
}

export default PriorityTag;