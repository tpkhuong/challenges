import styles from "./SearchBox.module.css";

export default function SearchBox({ children }) {
  return (
    <React.Fragment>
      <div className={styles[`Search-Box-Wrapper`]}></div>
    </React.Fragment>
  );
}
