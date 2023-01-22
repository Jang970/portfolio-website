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
              A fake e-store that shows clothing items and allows user to add
              them to a cart. Items stored on fake REST api, json-server.
            </p>
            <hr />
            <span className={style.react}>React</span>
          </li>
          <li className={style.projectItem}>
            <a
              href="https://github.com/Jang970/Java-Twitter-Followers-As-Graph"
              target="_blank"
            >
              <h3>Twitter Followers</h3>
            </a>
            <hr />
            <p className={style.description}>
              Displayed the theory of Twitter followers with the use of common
              data structures.
            </p>
            <hr />
            <span className={style.java}>Java</span>
          </li>
          <li className={style.projectItem}>
            <a
              href="https://github.com/Jang970/C-Project-Container-Yard"
              target="_blank"
            >
              <h3>Container Yard</h3>
            </a>
            <hr />
            <p className={style.description}>
              This is a game where the player must get the container/s from the
              entry to the exit.
            </p>
            <hr />
            <span className={style.c}>C</span>
          </li>
          <li className={style.projectItem}>
            <a
              href="https://github.com/Jang970/JavaScript-To-Do-List"
              target="_blank"
            >
              <h3>To Do List</h3>
            </a>
            <hr />
            <p className={style.description}>
              Simple to do list website where a user can add, edit & delete
              tasks.
            </p>
            <hr />
            <span className={style.javascript}>Javascript</span>
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
