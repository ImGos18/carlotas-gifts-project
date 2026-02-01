import ButtonCategory from "../../ButtonCategory/ButtonCategory";
import styles from "./Categories.module.css";
import { useSearchParams } from "react-router";

function Categories() {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleCategory(category) {
    setSearchParams(`?filter=${category.replace(" ", "-")}`);
  }

  return (
    <ul className={styles.categoryList}>
      <ButtonCategory
        icon={"bi bi-gift"}
        category={"all gifts"}
        action={() => console.log("click")}
        onCategory={handleCategory}
        searchParams={searchParams}
      />
      <ButtonCategory
        icon={"bi bi-flower3"}
        category={"flowers"}
        action={() => console.log("click")}
        onCategory={handleCategory}
        searchParams={searchParams}
      />
      <ButtonCategory
        icon={"bi bi-box2-heart"}
        category={"gift boxes"}
        action={() => console.log("click")}
        onCategory={handleCategory}
        searchParams={searchParams}
      />
    </ul>
  );
}

export default Categories;
