import React from "react";

interface ButtonProps {
  text: string;
  type?: "button" | "submit" | "reset" | undefined;
  handleClick?: () => void;
  className?: string;
  variation?: "primary";
}

const Button: React.FC<ButtonProps> = ({
  text,
  type = "button",
  handleClick = undefined,
  className = "",
  variation = "primary",
}) => {
  const baseStyles = "";

  const variationStyle = {
    primary:
      "w-48 px-4 py-3 text-xl font-bold text-white bg-primaryCyan rounded-[28px]",
  };

  const buttonStyles = `${baseStyles} ${variationStyle[variation]} ${className}`;

  return (
    <button type={type} onClick={handleClick} className={buttonStyles}>
      {text}
    </button>
  );
};

export default Button;
