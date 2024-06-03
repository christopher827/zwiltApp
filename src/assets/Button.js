import React from "react";

const Button = ({ bg, size, src, alt, margin }) => {
  const buttonStyle = {
    backgroundColor: bg,
    width: size,
    height: size,
    margin: margin,
  };
  return (
    <button
      className="m-auto hover:animate-bounce hover:cursor-pointer bg-none"
      type="button"
      style={buttonStyle}
    >
      <img src={src} alt={alt} className="h-full w-full object-cover" />
    </button>
  );
};

export default Button;

