interface IButton {
  type?: "button" | "submit" | "reset";
  variant?:
    | "ghost"
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "outline"
    | "action"
    | "link"
    | "error";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  className?: string;
  children?: React.ReactNode;
  block?: boolean;
  loading?: boolean;
  disabled?: boolean;
  href?: string;
  roundedFull?: boolean;
  onClick?: () => void;
}

const Button = (buttonProps: IButton) => {
  const {
    type = "button",
    variant = "primary",
    size = "md",
    className,
    children,
    onClick,
    block = false,
    loading = false,
    disabled = false,
    href,
    roundedFull = false,
  } = buttonProps;
  const baseClasses =
    "inline-flex items-center justify-center rounded font-semibold transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";
  const variantClasses = {
    ghost: "bg-gray-100 hover:bg-gray-200 text-gray-700",
    primary: "bg-orange-800 hover:bg-orange-600 text-white",
    secondary: "bg-gray-500 hover:bg-gray-600 text-white",
    danger: "bg-red-700 hover:bg-red-800 text-white",
    outline:
      "bg-transparent border border-gray-300 hover:bg-gray-100 text-gray-700",
    action: "bg-blue-500 hover:bg-blue-600 text-white",
    success: "bg-green-500 hover:bg-green-600 text-white",
    warning: "bg-yellow-500 hover:bg-yellow-600 text-white",
    info: "bg-blue-500 hover:bg-blue-600 text-white",
    link: "text-blue-500 hover:text-blue-600",
    error: "bg-red-500 hover:bg-red-600 text-white",
  };
  const sizeClasses = {
    xs: "px-2 py-1 text-xs",
    sm: "px-3 py-1 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-7 py-3.5 text-lg",
    xl: "px-8 py-4 text-xl",
  };

  const roundedClass = roundedFull ? "rounded-full" : "";
  const blockClass = block ? "w-full" : "";
  if (href) {
    return (
      <a
        href={href}
        className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${roundedClass} ${blockClass} ${className}`}
        onClick={onClick}
        aria-disabled={loading || disabled}
      >
        {children}
      </a>
    );
  }
  return (
    <button
      type={type}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${roundedClass} ${blockClass} ${className}`}
      onClick={onClick}
      disabled={loading || disabled}
    >
      {children}
    </button>
  );
};

export default Button;
