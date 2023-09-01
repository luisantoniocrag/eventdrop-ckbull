import { FC } from "react";
import { ToggleProps } from "./interfaces";
import styles from "./Toggle.module.css";

export const Toggle: FC<ToggleProps> = (props) => {
  const { isChecked, setIsChecked } = props;

  return (
    <label className={styles["switch"]}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
      <span className={`${styles["slider"]} ${styles["round"]}`}></span>
    </label>
  );
};
