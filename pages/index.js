import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <main>
        <h1>About Me</h1>
        <section className={styles.container}>
          <Image
            src="/profilepic.jpg"
            width={200}
            height={200}
            alt="me"
            className={styles.profilePic}
          />
          <div className={styles.introText}>
            <h3>Hey, I'm Justin Ang</h3>
            <h5>Third Year Software Engineering Student</h5>
            <p>
              My name is Justin and I am a Software Engineering student at the
              University of Auckland. In a span of 2 years, my passion and
              interest in software development has blossomed and that has
              prompted me to explore & expand my skills & knowledge about
              software development. My dream is having the opportunity to work
              on software that are helpful to others.
            </p>
          </div>
        </section>

        <section className={styles.technicalSkills}>
          <h3 className={styles.sectionHeader}>Technical Skills</h3>
          <div className={styles.skillsList}>
            <span id={styles.javaScript}>Javascript</span>
            <span id={styles.react}>React</span>
            <span id={styles.java}>Java</span>
            <span id={styles.python}>Python</span>
            <span id={styles.C}>C</span>
          </div>
        </section>
      </main>
    </>
  );
}
