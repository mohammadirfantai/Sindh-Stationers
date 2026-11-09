import "./WhyChooseUsCard.css";

function WhyChooseUsCard({ icon, title, description, iconWidth, iconHeight }) {
  return (
    <article className="why-card">
      <img
        className="why-card-icon"
        src={icon}
        alt=""
        style={{ width: iconWidth, height: iconHeight }}
      />

      <div className="why-card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}

export default WhyChooseUsCard;