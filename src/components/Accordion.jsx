import { useState } from "react";
import AccordionItem from "./AccordionItem.jsx";

function Accordion({ data }) {
  const [curOpen, SetCurOpen] = useState(null);

  return (
    <div className="accordion">
      {data.map((faq, index) => (
        <AccordionItem
          key={index}
          curOpen={curOpen}
          onOpen={SetCurOpen}
          number={index + 1}
          {...faq}
        />
      ))}
    </div>
  );
}

export default Accordion;
