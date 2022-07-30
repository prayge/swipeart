import styles from "./BrickLayout.module.css";

const BrickLayout = () => {
  return (
    <div className={styles["brick-layout"]}>
      <div className={styles["brick-column"]}>
        <img src="img/abs/001-image.jpg" alt="" />
        <img src="img/abs/002-image.jpg" alt="" />
        <img src="img/abs/003-image.jpg" alt="" />
      </div>
      <div className={styles["brick-column"]}>
        <img src="img/abs/004-image.jpg" alt="" />
        <img src="img/abs/005-image.jpg" alt="" />
        <img src="img/abs/006-image.jpg" alt="" />
      </div>
      <div className={styles["brick-column"]}>
        <img src="img/abs/007-image.jpg" alt="" />
        <img src="img/abs/008-image.jpg" alt="" />
        <img src="img/abs/009-image.jpg" alt="" />
      </div>
    </div>
  );
};

export default BrickLayout;
