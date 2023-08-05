import clsx from "classnames/bind";

export type CardProps = JSX.IntrinsicElements["article"];

export type CardEntryProps = JSX.IntrinsicElements["div"] & {
  title?: string;
  content?: string;
};

const classes = clsx.bind({
  "card-container": "bg-white border border-[#DADADA] rounded-[4px] px-6 pt-8 pb-4",
  "title-label": "text-primary text-sm font-medium",
  content: "text-[#535353] text-sm font-light leading-6",
});

export const CardTitle: React.FC<JSX.IntrinsicElements["h3"]> = ({ children, className, ...props }) => (
  <h3 className={classes("title-label", className)} {...props}>
    {children}
  </h3>
);

export const CardEntry: React.FC<CardEntryProps> = ({ className, title, content, ...props }) => (
  <div className={classes("", className)} {...props}>
    <h4 className={classes("title-label")}>{title}</h4>
    <p className={classes("content")}>{content}</p>
  </div>
);

const Card: React.FC<CardProps> = ({ children, className, ...props }) => {
  return (
    <article className={classes("card-container", className)} {...props}>
      {children}
    </article>
  );
};

export default Card;
