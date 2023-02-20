import styles from './Portfolio.module.scss';

import Image from 'next/image';

import { projects_db } from '@/db/projects.db';

const Portfolio = () => {
  return (
    <section className={styles.portfolio} id='portfolio' data-aos='fade-up'>
      <h1>
        <span>My</span> portfolio
      </h1>
      <div className={styles.wrapper}>
        {projects_db?.map((p) => (
          <div key={p?.id} className={styles.item}>
            <Image src={p?.cover} alt='' fill />
            <div className={styles.drop__content}>
              <h6>{p?.title}</h6>
              <p>{p?.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
