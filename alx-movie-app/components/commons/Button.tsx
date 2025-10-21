import React from "react";

interface ButtonProps {
  title: string;
  action?: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, action }) => {
  return (
    <button
      onClick={action}
      className="bg-[#E2D609] text-black font-bold py-3 px-8 rounded-lg hover:bg-yellow-500 transition duration-300"
    >
      {title}
    </button>
  );
};

export default Button;
