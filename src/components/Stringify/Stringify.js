import React from 'react';

const Stringify = ({ children, indent, className }) => (
    <pre className={`stringify ${className || ''}`}>
        {JSON.stringify(children, null, indent)}
    </pre>
);

export default Stringify;
