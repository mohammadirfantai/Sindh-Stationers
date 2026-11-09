
"use client";

import { useEffect, useRef, useState } from "react";
import "./Products.css";

import ProductCard from "../components/product-card";

import ScotchYellowish from "../assets/images/products/Scotch Tape - Super Yellowish.webp";
import ScotchClearBrown from "../assets/images/products/Scotch Tape - Clear OR Brown.webp";
import FoamTape from "../assets/images/products/Double Sided - Foam Tape.webp";
import TissueTape from "../assets/images/products/Double Sided - Tissue Tape.webp";
import MaskingTape from "../assets/images/products/Masking Tape.webp";
import StretchFilm from "../assets/images/products/Stretch Film Roll.webp";

const products = [
  {
    name: "Scotch Tape | Super Yellowish",
    description:
      "Strong and reliable tape for cartons, boxes and general packing.",
    image: ScotchYellowish,
  },
  {
    name: "Scotch Tape | Clear / Brown",
    description:
      "General purpose packing tape for home, shop and business use.",
    image: ScotchClearBrown,
  },
  {
    name: "Double Sided Foam Tape",
    description:
      "Strong double sided tape with foam for mounting and fixing.",
    image: FoamTape,
  },
  {
    name: "Double Sided Tissue Tape",
    description:
      "Thin and strong tape for clean and neat bonding.",
    image: TissueTape,
  },
  {
    name: "Masking Tape",
    description:
      "Ideal for painting, labeling and light packing work.",
    image: MaskingTape,
  },
  {
    name: "Stretch Film Roll",
    description:
      "Strong stretch film for wrapping and securing products.",
    image: StretchFilm,
  },
];

function Products() {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  const [headerVisible, setHeaderVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState([]);

  // Header reveal
  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px 80px 0px",
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  // Individual card reveal
  useEffect(() => {
    const grid = gridRef.current;

    if (!grid) return;

    const cards = grid.querySelectorAll(".product-card-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const index = Number(entry.target.dataset.index);

          setVisibleCards((previous) =>
            previous.includes(index)
              ? previous
              : [...previous, index]
          );

          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`products-section ${
        headerVisible ? "products-visible" : ""
      }`}
      id="products"
    >
      <div className="products-container">
        <div className="products-header">
          <div className="products-heading-group">
            <div className="products-eyebrow">
              <span className="products-eyebrow-dot"></span>
              <span>OUR PRODUCTS</span>
            </div>

            <h2 className="products-heading">
              Tape for Every Packing Need.
            </h2>
          </div>

          <p className="products-description">
            From one roll to full cartons, find the right
            tape for your packing needs. Ask us for
            today's price and availability.
          </p>
        </div>

        <div className="products-grid" ref={gridRef}>
          {products.map((product, index) => (
            <ProductCard
              key={product.name}
              index={index}
              name={product.name}
              description={product.description}
              image={product.image}
              className={`product-card-reveal ${
                visibleCards.includes(index) ? "is-visible" : ""
              }`}
              style={{
                "--card-index": index % 3,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
