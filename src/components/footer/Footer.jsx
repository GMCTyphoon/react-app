import styles from "./Footer.module.scss";
import logoImg from "../../assets/logo.png";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerLeft}>
          <img src={logoImg} alt="Semitex" className={styles.footerLogo} />
        </div>
        <nav className={styles.footerNav}>
          <ul className={styles.footerNavList}>
            <li><a href="#">Каталог</a></li>
            <li><a href="#">Производители</a></li>
            <li><a href="#">Для кого мы работаем</a></li>
            <li><a href="#">Сертификаты</a></li>
            <li><a href="#">О нас</a></li>
            <li><a href="#">Контакты</a></li>
          </ul>
        </nav>
        <div className={styles.footerRight}>
          <button className={styles.footerButton}>ОСТАВИТЬ ЗАЯВКУ</button>
        </div>
      </div>
    </footer>
  );
}
