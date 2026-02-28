import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import React from 'react';
import { Magnetic } from './Magnetic';

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: 'primary' | 'secondary';
    children: React.ReactNode;
    className?: string;
}

export const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    children,
    className = "",
    ...props
}) => {
    const baseClass = variant === 'primary' ? 'btn-primary' : 'btn-secondary';

    return (
        <Magnetic>
            <motion.button
                className={`${baseClass} ${className}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                {...props}
            >
                {children}
            </motion.button>
        </Magnetic>
    );
};
