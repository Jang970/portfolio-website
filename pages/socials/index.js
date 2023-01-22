import styles from "../../styles/Socials.module.css";

export default function socialsPage() {
  return (
    <>
      <main>
        <h1>Contact Me</h1>
        <div className={styles.socialsContainer}>
          <div className={styles.socialItem}>
            <h3 className={styles.socialName}>Email:</h3>
            <a href="mailto: angjustin11@gmail.com" className={styles.links}>
              angjustin11@gmail.com
            </a>
          </div>
          <div className={styles.socialItem}>
            <h3 className={styles.socialName}>Github:</h3>
            <a
              href="https://github.com/Jang970"
              target="_blank"
              className={styles.links}
            >
              Jang970
            </a>
          </div>
          <div className={styles.socialItem}>
            <h3 className={styles.socialName}>LinkedIn:</h3>
            <a
              href="https://www.linkedin.com/in/justin-ang-419314244/"
              target="_blank"
              className={styles.links}
            >
              Justin Ang
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
