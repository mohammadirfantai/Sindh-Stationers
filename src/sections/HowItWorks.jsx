
import { useEffect, useRef } from "react";
import "./HowItWorks.css";

import Button from "../components/Button";

import sectionBg from "../assets/images/backgrounds/Section Bg.webp";
import fatherImage from "../assets/images/about/Mohammad Irfan Tai.webp";

import scotchTape from "../assets/images/products/Scotch Tape - Super Yellowish.webp";
import maskingTape from "../assets/images/products/Masking Tape.webp";
import foamTape from "../assets/images/products/Double Sided - Foam Tape.webp";

const products = [
  { name: "Scotch Tape", image: scotchTape },
  { name: "Masking Tape", image: maskingTape },
  { name: "Double Sided | Foam Tape", image: foamTape },
];

function CartIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="14"
      height="14"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 3H5L7.2 14.2C7.3 14.7 7.8 15 8.3 15H18.5C19 15 19.4 14.7 19.6 14.2L21 7H6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="9" cy="20" r="1.5" fill="currentColor" />
      <circle cx="18" cy="20" r="1.5" fill="currentColor" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="14"
      height="14"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="12" cy="8" r="4" fill="currentColor" />
      <path
        d="M4 21C4 16.8 7.6 14 12 14C16.4 14 20 16.8 20 21"
        fill="currentColor"
      />
    </svg>
  );
}

/* ========================================
   STEP 1: CHOOSE YOUR TAPE
======================================== */

function ProductSelectionVisual() {
  return (
    <div className="how-visual how-visual-products">
      {products.map((product) => (
        <div className="selection-product" key={product.name}>
          <img src={product.image} alt={product.name} />

          <div className="selection-product-info">
            <span className="selection-product-name">
              {product.name}
            </span>

            <span className="selection-product-description">
              Multiple Sizes Available
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ========================================
   STEP 2: ASK FOR PRICE
======================================== */

function PriceChatVisual() {
  return (
    <div className="how-visual how-visual-chat">
      <div className="chat-outgoing">
        <div className="chat-outgoing-bubble">
          <p>
            Assalam o Alaikum, Johnson packing tape ka current price bata
            dein?
          </p>

          <div className="chat-message-meta">
            <span>11:02 AM</span>
            <span className="chat-double-tick" aria-label="Message delivered">
              ✓✓
            </span>
          </div>
        </div>

        <div className="chat-user-avatar">
          <UserIcon />
        </div>
      </div>

      <div className="chat-incoming">
        <img
          className="chat-father-avatar"
          src={fatherImage}
          alt="Mohammad Irfan Tai"
        />

        <div className="chat-incoming-bubble">
          <span className="chat-father-name">
            Mohammad Irfan Tai
          </span>

          <p>
            Wa Alaikum Assalam. Jee, current price bata deta hoon. Apko kitni
            chahiye?
          </p>

          <span className="chat-message-time">11:03 AM</span>
        </div>
      </div>
    </div>
  );
}

/* ========================================
   STEP 3: PLACE YOUR ORDER
======================================== */

function OrderTrackerVisual() {
  return (
    <div className="how-visual how-visual-order">
      <div className="order-tracker-header">
        <div className="order-tracker-title">
          <CartIcon />
          <span>Order Tracker</span>
        </div>

        <span className="order-tracker-count">1 Items</span>
      </div>

      <div className="order-tracker-divider" />

      <div className="order-product-card">
        <img src={maskingTape} alt="Masking Tape" />

        <div className="order-product-info">
          <span className="order-product-name">
            Masking Tape (Johnson)
          </span>

          <div className="order-confirmed-button">
            Order Confirmed
          </div>
        </div>
      </div>

      <div className="order-skeleton-card order-skeleton-card-1">
        <div className="skeleton-image" />

        <div className="skeleton-content">
          <span />
          <span />
        </div>
      </div>

      <div className="order-skeleton-card order-skeleton-card-2">
        <div className="skeleton-image" />

        <div className="skeleton-content">
          <span />
          <span />
        </div>
      </div>
    </div>
  );
}

/* ========================================
   REUSABLE STEP CARD
======================================== */

function HowItWorksCard({ number, title, description, children }) {
  return (
    <article className="how-step-card">
      {children}

      <div className="how-step-content">
        <h3>
          <span>{number}.</span> {title}
        </h3>

        <p>{description}</p>
      </div>
    </article>
  );
}

/* ========================================
   MAIN SECTION
======================================== */

function HowItWorks() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const elements = section.querySelectorAll(
      ".how-section-header, .how-step-card, .how-bottom-cta"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="how-it-works"
      id="how-it-works"
      style={{ backgroundImage: `url("${sectionBg}")` }}
    >
      <div className="how-it-works-container">

        {/* Section Header */}
        <div className="how-section-header">
          <div>
            <p className="how-eyebrow">
              <span />
              HOW IT WORKS
            </p>

            <h2>Order in 3 Simple Steps</h2>
          </div>

          <p className="how-header-description">
            Choose what you need, ask for the current price, and place your
            order.
          </p>
        </div>

        {/* Step Cards */}
        <div className="how-steps-grid">
          <HowItWorksCard
            number="01"
            title="Choose Your Tape"
            description="Pick the type and size you need for your packing work."
          >
            <ProductSelectionVisual />
          </HowItWorksCard>

          <HowItWorksCard
            number="02"
            title="Ask For Price"
            description="Message us on WhatsApp for today's price and availability."
          >
            <PriceChatVisual />
          </HowItWorksCard>

          <HowItWorksCard
            number="03"
            title="Place Your Order"
            description="Confirm your order and get your packing supplies delivered across Karachi."
          >
            <OrderTrackerVisual />
          </HowItWorksCard>
        </div>

        {/* Bottom CTA */}
        <div className="how-bottom-cta">
          <p>
            Not sure which tape you need? Message us and we'll help you choose.
          </p>

          <Button
            href="https://wa.me/923002279528?text=Assalam%20o%20Alaikum%2C%20mujhe%20packing%20tape%20ke%20bare%20mein%20maloomat%20chahiye."
            variant="forest"
            external
          >
            Ask Current Price on WhatsApp
          </Button>
        </div>

      </div>
    </section>
  );
}

export default HowItWorks;
