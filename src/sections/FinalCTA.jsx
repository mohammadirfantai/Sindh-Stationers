
"use client";

import { useEffect, useRef, useState } from "react";
import "./FinalCTA.css";
import Button from "../components/Button";

import finalCtaBg from "../assets/images/backgrounds/Final CTA Bg.webp";

function FinalCTA() {
  const sectionRef = useRef(null);

  const [visibleElements, setVisibleElements] = useState(() => new Set());
  const [yearsCount, setYearsCount] = useState(0);
  const [satisfactionCount, setSatisfactionCount] = useState(0);

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
        threshold: 0.2,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  /* ========================================
     COUNT-UP ANIMATION
  ======================================== */

  useEffect(() => {
    const yearsVisible = visibleElements.has("stat-0");
    const satisfactionVisible = visibleElements.has("stat-1");

    if (!yearsVisible && !satisfactionVisible) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion) {
      const reducedMotionFrame = requestAnimationFrame(() => {
        if (yearsVisible) setYearsCount(25);
        if (satisfactionVisible) setSatisfactionCount(95);
      });

      return () => cancelAnimationFrame(reducedMotionFrame);
    }

    const duration = 1200;
    const startTime = performance.now();

    let animationFrame;

    const animateCount = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Smooth ease-out
      const easedProgress = 1 - Math.pow(1 - progress, 4);

      if (yearsVisible) {
        setYearsCount(Math.round(25 * easedProgress));
      }

      if (satisfactionVisible) {
        setSatisfactionCount(Math.round(95 * easedProgress));
      }

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animateCount);
      }
    };

    animationFrame = requestAnimationFrame(animateCount);

    return () => cancelAnimationFrame(animationFrame);
  }, [visibleElements]);

  const contentVisible = visibleElements.has("content");

  return (
    <section
      ref={sectionRef}
      className="final-cta"
      id="contact"
      style={{ backgroundImage: `url("${finalCtaBg.src}")` }}
    >
      <div className="final-cta-overlay" />

      <div className="final-cta-container">

        {/* Main Content */}

        <div
          className={`final-cta-content ${
            contentVisible ? "is-visible" : ""
          }`}
          data-reveal="content"
        >
          <p className="final-cta-eyebrow">
            READY TO ORDER?
          </p>

          <h2>
            Need Packing Tape?
            <br />
            Let's Get You Packed.
          </h2>

          <p className="final-cta-description">
            Tell us what tape you need, and we'll help you check the
            right size, current price, and availability.
          </p>

          <Button
            href="https://wa.me/923002279528?text=Assalam%20o%20Alaikum%2C%20mujhe%20packing%20tape%20ki%20price%20aur%20sizes%20maloom%20karni%20hain."
            variant="cream"
            external
          >
            Ask Price &amp; Sizes
          </Button>
        </div>

        {/* Stats */}

        <div className="final-cta-stats">
          <div
            className={`final-cta-stat ${
              visibleElements.has("stat-0") ? "is-visible" : ""
            }`}
            data-reveal="stat-0"
          >
            <h3>{yearsCount}+</h3>
            <p>Years in the Industry</p>
          </div>

          <div
            className={`final-cta-stat final-cta-stat-bordered ${
              visibleElements.has("stat-1") ? "is-visible" : ""
            }`}
            data-reveal="stat-1"
          >
            <h3>{satisfactionCount}%+</h3>
            <p>Client Satisfaction</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default FinalCTA;
