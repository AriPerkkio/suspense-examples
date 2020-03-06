import React, { useState } from 'react';

const Input = ({ children }) => {
    const [value, setValue] = useState(1);

    return (
        <div>
            <input
                type='number'
                value={value}
                onChange={e => setValue(e.target.value)}
            />
            {children({ value })}
        </div>
    );
};

export default Input;
