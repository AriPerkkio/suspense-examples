import React from 'react';

const BASE_CLASS = 'code-block-options';

const initialOptions = {
    hideFragment: false,
    hideStringify: false,
    hideCodeBlockBtn: true,
    fullScreen: false,
    indent: 4,
    fontSize: 16,
};

const options = [
    {
        name: 'hideStringify',
        label: 'Hide Stringify',
        type: 'checkbox',
    },
    {
        name: 'hideFragment',
        label: 'Hide Fragment',
        type: 'checkbox',
    },
    {
        name: 'hideCodeBlockBtn',
        label: 'Hide CodeblockButton',
        type: 'checkbox',
    },
    {
        name: 'fullScreen',
        label: 'Full Screen',
        type: 'checkbox',
    },
    {
        name: 'indent',
        label: 'Indent',
        type: 'number',
    },
    {
        name: 'fontSize',
        label: 'Font Size',
        type: 'number',
    },
];

const resolveValueKey = type => (type === 'checkbox' ? 'checked' : 'value');

const Option = ({ name, label, type, onChange, value }) => {
    const props = {
        id: name,
        type: type,
        onChange: e => onChange({ [name]: e.target[resolveValueKey(type)] }),
        [resolveValueKey(type)]: value,
    };

    return (
        <span>
            <label htmlFor={name}>{label}</label>
            <input {...props} />
        </span>
    );
};

const CodeBlockOptions = ({ values, onChange, onReset }) => (
    <div className={BASE_CLASS}>
        <button onClick={onReset}>Close all</button>

        {options.map(props => (
            <Option
                {...props}
                key={props.name}
                value={values[props.name]}
                onChange={onChange}
            />
        ))}
    </div>
);

export default CodeBlockOptions;
export { initialOptions };
