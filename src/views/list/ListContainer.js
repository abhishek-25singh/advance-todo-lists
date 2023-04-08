import React, { useState, useEffect } from 'react';
import TextFormField from '../form/TextFormField';
import ProgressBar from './ProgressBar';
import ItemRow from './ItemRow';

// import { Space, Table, Tag } from 'antd';

import {
    getDummyData,
    sortByDateAsc,
    sortByDateDesc,
    sortByNameAsc,
    sortByNameDesc,
    sortByPriorityAsc,
    sortByPriorityDesc
} from '../../data/Utility';

function ListContainer(props) {
    const [search, setSearch] = useState('');
    const [sort, setSort] = useState('asc');

    // search todos by name
    const handleSearch = (e) => {
        setSearch(e.target.value);
    };


    // sort on list item header label click
    const handleSort = (e) => {
        let sortedTodos;

        switch (e.target.dataset.sortBy) {
            case 'date':
                if (sort === 'asc') {
                    sortedTodos = sortByDateAsc(props.todos);
                    setSort('desc');
                } else {
                    sortedTodos = sortByDateDesc(props.todos);
                    setSort('asc');
                }
                break;

            case 'name':
                if (sort === 'asc') {
                    sortedTodos = sortByNameAsc(props.todos);
                    setSort('desc');
                } else {
                    sortedTodos = sortByNameDesc(props.todos);
                    setSort('asc');
                }
                break;

            case 'priority':
                if (sort === 'asc') {
                    sortedTodos = sortByPriorityAsc(props.todos);
                    setSort('desc');
                } else {
                    sortedTodos = sortByPriorityDesc(props.todos);
                    setSort('asc');
                }
                break;

            default:
        }

        props.onSortTodos(sortedTodos);
    };

    // initialize list test data
    useEffect(() => {
        getDummyData().forEach(data => {
            props.onDummyData(data);
        });
    }, []);

    return (
        <div className="column1">
            <h2 className="is-size-3 has-text-centered">Todo Lists</h2>

            <TextFormField
                handleChange={handleSearch}
                inputType="search"
                name="search"
                label="Search Todo"
            />

            <table className="table is-hoverable is-fullwidth">
                <thead>
                    <tr className="has-background-link">
                        <th className="has-text-light" data-sort-by="date" onClick={handleSort}>Due date ^</th>
                        <th className="has-text-light" data-sort-by="date" onClick={handleSort}>Created on^</th>
                        <th className="has-text-light" data-sort-by="name" onClick={handleSort}>Title ^</th>
                        <th className="has-text-light" data-sort-by="name" onClick={handleSort}>Description ^</th>
                        <th className="has-text-light" data-sort-by="priority" onClick={handleSort}>Status ^</th>
                        <th className="has-text-light">Edit&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {[...props.todos.values()].reverse().map(item =>
                        item.name.toLowerCase().includes(search) &&
                        <ItemRow
                            key={item.id}
                            item={item}
                            {...props}
                        />
                    )}
                    
                </tbody>
            </table>
        </div>
    );
}

export default ListContainer;