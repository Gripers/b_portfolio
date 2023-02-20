import styles from './Navbar.module.scss';

import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <nav>
        <Link
          to='about'
          activeClass='active'
          spy
          smooth
          data-aos='fade-up'
          data-aos-duration='1000'
        >
          About
        </Link>
        <Link
          to='portfolio'
          activeClass='active'
          spy
          smooth
          data-aos='fade-up'
          data-aos-duration='2000'
        >
          Portfolio
        </Link>
        <Link
          to='contact'
          activeClass='active'
          spy
          smooth
          data-aos='fade-up'
          data-aos-duration='3000'
        >
          Contact
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
