import { useMemo, useState } from "react";

import Select from "@/components/atoms/Select";
import FAQItem, { FAQItemProps } from "@/components/FAQItem";
import useGetDataScienceApprenticeshipZeptolab from "@/hooks/useGetDataScienceApprenticeshipZeptolab";

export interface FAQListProps {
  faqs: FAQItemProps[];
}

interface HeaderProps {
  categories: string[];
  onSelectCategory: (category: string) => void;
}

const Header: React.FC<HeaderProps> = ({ categories, onSelectCategory }) => (
  <div className="flex flex-col md:flex-row justify-between md:items-center">
    <h2 className="text-primary font-medium leading-[56px] text-4xl md:text-5xl">Frequently asked questions</h2>
    <div className="mt-8 md:mt-0 inline-flex items-center gap-6">
      <span className="text-[#6A6A6A] font-light leading-6 text-base shrink-0">Filter by:</span>
      <Select defaultValue="" onChange={(e) => onSelectCategory(e.target.value)}>
        <option value="">Program conditions</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </Select>
    </div>
  </div>
);

const FAQList: React.FC<FAQListProps> = ({ faqs }) => (
  <ul className="px-2 mt-16">
    {faqs.map((faq) => (
      <li className="md:first:border-t" key={faq.question}>
        <FAQItem {...faq} />
      </li>
    ))}
  </ul>
);

const FAQ: React.FC = () => {
  const { data, isLoading } = useGetDataScienceApprenticeshipZeptolab();
  const [filterBy, setFilterBy] = useState<string>("");

  const faqs: FAQItemProps[] = useMemo(
    () =>
      data?.scholarship?.faqs?.items
        ?.filter((faq) => !filterBy?.length || faq.type === filterBy)
        ?.map((faq) => ({
          type: faq.type,
          question: faq.question,
          answer: faq.answer?.[0]?.data,
        })) ?? [],
    [data?.scholarship?.faqs?.items, filterBy],
  );

  const categories = useMemo(() => data?.scholarship?.faqs?.categories ?? [], [data?.scholarship?.faqs?.categories]);

  return !isLoading ? (
    <section className="mt-40" id="faq">
      <div className="container max-w-7xl mx-auto px-4 md:px-10">
        <Header categories={categories} onSelectCategory={(category) => setFilterBy(category)} />
        <FAQList faqs={faqs} />
      </div>
    </section>
  ) : (
    <></>
  );
};

export default FAQ;
