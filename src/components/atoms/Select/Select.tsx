import clsx from "classnames";

import "./Select.styles.css";

export type SelectProps = JSX.IntrinsicElements["select"];

const Select: React.FC<SelectProps> = ({ className, children, ...props }) => {
  return (
    <select
      className={clsx(
        "text-primary text-lg flex items-center gap-2.5 font-medium pr-16 py-4 pl-6 border border-[#DADADA] rounded-[29px] outline-none",
        className,
      )}
      {...props}
    >
      {children}
    </select>
  );
};

export default Select;
