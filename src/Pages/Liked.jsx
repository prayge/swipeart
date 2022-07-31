import { useState } from "react";

// import styles of this component
import styles from "./Liked.module.css";

// import other components to use
import HeaderNoBrick from "../Components/Header/HeaderNoBrick";
import MasonryLayout from "../Components/MasonryLayout/MasonryLayout";
import ContainerCard from "../Components/ContainerCard/ContainerCard";
import Dropdown from "../Components/Elements/Dropdown/Dropdown";

// import json files
import images from "../Jsons/Test.json";

// Liked component
const Liked = () => {
  // dropdown items
  const ddItems = [
    {
      id: 1,
      title: "All Images",
      active: true,
    },
    {
      id: 2,
      title: "Placeholder",
      active: false,
    },
  ];

  const [categoryImage, setCategoryImage] = useState(images.categories.all);

  const takeDdTitle = (ddTitle) => {
    setCategoryImage(() => {
      let categoryChoose = Object.keys(images.categories).filter((item) => {
        const titleSplited = ddTitle.toLowerCase().split(" ")[0];
        return item.toLowerCase().includes(titleSplited);
      });
      return [...images.categories[categoryChoose]];
    });
  };

  return (
    <>
      <HeaderNoBrick />
      <div className="flex justify-content-center">
        <ContainerCard>
          <div
            className={`${styles["gallery-setting"]} flex justify-content-between align-items-center`}
          >
            <h1>Your liked images</h1>
            <Dropdown
              title="All Images"
              items={ddItems}
              liftingDdTextUp={takeDdTitle}
            />
          </div>
          <MasonryLayout images={categoryImage} />
        </ContainerCard>
      </div>
    </>
  );
};

export default Liked;
