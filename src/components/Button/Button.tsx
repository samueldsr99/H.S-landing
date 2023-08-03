import clsx from "@/utils/clsx";

import "./Button.styles.css";

export type ButtonProps = JSX.IntrinsicElements["button"];

const Button: React.FC<ButtonProps> = ({ className, children, ...props }) => {
  return (
    <button className={clsx("button", className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
