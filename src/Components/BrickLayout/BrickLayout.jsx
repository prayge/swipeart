import styles from "./BrickLayout.module.css";

import images from "../../Jsons/Test.json";

const BrickLayout = () => {
  const len = images.categories.all.length;

  let srcs = new Array(9);
  srcs = srcs.fill(0).map(() => Math.floor(Math.random() * len));

  function getSrcImg(num) {
    let item = images.categories.all.filter((x) => x.id === num);
    let src = item[0].src;
    return src;
  }

  return (
    <div className={styles["brick-layout"]}>
      <div className={styles["brick-column"]}>
        <img src={getSrcImg(srcs[0])} alt="" />
        <img src={getSrcImg(srcs[1])} alt="" />
        <img src={getSrcImg(srcs[2])} alt="" />
      </div>
      <div className={styles["brick-column"]}>
        <img src={getSrcImg(srcs[3])} alt="" />
        <img src={getSrcImg(srcs[4])} alt="" />
        <img src={getSrcImg(srcs[5])} alt="" />
      </div>
      <div className={styles["brick-column"]}>
        <img src={getSrcImg(srcs[6])} alt="" />
        <img src={getSrcImg(srcs[7])} alt="" />
        <img src={getSrcImg(srcs[8])} alt="" />
      </div>
    </div>
  );
};

export default BrickLayout;
