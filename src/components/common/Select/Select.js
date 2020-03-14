import React, { useState } from 'react';

const Select = ({ options, children }) => {
    const [value, setValue] = useState(options[0]);

    return (
        <div>
            <select value={value} onChange={e => setValue(e.target.value)}>
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
