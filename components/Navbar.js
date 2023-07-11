import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faClipboardList,
  faShare,
  faFile,
  faStar,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbarList">
        <li className="navbarLogoItem">
          <Link href="#" className="navLinkLogo">
            <span className="logoText">Justin Ang</span>
            <FontAwesomeIcon
              icon={faChevronRight}
              className="navLinkIconsLogo"
              size="xl"
            />
          </Link>
        </li>
        <li className="navbarItem">
          <Link href="/" className="navLink">
            <FontAwesomeIcon icon={faUser} className="navLinkIcons" size="xl" />
            <span className="linkText">About Me</span>
          </Link>
        </li>
        <li className="navbarItem">
          <Link href="/projects" className="navLink">
            <FontAwesomeIcon
              icon={faClipboardList}
              className="navLinkIcons"
              size="xl"
            />
            <span className="linkText">Projects</span>
          </Link>
        </li>
        <li className="navbarItem">
          <Link href="/socials" className="navLink">
            <FontAwesomeIcon
              icon={faShare}
              className="navLinkIcons"
              size="xl"
            />
            <span className="linkText">Socials</span>
          </Link>
        </li>
        <li className="navbarItem">
          <a
            href="/Justin_ang_Resume_New.pdf"
            className="navLink"
            target="_blank"
          >
            <FontAwesomeIcon icon={faFile} className="navLinkIcons" size="xl" />
            <span className="linkText">Resume</span>
          </a>
        </li>
        {/* <li className="navbarItem">
          <Link href="/" className="navLink">
            <FontAwesomeIcon icon={faStar} className="navLinkIcons" size="xl" />
            <span className="linkText">Theme</span>
          </Link>
        </li> */}
      </ul>
    </nav>
  );
}
