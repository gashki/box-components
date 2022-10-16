import React from 'react';
import classNames from 'classnames';

import './Switch.scss';

export interface SwitchProps {
    /** If `true`, the component is checked */
    checked?: boolean;
    /** Custom CSS class for the component */
    className?: string;
    /** Text or element to be used as a description */
    description?: React.ReactNode;
    /** If `true`, the component is disabled */
    disabled?: boolean;
    /** If `true`, the component is aligned to the right */
    isRightAligned?: boolean;
    /** Text or element to be used as a label */
    label: React.ReactNode;
    /** Name attribute for the form control */
    name?: string;
    /** Callback when the component loses focus */
    onBlur?: () => any;
    /** Callback when the component state changes */
    onChange?: () => any;
    /** Value attribute for the form control */
    value?: any;
}

const Switch = ({
    checked,
    className,
    description,
    disabled,
    isRightAligned = false,
    label,
    name,
    onBlur,
    onChange,
    ...rest
}: SwitchProps) => {
    const classes = classNames('hui-Switch', className, { 'hui-Switch--rightAligned': isRightAligned });
    const components = [
        <div key="hui-Switch-input" className="hui-Switch-input" />,
        <div key="hui-Switch-label" className="hui-Switch-label hui-text-ellipsis">
            {label}
        </div>,
    ];

    if (isRightAligned) {
        components.reverse();
    }

    return (
        <div className={classes}>
            <label className="hui-Switch-field">
                <input
                    checked={checked}
                    className="hui-Switch-checkbox"
                    disabled={disabled}
                    name={name}
                    onBlur={onBlur}
                    onChange={onChange}
                    type="checkbox"
                    {...rest}
                />
                {components}
            </label>
            {description && <div className="hui-Switch-description">{description}</div>}
        </div>
    );
};

export default Switch;
