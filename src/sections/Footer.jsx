
"use client";

import { useEffect, useRef, useState } from "react";
import "./Footer.css";

import darkLogo from "../assets/logos/Sindh Stationers Logo (Dark).svg";

import whatsappIcon from "../assets/icons/WhatsApp.svg";
import facebookIcon from "../assets/icons/Facebook.svg";
import instagramIcon from "../assets/icons/Instagram.svg";

import callIcon from "../assets/icons/call.svg";
import emailIcon from "../assets/icons/email.svg";
import locationIcon from "../assets/icons/location.svg";

const quickLinks = [
  { label: "Products", href: "#products" },
  { label: "Brands", href: "#brands" },
  { label: "About Us", href: "#about" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "#contact" },
];

const productLinks = [
  { label: "Scotch Tape", href: "#products" },
  { label: "Masking Tape", href: "#products" },
  { label: "Double Sided Tape", href: "#products" },
  { label: "Stretch Film Roll", href: "#products" },
];

const socialLinks = [
  {
    label: "WhatsApp",
    icon: whatsappIcon,
    href: "https://wa.me/923002279528",
  },
  {
    label: "Facebook",
    icon: facebookIcon,
    href: null,
  },
  {
    label: "Instagram",
    icon: instagramIcon,
    href: null,
  },
];

function Footer() {
  const footerRef = useRef(null);
  const [visibleElements, setVisibleElements] = useState(() => new Set());

  useEffect(() => {
    const footer = footerRef.current;

    if (!footer) return;

    const elements = footer.querySelectorAll("[data-reveal]");

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
        threshold: 0.1,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <footer ref={footerRef} className="site-footer">
      <div className="footer-divider" />

      <div className="footer-container">

        {/* MAIN FOOTER CONTENT */}

        <div
          className={`footer-main ${
            visibleElements.has("footer-main") ? "is-visible" : ""
          }`}
          data-reveal="footer-main"
        >
          {/* BRAND COLUMN */}

          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              <img src={darkLogo.src} alt="Sindh Stationers" />
            </a>

            <p className="footer-brand-description">
              Packing tape and packing supplies for homes, shops, businesses,
              and online sellers across Karachi.
            </p>

            <div className="footer-social-links">
              {socialLinks.map((social) =>
                social.href ? (
                  <a
                    key={social.label}
                    href={social.href}
                    className="footer-social-link"
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={social.icon.src} alt="" />
                  </a>
                ) : (
                  <span
                    key={social.label}
                    className="footer-social-link"
                    aria-label={social.label}
                    title={`${social.label} link will be added`}
                  >
                    <img src={social.icon.src} alt="" />
                  </span>
                )
              )}
            </div>
          </div>

          {/* QUICK LINKS */}

          <div className="footer-column">
            <h3>Quick Links</h3>

            <ul>
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>
                    <span className="link-underline">{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* PRODUCTS */}

          <div className="footer-column">
            <h3>Our Products</h3>

            <ul>
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>
                    <span className="link-underline">{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}

          <div className="footer-column footer-contact">
            <h3>Contact Us</h3>

            <ul>
              <li>
                <a href="tel:+923002279528">
                  <img src={callIcon.src} alt="" />
                  <span className="link-underline">+92-300-2279528</span>
                </a>
              </li>

              <li>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=sindhstationers%40gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={emailIcon.src} alt="" />
                  <span className="link-underline">
                    sindhstationers@gmail.com
                  </span>
                </a>
              </li>

              <li className="footer-delivery-info">
                <img src={locationIcon.src} alt="" />
                <span>Deliveries Across Karachi</span>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM FOOTER */}

        <div
          className={`footer-bottom ${
            visibleElements.has("footer-bottom") ? "is-visible" : ""
          }`}
          data-reveal="footer-bottom"
        >
          <div className="footer-watermark" aria-hidden="true">
            Sindh Stationers
          </div>

          <p className="footer-copyright">
            © 2026 Sindh Stationers. All rights reserved.
          </p>

          <a
            className="footer-credit link-underline"
            href="https://linkedin.com/in/wasiftai"
            target="_blank"
            rel="noopener noreferrer"
          >
            Designed &amp; Built by Wasif Tai
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
