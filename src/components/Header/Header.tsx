import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.content} data-aos="fade-up">
        <h4>Hello, I am</h4>
        <h1>Bekzod</h1>
        <h6>Backend developer</h6>
        <a href="#">Print Resume</a>
      </div>
    </header>
  );
};

export default Header;
