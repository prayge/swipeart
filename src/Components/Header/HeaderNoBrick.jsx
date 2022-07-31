// import styles of this component
import styles from "./HeaderNoBrick.module.css";

// import other components
import ContainerCard from "../ContainerCard/ContainerCard";
import Nav from "../Nav/Nav";

// Header component
const Header = () => {
  return (
    <header className={`${styles.header} flex justify-content-center`}>
      <ContainerCard className="flex flex-column">
        <div className={styles["blur-circle-shape"]}></div>

        <Nav />
      </ContainerCard>
    </header>
  );
};

export default Header;
