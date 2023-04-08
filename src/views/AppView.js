import React from 'react';
import FormContainer from './form/FormContainer';
import ListContainer from './list/ListContainer';

import 'bulma/css/bulma.css';
import './AppView.css';

function AppView(props) {
    return (
        <div className="container">
            <div className="columns">
                <FormContainer {...props} />
                <ListContainer {...props} />
            </div>
        </div>
    );
}

export default AppView;
