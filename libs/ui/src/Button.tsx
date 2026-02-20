import React from "react";

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export function Button({ children, onClick }: ButtonProps): JSX.Element {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "0.5rem 1rem",
        backgroundColor: "#0070f3",
        color: "white",
        border: "none",
        borderRadius: "0.375rem",
        cursor: "pointer",
        fontSize: "1rem",
      }}
    >
      {children}
    </button>
  );
}
