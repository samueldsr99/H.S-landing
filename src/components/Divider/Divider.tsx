import clsx from "classnames/bind";

export type DividerProps = JSX.IntrinsicElements["div"];

const classes = clsx.bind({
  "divider-before": "before:bg-red-500 before:flex-grow h-0.5 w-full before:mt-1 before:mb-1 before:border",
  "divider-after": "after:bg-red-500 after:flex-grow h-0.5 w-full after:mt-1 after:mb-1 after:border",
});

const Divider: React.FC<DividerProps> = ({ children, className, ...props }) => {
  return (
    <div
      className={classes(
        "flex items-center gap-4 self-stretch h-4",
        "before:flex-grow h-0.5 w-full before:mt-1 before:mb-1 before:border",
        !!children && "after:flex-grow h-0.5 w-full after:mt-1 after:mb-1 after:border",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Divider;
