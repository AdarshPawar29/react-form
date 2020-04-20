import React from 'react';
import PropTypes from 'prop-types';

function FormFormate(props) {
    console.log(props.fields);

    addPerson() {
        
    }
    return (
        <div>
            <h1>The Form</h1>
            <label>Details</label>
            {
                props.fields.map((field, id) => (
                    <div key={field.id}>
                        <input value={field.name}/>
                        <input value={field.email}/>
                    </div>
                ))
            }
            <button onClick={(e) => this.addPerson(e)}>Add Person</button>
            <button>Submit</button>
        </div>
    )
}

FormFormate.propTypes ={
    fields: PropTypes.array.isRequired
}

export default FormFormate;

