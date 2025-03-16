"use client";

import Link from 'next/link';
import { forwardRef } from 'react';
import { cn } from '../../lib/utils';

const buttonVariants = {
  primary: 'bg-primary hover:bg-primary-dark text-white',
  secondary: 'bg-secondary hover:bg-secondary/90 text-white',
  outline: 'border border-primary text-primary hover:bg-primary/10',
  ghost: 'hover:bg-gray-100 text-black',
  light: 'bg-white text-black border border-gray-200 hover:bg-gray-100',
  danger: 'bg-danger hover:bg-danger/90 text-white',
};

const buttonSizes = {
  sm: 'py-1 px-3 text-sm',
  md: 'py-2 px-4',
  lg: 'py-3 px-6 text-lg',
};

const Button = forwardRef(
  (
    {
      children,
      className,
      variant = 'primary',
      size = 'md',
      disabled = false,
      type = 'button',
      fullWidth = false,
      href,
      ...props
    },
    ref
  ) => {
    const buttonClasses = cn(
      'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
      buttonVariants[variant],
      buttonSizes[size],
      fullWidth && 'w-full',
      className
    );

    if (href) {
      return (
        <Link href={href} className={buttonClasses} {...props}>
          {children}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        className={buttonClasses}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants }; 