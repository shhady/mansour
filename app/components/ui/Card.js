"use client";

import { cn } from '../../lib/utils';

export const Card = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        'bg-white text-black rounded-lg border border-gray-200 shadow-sm overflow-hidden',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardHeader = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        'p-6 border-b border-gray-200 dark:border-gray-700',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardTitle = ({
  children,
  className,
  ...props
}) => {
  return (
    <h3
      className={cn(
        'text-xl font-semibold text-black dark:text-white',
        className
      )}
      {...props}
    >
      {children}
    </h3>
  );
};

export const CardDescription = ({
  children,
  className,
  ...props
}) => {
  return (
    <p
      className={cn(
        'text-gray-600 dark:text-gray-300 mt-1',
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
};

export const CardContent = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        'p-6',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardFooter = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        'p-6 border-t border-gray-200 dark:border-gray-700',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}; 