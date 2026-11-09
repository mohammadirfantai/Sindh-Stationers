
import { useEffect, useRef, useState } from "react";
import "./QuickFacts.css";

import StarIcon from "../assets/icons/Star Icon in quick facts.svg";

const facts = [
  "No Minimum Order",
  "Delivery Across Karachi",
  "Quality Tapes",
  "Online Payments Accepted",
  "Online Orders",
  "Clear Pricing",
  "Clear Communication",
];

function QuickFacts() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0,
        rootMargin: "0px 0px 100px 0px",
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`quick-facts ${isVisible ? "quick-facts-visible" : ""}`}
    >
      <div className="quick-facts-track">
        {[1, 2].map((group) => (
          <div
            className="quick-facts-group"
            key={group}
            aria-hidden={group === 2}
          >
            {facts.map((fact, index) => (
              <div className="quick-fact-item" key={`${group}-${index}`}>
                <span>{fact}</span>
                <img src={StarIcon} alt="" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default QuickFacts;
