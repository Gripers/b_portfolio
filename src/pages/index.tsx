import styles from "@/styles/Home.module.scss";

import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import About from "@/components/About/About";
import Portfolio from "@/components/Portfolio/Portfolio";

const Home = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className={styles.container}>
        <About />
        <Portfolio />
      </div>
    </>
  );
};

export default Home;
