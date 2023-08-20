import PropTypes from "prop-types";
import { useState } from "react";
import styles from "./index.module.css";

const SearchBox = (props) => {
  const {
    placeholder,
    defaultValue,
    onChange,
    onClear,
    starticon,
    endicon,
    type,
  } = props;

  const [searchValue, setSearchValue] = useState(defaultValue);

  const handleOnChange = (event) => {
    onChange(event.target.value);
    setSearchValue(event.target.value);
  };

  const onClearSearchInput = () => {
    setSearchValue("");
    onClear();
  };

  return (
    <div className={styles.inputContainer}>
      <div className={styles.inputContainerStart}>{starticon}</div>
      <input
        type={type}
        placeholder={placeholder}
        className={`
            ${styles.input}
            ${endicon ? styles.paddingRight : ""}
            ${starticon ? styles.paddingLeft : ""}
          `}
        value={searchValue}
        onChange={handleOnChange}
      />
      {searchValue ? (
        <div className={styles.inputContainerEnd} onClick={onClearSearchInput}>
          {endicon}
        </div>
      ) : null}
    </div>
  );
};

SearchBox.propTypes = {
  placeholder: PropTypes.string,
  searchValue: PropTypes.string,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  onClear: PropTypes.func,
  startIcon: PropTypes.element,
  endIcon: PropTypes.element,
};

SearchBox.defaultProps = {
  onChange: () => {},
  onClear: () => {},
};

export default SearchBox;
