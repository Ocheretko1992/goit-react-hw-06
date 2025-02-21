import { useDispatch } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();

  return (
    <div className={css.searchBoxContainer}>
      <h3>Find contacts by name</h3>
      <input
        type="text"
        onChange={(e) => dispatch(changeFilter(e.target.value))}
        className={css.searchBoxInput}
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchBox;
