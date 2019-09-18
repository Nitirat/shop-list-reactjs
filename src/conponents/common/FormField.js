import React from 'react';

export default ({ input, type, label, required}) => {
    return (
        <div className="form-group">
            <label className="title">{label}</label>
            <input type={type} required={required} name={{...input}.name} className="form-control"/>
        </div>
    )

}