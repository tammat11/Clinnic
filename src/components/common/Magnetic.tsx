import React from 'react';

// Simplified Magnetic component that just renders children without animation
const Magnetic = ({ children }: { children: React.ReactNode }) => {
    return (
        <React.Fragment>
            {children}
        </React.Fragment>
    );
};

export default Magnetic;
