import styles from "./ButtonCategory.module.css";

function ButtonCategory({ category, icon, onCategory, searchParams }) {
  const active = searchParams.get("filter") === category.replace(" ", "-");

  return (
    <div
      className={`${styles.buttonCategory} ${active ? "active" : ""}`}
      onClick={() => onCategory(category)}
    >
      <i className={icon}></i> {category}
    </div>
  );
}

export default ButtonCategory;
