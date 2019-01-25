import React from 'react';

export default ({input, label, type, meta: {touched, error}}) => (
    <div className={`form-group ${touched && error ? "has-danger" : ""}`}>
        <label>{label}</label>
        <div>
            <input className="form-control" {...input} type={type}/>
            {touched && error && <span className="error">{error}</span>}
        </div>
    </div>
)
