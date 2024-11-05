import Container from "./Container";
import UserMenu from "./UserMenu";
import logoImg from "../assets/logo.svg";
import styles from "./Nav.module.css";
import { Link, NavLink } from "react-router-dom";

function getStyles({ isActive }) {
  if (isActive) {
    return { textDecoration: "underline" };
  }
}

function Nav() {
  return (
    <div className={styles.nav}>
      <Container className={styles.container}>
        <Link to="/">
          <img src={logoImg} alt="Codethat Logo" />
        </Link>
        <ul className={styles.menu}>
          <li>
            <NavLink to="courses" style={getStyles}>
              카탈로그
            </NavLink>
          </li>
          <li>
            <NavLink to="questions" style={getStyles}>
              커뮤니티
            </NavLink>
          </li>
          <li>
            <UserMenu />
          </li>
        </ul>
      </Container>
    </div>
  );
}

export default Nav;
