import React from "react";

export const TextInput = ({ handleChange, isFormValidOnBlur, errorField, label, type, id, name }) => {
    return (
        <div>
            <div className="form-row" /* textInput */>
                <div className="form-key">
                    <label htmlFor={id}>{label}</label>
                </div>
                <div className="form-value value1">
                    <input type={type} id={id} name={name} onChange={handleChange} onBlur={isFormValidOnBlur} />
                    <div className="error-field">{errorField && <p>{label} is required</p>}</div>
                </div>
            </div>
        </div>
    );
};
