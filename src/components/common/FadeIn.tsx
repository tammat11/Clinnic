import React from 'react';

// Simplified FadeIn component that just renders children without animation
const FadeIn = ({ children, className = '' }: { children: React.ReactNode, className?: string, direction?: string, delay?: number, duration?: number }) => {
    return (
        <div className={className}>
            {children}
        </div>
    );
};

export default FadeIn;
