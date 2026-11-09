
"use client";

import { useEffect, useRef, useState } from "react";
import "./FAQs.css";
import Button from "../components/Button";

const faqItems = [
  {
    question: "What types of packing tape do you sell?",
    answer:
      "We offer Scotch Tape in Super Yellowish, Clear and Brown options, Double Sided Foam Tape, Double Sided Tissue Tape, Masking Tape and Stretch Film Rolls. Contact us to check available sizes.",
  },
  {
    question: "Can I buy just one roll?",
    answer:
      "Yes! You can buy a single roll. We also supply full cartons and bulk orders. There is no minimum order requirement.",
  },
  {
    question: "Do you sell packing tape in bulk?",
    answer:
      "Yes. We supply packing tape in single rolls as well as cartons for shops, businesses and other customers. Contact us for current prices and availability.",
  },
  {
    question: "How can I check the current price and available sizes?",
    answer:
      "Prices can change, so we don't display fixed prices on our website. Message us on WhatsApp with the tape type you need, and we'll help you check the current price and available sizes.",
  },
  {
    question: "Do you deliver across Karachi?",
    answer:
      "Yes, we supply customers across Karachi. Delivery charges depend on your area. Contact us on WhatsApp to confirm the details.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Our average delivery time is 1–2 days. The exact time may depend on your area and order.",
  },
  {
    question: "Where is Sindh Stationers located?",
    answer:
      "Sindh Stationers is based in Karachi, Pakistan. We currently handle orders and supply from Karachi. Contact us on WhatsApp for ordering and delivery details.",
  },
  {
    question: "How can I place an order?",
    answer:
      "Simply message us on WhatsApp with the type of tape, size and quantity you need. We'll share the current price, confirm availability and delivery charges, and help you place your order. Cash on Delivery and online payments are accepted.",
  },
];

function FAQItem({ question, answer, isOpen, isVisible, onClick, index }) {
  return (
    <article
      className={`faq-item ${isOpen ? "faq-item-open" : ""} ${
        isVisible ? "is-visible" : ""
      }`}
      data-reveal={`faq-${index}`}
    >
      <button
        className="faq-question"
        type="button"
        aria-expanded={isOpen}
        onClick={onClick}
      >
        <span>{question}</span>

        <span className="faq-toggle-icon" aria-hidden="true">
          <span />
          <span />
        </span>
      </button>

      <div className="faq-answer" aria-hidden={!isOpen}>
        <div className="faq-answer-inner">
          <p>{answer}</p>
        </div>
      </div>
    </article>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [visibleElements, setVisibleElements] = useState(() => new Set());

  const sectionRef = useRef(null);

  const handleToggle = (index) => {
    setOpenIndex((currentIndex) =>
      currentIndex === index ? null : index
    );
  };

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const elements = section.querySelectorAll("[data-reveal]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const revealId = entry.target.dataset.reveal;

            setVisibleElements((current) => {
              if (current.has(revealId)) return current;

              const updated = new Set(current);
              updated.add(revealId);

              return updated;
            });

            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="faq-section"
      id="faqs"
    >
      <div className="faq-container">

        {/* Left Column */}

        <div className="faq-left-column">
          <div
            className={`faq-intro ${
              visibleElements.has("intro") ? "is-visible" : ""
            }`}
            data-reveal="intro"
          >
            <p className="faq-eyebrow">
              <span />
              FAQ
            </p>

            <h2>Frequently Asked Questions.</h2>

            <p className="faq-intro-description">
              Quick answers about our packing tape, prices, orders, delivery,
              and shop.
            </p>
          </div>

          <div
            className={`faq-contact-card ${
              visibleElements.has("contact") ? "is-visible" : ""
            }`}
            data-reveal="contact"
          >
            <div className="faq-contact-content">
              <h3>Still Have Questions?</h3>

              <p>
                Not sure which tape you need? Message us on WhatsApp and
                we'll help you choose.
              </p>
            </div>

            <Button
              href="https://wa.me/923002279528?text=Assalam%20o%20Alaikum%2C%20mujhe%20packing%20tape%20ke%20bare%20mein%20maloomat%20chahiye."
              variant="forest"
              external
            >
              Ask Us on WhatsApp
            </Button>
          </div>
        </div>

        {/* FAQ List */}

        <div className="faq-list">
          {faqItems.map((item, index) => (
            <FAQItem
              key={item.question}
              index={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              isVisible={visibleElements.has(`faq-${index}`)}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default FAQ;
