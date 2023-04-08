import React, {useState} from 'react';
import TextFormField from './TextFormField';
import SelectFormField from './SelectFormField';
import { getDefaultsData } from '../../data/Utility';

import { Button, Table, Modal, Form, Input, Select, DatePicker } from "antd";


function FormContainer(props) {
    const priorities = [
        { id: '1', name: 'OVERDUE' },
        { id: '2', name: 'WORKING' },
        { id: '3', name: 'OPEN' },
        { id: '4', name: 'DONE' },
    ];


    // trigger on input change

    const handleChange = (e) => {
        let tempObj = { ...props.todo };
        if(e.target.name === "date"){
            if (e.target.value > props.todo.date) {
                tempObj[e.target.name] = e.target.value;
              }
            else{
                alert("Kindly select Future Date only")
              }
            }
        else{
                tempObj[e.target.name] = e.target.value;
        }

        props.onUpdateDraft(tempObj);
    };

    // reset the form after submission
    const handleReset = (e) => {
        props.onUpdateDraft(getDefaultsData());
        props.onChangeMode('create');

        e.preventDefault();
    };

    // trigger on form submit
    const handleSubmit = (e) => {
        e.preventDefault();

        props.mode === 'create' ? props.onCreateTodo(props.todo) : props.onEditTodo(props.todo);

        handleReset(e);
    };

    return (
        <div className="column2">
            <h2 className="is-size-3 has-text-centered">Create Todo</h2>

            <form onSubmit={handleSubmit}>
                <TextFormField
                    handleChange={handleChange}
                    inputType="date"
                    name="date"
                    label="Due Date"
                    value={props.todo.date}
                />

                <TextFormField
                    handleChange={handleChange}
                    inputType="text"
                    name="name"
                    label="Title"
                    value={props.todo.name}
                    required={true}
                />

                <TextFormField
                    handleChange={handleChange}
                    type="textarea"
                    name="description"
                    label="Description"
                    value={props.todo.description}
                    required={true}
                    row={4}
                />

                <SelectFormField
                    handleChange={handleChange}
                    name="priority"
                    label="Status"
                    options={priorities}
                    value={props.todo.priority}
                />

                <input
                    className="button is-link"
                    type="submit"
                    value={props.mode === 'create' ? 'Create' : 'Save'}
                />

                <button
                    onClick={handleReset}
                    type="button"
                    className="button is-danger is-light is-small is-pulled-right"
                >Reset Form</button>
            </form>
        </div>
    );
}

export default FormContainer;

