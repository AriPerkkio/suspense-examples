import React, { useState } from 'react';

const Select = ({ label, options, children }) => {
    const [value, setValue] = useState(options[0]);

    return (
        <div>
            <label htmlFor={label} className='common-label'>
                {label}
            </label>

            <select
                id={label}
                value={value}
                onChange={e => setValue(e.target.value)}>
                {options.map(opt => (
                    <option key={opt} value={opt}>
                        {opt}
                    </option>
                ))}
            </select>

            <div>{children(value)}</div>
        </div>
    );
};

export default Select;
