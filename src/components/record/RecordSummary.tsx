import { useRecordSummary } from "../../hooks/useRecordSummary";
import { Section } from "../common/Section";
import RecordCategory from "./RecordCategory";

const RecordSummary = () => {
  const { data } = useRecordSummary();

  return (
    <Section>
      <div className="grid lg:grid-cols-3 cursor-pointer gap-12 grid-cols-2">
        {data.map((item) => (
          <RecordCategory
            key={item.name}
            name={item.name}
            description={item.description}
            image={item.image}
            label={item.label}
          />
        ))}
      </div>
    </Section>
  );
};

export default RecordSummary;
