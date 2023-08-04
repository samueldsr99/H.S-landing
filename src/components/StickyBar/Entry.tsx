export interface EntryProps {
  title?: string;
  description?: string | JSX.Element;
}

const Entry: React.FC<EntryProps> = ({ title, description }) => {
  return (
    <div className="flex flex-col">
      <h4 className="text-sm md:text-base font-medium leading-6">{title}</h4>
      {typeof description === "string" ? (
        <h5 className="text-sx md:text-base font-light leading-6">{description}</h5>
      ) : (
        description
      )}
    </div>
  );
};

export default Entry;
