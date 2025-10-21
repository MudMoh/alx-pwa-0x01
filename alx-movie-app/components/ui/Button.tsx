import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;
  className?: string;
};

export default function Button({ title, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={[
        "inline-flex items-center justify-center px-3 py-1.5 rounded-md",
        "text-sm font-medium",
        className ?? "",
      ].join(" ").trim()}
      aria-label={title}
    >
      {title}
    </button>
  );
}
