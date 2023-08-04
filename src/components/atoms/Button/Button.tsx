import clsx from "classnames";

export type ButtonProps = JSX.IntrinsicElements["button"];

const Button: React.FC<ButtonProps> = ({ className, children, ...props }) => {
  return (
    <button
      className={clsx(
        "rounded-[29px] hover:bg-primary-dark transition-all duration-100 font-bold text-lg py-4 leading-6 px-11 outline-none bg-primary text-primary-content",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
