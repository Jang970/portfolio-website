import style from "../../styles/Projects.module.css";

export default function projectsPage() {
  return (
    <>
      <main>
        <h1>My Projects</h1>
        <ul className={style.projectContainer}>
          <li className={style.projectItem}>
            <a
              href="https://github.com/Jang970/online-store-react"
              target="_blank"
            >
              <h3>Online Store</h3>
            </a>
            <hr />
            <p className={style.description}>
              A mock-up e-store that shows clothing items and allows user to add
              them to a cart. Items stored on fake REST api, json-server.
            </p>
            <hr />
            <span className={style.react}>React</span>
          </li>
          <li className={style.projectItem}>
            <a href="https://github.com/Jang970/chat-app" target="_blank">
              <h3>Chat App</h3>
            </a>
            <hr />
            <p className={style.description}>
              A simple messaging application created with the help of Next.js
              and Google Firebase.
            </p>
            <hr />
            <span className={style.react}>React</span>
          </li>
          <li className={style.projectItem}>
            <a
              href="https://github.com/Jang970/java-quick-draw"
              target="_blank"
            >
              <h3>Quick, Draw!</h3>
            </a>
            <hr />
            <p className={style.description}>
              An educational drawing game inspired by Google's Quick, Draw!
            </p>
            <hr />
            <span className={style.java}>Java</span>
          </li>
          <li className={style.projectItem}>
            <a
              href="https://github.com/Jang970/portfolio-website"
              target="_blank"
            >
              <h3>My Portfolio</h3>
            </a>
            <hr />
            <p className={style.description}>
              Website version of my resume. Allowed me to practice with NextJS
            </p>
            <hr />
            <span className={style.react}>React</span>
          </li>
        </ul>
        <a
          className={style.githubRepos}
          href="https://github.com/Jang970?tab=repositories"
          target="_blank"
        >
          View All Projects
        </a>
      </main>
    </>
  );
}
