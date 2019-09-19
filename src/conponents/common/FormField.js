import React from 'react';

export default ({ input, type, label, required, meta}) => {
    console.log(meta);
    return (
        <div className="form-group">
            <label className="title">{label}</label>
            <input type={type} required={required} name={{...input}.name} className="form-control"/>
            { meta.error && meta.touched && 
                (
                    <div className="mt-2 text-danger title">{meta.error}</div>
                )
            }
        </div>
    )

}