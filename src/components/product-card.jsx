
import "./product-card.css";
import Image from "next/image";
import Button from "./Button";

function ProductCard({
  name,
  description,
  image,
  className = "",
  style,
  index,
}) {
  const message = `Assalamualaikum, mujhe ${name} ki current price aur available sizes maloom karni hain.`;

  const whatsappLink = `https://wa.me/923002279528?text=${encodeURIComponent(
    message
  )}`;

  return (
    <article
      className={`product-card ${className}`}
      style={style}
      data-index={index}
    >
      <Image
        className="product-card-background"
        src={image}
        alt={`${name} product photo`}
        loading="lazy"
        decoding="async"
        sizes="(max-width: 520px) 100vw, (max-width: 768px) 50vw, (max-width: 1100px) 50vw, 33vw"
      />

      <div className="product-card-gradient" />

      <div className="product-card-content">
        <span className="product-size-label">
          Multiple sizes available
        </span>

        <div className="product-card-bottom">
          <div className="product-card-info">
            <h3 className="product-card-title">{name}</h3>

            <p className="product-card-description">
              {description}
            </p>
          </div>

          <Button
            href={whatsappLink}
            className="product-card-button"
            variant="cream"
            external
          >
            Ask Price &amp; Sizes
          </Button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
