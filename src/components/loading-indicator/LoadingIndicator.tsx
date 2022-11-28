import React from 'react';
import classNames from 'classnames';

import { LoadingIndicatorPosition, LoadingIndicatorSize, LoadingIndicatorVisibility } from './types';

import './LoadingIndicator.scss';

export interface LoadingIndicatorProps {
    /** Content to render in the component */
    children?: React.ReactNode;
    /** Custom CSS class for the component */
    className?: string;
    /** If `true`, the pulse animation is enabled */
    isLoading?: boolean;
    /** Vertical position of the component */
    position?: LoadingIndicatorPosition;
    /** Size of the pulse animation */
    size?: LoadingIndicatorSize;
    /** Visibility of the wrapped content */
    visibility?: LoadingIndicatorVisibility;
}

const LoadingIndicator = ({
    children,
    className,
    isLoading,
    position = LoadingIndicatorPosition.MIDDLE,
    size = LoadingIndicatorSize.REGULAR,
    visibility = LoadingIndicatorVisibility.BLURRED,
}: LoadingIndicatorProps) => {
    if (isLoading === false) {
        return children;
    }

    const classes = classNames('hui-LoadingIndicator', `hui-LoadingIndicator--${size}`, className, {
        [`hui-LoadingIndicator--${position}`]: children,
        [`hui-is-${visibility}`]: children,
    });

    // `isLoading` must not have a default value
    const isEnabled = children ? isLoading : true;

    return (
        <div className={classes}>
            {children}
            {isEnabled && (
                <div className="hui-LoadingIndicator-overlay">
                    <div className="hui-LoadingIndicator-pulse">
                        <div />
                        <div />
                        <div />
                    </div>
                </div>
            )}
        </div>
    );
};

export default LoadingIndicator;
