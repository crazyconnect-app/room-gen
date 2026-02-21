export const Button = ({
  children,
  onClick,
  variant = "primary",
  className = "",
  ...props
}) => {
  const baseStyle =
    "border-4 border-black font-extrabold transition active:translate-x-1 active:translate-y-1";

  const variants = {
    primary: "bg-yellow-400 text-black shadow-[6px_6px_0px_black]",
    secondary: "bg-white text-black shadow-[6px_6px_0px_black]",
    danger: "bg-red-500 text-white shadow-[6px_6px_0px_black]",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
};

 