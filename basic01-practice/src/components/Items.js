import "./Items.css";

export const Items = ({ img, title, desc }) => {
  return (
    <li className="concept">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <p>{desc}</p>
    </li>
  );
};
