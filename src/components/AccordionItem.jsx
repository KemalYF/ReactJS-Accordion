import { useState } from "react";

export default function AccordionItem({
  number,
  question,
  answer,
  curOpen,
  onOpen,
}) {
  // const [isOpen, SetIsOpen] = useState(false);
  const isOpen = number === curOpen;

  function handleToogle() {
    // SetIsOpen((isOpen) => !isOpen);

    onOpen(isOpen ? null : number);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToogle}>
      <p className="number">{number < 10 ? `0${number}` : number}</p>
      <p className="question">{question}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <p className="content-box">{answer}</p>}
    </div>
  );
}
