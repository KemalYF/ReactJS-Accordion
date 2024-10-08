import { useEffect } from "react";
import Accordion from "./components/Accordion";

import "./App.css";

const faqs = [
  {
    question: "What is the product?",
    answer:
      "The product is a high-quality, durable widget designed to improve efficiency.",
  },
  {
    question: "How does it work?",
    answer:
      "The widget works by integrating seamlessly with your existing systems to streamline operations.",
  },
  {
    question: "What are the benefits?",
    answer:
      "The benefits include increased productivity, reduced costs, and enhanced user satisfaction.",
  },
  {
    question: "How can I purchase it?",
    answer:
      "You can purchase the product through our online store or authorized retailers.",
  },
  {
    question: "Can I customize it?",
    answer: "Yes, you can customize the widget to suit your specific needs.",
  },
];

function App() {
  useEffect(() => {
    document.title = "Accordion";
  }, []); // Add an empty dependency array to ensure useEffect runs only once

  return (
    <>
      <Accordion data={faqs} />
    </>
  );
}

export default App;
