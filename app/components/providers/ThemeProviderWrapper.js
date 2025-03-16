"use client";

export default function ThemeProviderWrapper({ children }) {
  return (
    <div className="light">
      {children}
    </div>
  );
} 