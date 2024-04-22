import styles from "./Sidebar.module.css";
import profile_banner from "../assets/profile_banner.png";
import { PencilLine } from "phosphor-react";
import { Avatar } from "./Avatar";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src={profile_banner} alt="" />

      <div className={styles.profile}>
        <Avatar src="https://github.com/victtor-777.png" />
        <strong>Victtor Guilherme</strong>
        <span>Software Engineer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
