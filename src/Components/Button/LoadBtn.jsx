import styles from "../Button/LoadBtn.module.css";
import PropTypes from "prop-types";

function LoadBtn({ onClick, children }) {
  children = children || "Load more";
  return (
    <button className={styles.Button} onClick={onClick}>
      {children}
    </button>
  );
}

LoadBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default LoadBtn;
