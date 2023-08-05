import { useState } from "react";
import clsx from "classnames";

export type FAQItemProps = JSX.IntrinsicElements["div"] & {
  type: string;
  question: string;
  answer: string;
};

const FAQItem: React.FC<FAQItemProps> = ({ className, type, question, answer, ...props }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div
      className={clsx("flex justify-between items-start py-8 border-b border-[#E6E6E6] cursor-pointer", className)}
      {...props}
      onClick={() => setOpen((prev) => !prev)}
    >
      <h4 className="w-[34%] text-lg hidden md:block shrink-0 text-primary md:text-xl font-medium leading-8">{type}</h4>
      <div className="w-full md:w-[58%] mr-12">
        <h4 className="text-lg font-light leading-8 md:font-medium md:text-xl">{question}</h4>
        {open && <p className="mt-8 font-light leading-8 text-base md:text-xl">{answer}</p>}
      </div>
      <button className="shrink-0 outline-none place-self-end self-start">
        <img
          className="w-12 h-12"
          src={open ? "/accordion-opened.svg" : "/accordion-closed.svg"}
          alt="Accordion Button"
          width={48}
          height={48}
        />
      </button>
    </div>
  );
};

export default FAQItem;
