
import { useEffect, useRef, useState } from "react";
import "./WhyChooseUs.css";

import Button from "../components/Button";
import WhyChooseUsCard from "../components/WhyChooseUsCard";

import ReliableQualityIcon from "../assets/icons/Reliable Quality.svg";
import WideRangeIcon from "../assets/icons/Wide Range Of Options.svg";
import FairPricingIcon from "../assets/icons/Fair & Clear Pricing.svg";
import EasyServiceIcon from "../assets/icons/Easy, Direct Service.svg";

import WhyUsCardBg from "../assets/images/backgrounds/Why Us Card Bg.webp";

const featureCards = [
  {
    icon: ReliableQualityIcon,
    title: "Reliable Quality",
    description:
      "Packing tape made for everyday packing, shops, and businesses.",
    iconWidth: 42,
    iconHeight: 44,
  },
  {
    icon: WideRangeIcon,
    title: "Wide Range of Options",
    description:
      "Different types and sizes available for different packing needs.",
    iconWidth: 46,
    iconHeight: 46,
  },
  {
    icon: FairPricingIcon,
    title: "Fair & Clear Pricing",
    description:
      "Ask us for the current price and availability before you order.",
    iconWidth: 46,
    iconHeight: 46,
  },
  {
    icon: EasyServiceIcon,
    title: "Easy, Direct Service",
    description:
      "Message us on WhatsApp, ask for the price, and place your order.",
    iconWidth: 46,
    iconHeight: 44,
  },
];

function WhyChooseUs() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const message =
    "Assalamualaikum, mujhe packing tape ki current price aur details maloom karni hain.";

  const whatsappLink = `https://wa.me/923002279528?text=${encodeURIComponent(message)}`;

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
        threshold: 0.15,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`why-choose-us ${isVisible ? "why-visible" : ""}`}
    >
      <div className="why-choose-us-container">
        <div className="why-choose-us-header">
          <div className="why-choose-us-heading">
            <span className="why-choose-us-eyebrow">
              <span className="why-choose-us-dot"></span>
              WHY CHOOSE US
            </span>

            <h2>More Than Just Packing Tape.</h2>
          </div>

          <p className="why-choose-us-description">
            We offer quality packing tape in different types and sizes, with
            clear pricing and an easy way to order.
          </p>
        </div>

        <div className="why-choose-us-grid">
          <div className="why-feature-grid">
            {featureCards.map((card) => (
              <WhyChooseUsCard key={card.title} {...card} />
            ))}
          </div>

          <article className="no-hidden-costs-card">
            <div
              className="no-hidden-costs-background"
              style={{ backgroundImage: `url("${WhyUsCardBg}")` }}
            />

            <div className="no-hidden-costs-content">
              <div className="no-hidden-costs-info">
                <h3>No Hidden Costs</h3>

                <p>
                  Product and delivery charges are clearly explained before
                  you order.
                </p>
              </div>

              <Button
                href={whatsappLink}
                className="no-hidden-costs-button"
                variant="cream"
                external
              >
                Ask Current Price
              </Button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
