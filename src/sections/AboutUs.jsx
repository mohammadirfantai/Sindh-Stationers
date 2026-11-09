
import { useEffect, useRef, useState } from "react";
import "./AboutUs.css";

import Button from "../components/Button";
import FatherImage from "../assets/images/about/Mohammad Irfan Tai.webp";

const stats = [
  {
    number: "100+",
    label: "Shops Supplied Regularly",
  },
  {
    number: "25+",
    label: "Years in the Industry",
  },
  {
    number: "95%+",
    label: "Client Satisfaction",
  },
  {
    number: "1-2 Days",
    label: "Average Delivery Time",
  },
];

function AboutUs() {
  const sectionRef = useRef(null);
  const statsRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const [progress, setProgress] = useState(() => {
    if (typeof window === "undefined") return 0;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? 1
      : 0;
  });

  const message =
    "Assalamualaikum, mujhe packing tape ki current price aur details maloom karni hain.";

  const whatsappLink = `https://wa.me/923002279528?text=${encodeURIComponent(
    message
  )}`;

  // Main section observer
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
        threshold: 0.1,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  // Stats observer
  useEffect(() => {
    const statsElement = statsRef.current;

    if (!statsElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.4,
      }
    );

    observer.observe(statsElement);

    return () => observer.disconnect();
  }, []);

  // Stats counting animation
  useEffect(() => {
    if (!statsVisible) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const duration = 1800;
    let animationFrame;
    let startTime;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const elapsed = timestamp - startTime;
      const linearProgress = Math.min(elapsed / duration, 1);

      const easedProgress =
        1 - Math.pow(1 - linearProgress, 4);

      setProgress(easedProgress);

      if (linearProgress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [statsVisible]);

  // Display animated numbers
  const getStatNumber = (index) => {
    switch (index) {
      case 0:
        return `${Math.round(100 * progress)}+`;

      case 1:
        return `${Math.round(25 * progress)}+`;

      case 2:
        return `${Math.round(95 * progress)}%+`;

      case 3:
        return `${Math.round(progress)}-${Math.round(
          2 * progress
        )} Days`;

      default:
        return stats[index].number;
    }
  };

  return (
    <section
      ref={sectionRef}
      className={`about-us ${isVisible ? "about-visible" : ""}`}
    >
      <div className="about-us-container">
        {/* Main About Content */}
        <div className="about-us-main">
          {/* Father's Image */}
          <div className="about-us-image">
            <img
              src={FatherImage}
              alt="Mohammad Irfan Tai"
            />

            <span className="about-us-founder-name">
              Mohammad Irfan Tai
            </span>
          </div>

          {/* About Text */}
          <div className="about-us-content">
            <div className="about-us-heading">
              <span className="about-us-eyebrow">
                <span className="about-us-dot"></span>
                ABOUT US
              </span>

              <h2>Packing Tape, From Our Shop to Yours.</h2>

              <div className="about-us-divider"></div>
            </div>

            <div className="about-us-description">
              <p>
                Sindh Stationers is a packing tape supplier based in Urdu
                Bazaar, Karachi, serving customers across the city. We supply
                packing tape for everyday packing, shops, businesses, online
                sellers, offices, and commercial use.
              </p>

              <p>
                Our range includes carton sealing tape, masking tape, double
                sided tape, and stretch film in different types and sizes.
                Whether you need a single roll for a small packing job or
                multiple cartons for regular business use, you can contact us
                for the latest price and availability.
              </p>

              <p>
                You can order through WhatsApp and arrange delivery across
                Karachi. Whether you need a single roll or multiple cartons,
                we're here to help you find the right packing tape.
              </p>
            </div>

            <Button
              href={whatsappLink}
              className="about-us-button"
              variant="forest"
              external
            >
              Ask Current Price
            </Button>
          </div>
        </div>

        {/* Statistics */}
        <div
          ref={statsRef}
          className={`about-us-stats ${
            statsVisible ? "stats-visible" : ""
          }`}
        >
          {stats.map((stat, index) => (
            <div
              className="about-us-stat"
              key={stat.label}
            >
              <h3>{getStatNumber(index)}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
