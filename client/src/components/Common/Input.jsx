import React from 'react';

export default function Input({
                                  title,
                                  type = 'text',
                                  name,
                                  placeholder = '',
                                  value,
                                  onChange,
                                  small = false,
                                  bold = false,
                                  big = false,
                                  checkbox = false,
                                  checkboxText = ''
                              }) {
    const handleChange = (e) => {
        if (onChange) {
            const targetValue = type === 'checkbox' ? e.target.checked : e.target.value;
            onChange({
                target: {
                    name,
                    value: targetValue
                }
            });
        }
    };

    if (checkbox) {
        return (
            <div className="input input_checkbox">
                <input
                    type="checkbox"
                    name={name}
                    checked={!!value}
                    onChange={handleChange}
                />
                <div className="input__checkbox-text">{checkboxText}</div>
            </div>
        );
    }

    const inputClasses = [
        'input__text',
        small ? 'input__text_small' : '',
        bold ? 'input__text_bold' : '',
        big ? 'input__text_big' : ''
    ].filter(Boolean).join(' ');

    const commonProps = {
        className: inputClasses,
        name,
        placeholder,
        value: value || '',
        onChange: handleChange
    };

    return (
        <div className={`input ${small ? 'input_small' : ''}`}>
            {title && <div className="input__title">{title}</div>}
            {type === 'textarea' ? (
                <textarea {...commonProps} rows={big ? 5 : 3} />
            ) : (
                <input type={type} {...commonProps} />
            )}
        </div>
    );
}