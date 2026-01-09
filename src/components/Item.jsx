export default function Item({ imgSrc, description, price }) {
  return (
    <li className="item">
      <img src={imgSrc} alt="product img" />
      <p>{description}</p>
      <span>{price}</span>
    </li>
  );
}
