import styles from "./ButtonCategory.module.css";

function ButtonCategory({
  category,
  icon,
  onCategory,
  searchParams,
  nameCategory,
}) {
  const active = searchParams.get("filter") === category.replace(" ", "-");

  return (
    <div
      className={`${styles.buttonCategory} ${active ? "active" : ""}`}
      onClick={() => onCategory(category)}
    >
      <i className={icon}></i> {nameCategory}
    </div>
  );
}

export default ButtonCategory;
