import styles from "./About.module.scss";

const About = () => {
  return (
    <section className={styles.about} id="about" data-aos='fade-up'>
      <div>
        <h1>Who am I?</h1>
        <h5>A backend developer</h5>
        <button>Download My CV</button>
      </div>
      <div>
        <h1>Personal Info</h1>
        <ul>
          <li>
            <b>Birthdate: </b>09/13/1996
          </li>
          <li>
            <b>Email: </b>info@domain.com
          </li>
          <li>
            <b>Phone: </b>+ (123) 456-7890
          </li>
          <li>
            <b>Address: </b>12345 Fake ST NoWhere AB Country.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
