
"use client";

import { useEffect, useRef, useState } from "react";
import "./BrandsWeSupply.css";

import JohnsonLogo from "../assets/brands supplied/Johnson Adhesive Tape.webp";
import NicefixLogo from "../assets/brands supplied/Nicefix.webp";
import NewCTSLogo from "../assets/brands supplied/New CTS.webp";
import OkaciaLogo from "../assets/brands supplied/Okacia.webp";

const brands = [
  { name: "Johnson", logo: JohnsonLogo },
  { name: "Nicefix", logo: NicefixLogo },
  { name: "New CTS", logo: NewCTSLogo },
  { name: "Okacia", logo: OkaciaLogo },
];

function BrandsWeSupply() {
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
        threshold: 0.1,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`brands-section ${isVisible ? "brands-visible" : ""}`}
      id="brands"
    >
      <div className="brands-container">
        <div className="brands-header">
          <div className="brands-heading-group">
            <div className="brands-eyebrow">
              <span className="brands-eyebrow-dot"></span>
              <span>BRANDS WE STOCK</span>
            </div>

            <h2 className="brands-heading">
              Tape Brands We Supply.
            </h2>
          </div>

          <p className="brands-description">
            We stock packing tape from a range of brands,
            <br />
            with different sizes and options available.
          </p>
        </div>

        <div className="brands-logos">
          {brands.map((brand, index) => (
            <div
              className={`brand-item ${
                index !== brands.length - 1
                  ? "brand-item-divider"
                  : ""
              }`}
              key={brand.name}
              style={{ "--brand-index": index }}
            >
              <img
                src={brand.logo.src}
                alt={`${brand.name} logo`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BrandsWeSupply;
