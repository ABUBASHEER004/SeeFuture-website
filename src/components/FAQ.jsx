import { useState } from "react";

const faqs = [
  {
    question: "What services does SeeFuture Tech Hub provide?",
    answer:
      "We provide website development, mobile app development, cybersecurity, AI solutions, cloud services, and technology training.",
  },
  {
    question: "Do you work with startups?",
    answer:
      "Yes. We work with startups, small businesses, NGOs, educational institutions, and larger organizations.",
  },
  {
    question: "Do you offer technology training?",
    answer:
      "Yes. Our academy offers practical training in web development, Flutter, cybersecurity, AI, cloud computing, and more.",
  },
  {
    question: "How can I request a quote?",
    answer:
      "Visit our Contact page or use the 'Get a Quote' button in the navigation bar to reach us.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-blue-700">
          Frequently Asked Questions
        </h2>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full text-left px-6 py-5 font-semibold flex justify-between items-center"
              >
                <span>{faq.question}</span>
                <span>{openIndex === index ? "-" : "+"}</span>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default FAQ;
