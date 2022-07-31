import styles from "./Swipe.module.css";

import Header from "../Components/Header/Header";

// Swipe component
const Swipe = () => {
  return (
    <>
      <Header />
      <div
        className="flex justify-content-center"
        style={{ marginTop: "50px", padding: "50px" }}
      ></div>
    </>
  );
};

export default Swipe;
