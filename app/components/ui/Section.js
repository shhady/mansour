"use client";

import { forwardRef } from 'react';
import { cn } from '../../lib/utils';

const Section = forwardRef(({ className, children, ...props }, ref) => {
  return (
    <section
      ref={ref}
      className={cn("py-16 md:py-24 bg-white text-black", className)}
      {...props}
    >
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
});

Section.displayName = "Section";

const SectionHeader = ({ className, centered = false, children, ...props }) => {
  return (
    <div
      className={cn(
        "mb-12",
        centered && "text-center",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const SectionTitle = ({ className, children, ...props }) => {
  return (
    <h2
      className={cn(
        "text-3xl md:text-4xl font-bold mb-4 text-black",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
};

const SectionDescription = ({ className, children, ...props }) => {
  return (
    <p
      className={cn(
        "text-lg text-gray-600",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
};

const SectionContent = ({ className, children, ...props }) => {
  return (
    <div
      className={cn(
        "mt-8",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export { Section, SectionHeader, SectionTitle, SectionDescription, SectionContent }; 