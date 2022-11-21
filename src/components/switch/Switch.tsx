import React from 'react';
import classNames from 'classnames';

import { SwitchAlignment } from './types';

import './Switch.scss';

export interface SwitchProps {
    /** Horizontal alignment of the component */
    alignment?: SwitchAlignment;
    /** Custom CSS class for the component */
    className?: string;
    /** Text or element to be used as a description */
    description?: React.ReactNode;
    /** If `true`, the component is checked */
    isChecked?: boolean;
    /** If `true`, the component is disabled */
    isDisabled?: boolean;
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
    alignment = SwitchAlignment.LEFT,
    className,
    description,
    isChecked,
    isDisabled,
    label,
    name,
    onBlur,
    onChange,
    value,
}: SwitchProps) => {
    const isRightAligned = alignment === SwitchAlignment.RIGHT;

    const classes = classNames('hui-Switch', className, { 'hui-Switch--right': isRightAligned });
    const components = [
        <div key="hui-Switch-input" className="hui-Switch-input" />,
        <div key="hui-Switch-label" className="hui-Switch-label hui-textEllipsis">
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
                    checked={isChecked}
                    className="hui-Switch-checkbox"
                    disabled={isDisabled}
                    name={name}
                    onBlur={onBlur}
                    onChange={onChange}
                    type="checkbox"
                    value={value}
                />
                {components}
            </label>
            {description && <div className="hui-Switch-description">{description}</div>}
        </div>
    );
};

export default Switch;
