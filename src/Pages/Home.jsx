import styles from "./Home.module.css";

import Header from "../Components/Header/Header";

// Home component
const Home = () => {
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

export default Home;
