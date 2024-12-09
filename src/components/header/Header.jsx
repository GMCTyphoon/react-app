import styles from "./Header.module.scss";
import logoImg from "../../assets/logo.png";
import phoneImg from "../../assets/phoneimg.png";
import checkImg from "../../assets/checkimage.png";
import lockImg from "../../assets/lockimg.png";
import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <div className={styles.headerContainer}>
        <div
          className={`${styles.mainMenu} ${isScrolled ? styles.scrolled : ""}`}
        >
          <div className={styles.logoImg}>
            <img src={logoImg} alt="Logo" />
          </div>
          <div
            className={`${styles.menuIcon} ${
              isMobileMenuOpen ? styles.menuIconOpen : ""
            }`}
            onClick={toggleMobileMenu}
          >
            <span className={styles.menuIconBar}></span>
            <span className={styles.menuIconBar}></span>
            <span className={styles.menuIconBar}></span>
          </div>
          <nav
            className={`${styles.navigation} ${
              isMobileMenuOpen ? styles.navigationOpen : ""
            }`}
          >
            <ul className={styles.navList}>
              <li className={styles.navItem}>
                <a href="#" className={styles.navLink}>
                  Каталог
                </a>
              </li>
              <li className={styles.navItem}>
                <a href="#" className={styles.navLink}>
                  Производители
                </a>
              </li>
              <li className={styles.navItem}>
                <a href="#" className={styles.navLink}>
                  Для кого мы работаем
                </a>
              </li>
              <li className={styles.navItem}>
                <a href="#" className={styles.navLink}>
                  Сертификаты
                </a>
              </li>
              <li className={styles.navItem}>
                <a href="#" className={styles.navLink}>
                  О нас
                </a>
              </li>
              <li className={styles.navItem}>
                <a href="#" className={styles.navLink}>
                  FAQ
                </a>
              </li>
              <li className={styles.navItem}>
                <a href="#" className={styles.navLink}>
                  Контакты
                </a>
              </li>
            </ul>
          </nav>
          <div className={styles.contacts}>
            <img src={phoneImg} alt="Phone" className={styles.contactsImg} />
            <p className={styles.contactsText}>
              +7 (812) <span className={styles.contactsNumber}>313-58-45</span>
            </p>
          </div>
        </div>
        <div className={styles.headerBottom}>
          <div className={styles.headerBottomItem}>
            <p className={styles.headerBottomItemTitle}>
              ОПТОВЫЕ ПОСТАВКИ
              <br />
              <span className={styles.headerBottomItemTitleSpan}>
                электронных компонентов
                <br />
              </span>
              <span className={styles.headerBottomItemTitleSpan}>
                ИЗ КИТАЯ ДЕНЬ В ДЕНЬ
              </span>
            </p>
            <p className={styles.headerBottomItemText}>
              Комплексные поставки электронных компонентов и оборудования.
              Подберем аналоги популярных брендов из Европы в условиях санкций.
            </p>
            <div className={styles.headerBottomItemTextList}>
              <p className={styles.headerBottomItemTextListText}>
                <img src={checkImg} alt="check" />
                Отсрочка платежей для постоянных клиентов
              </p>
              <p className={styles.headerBottomItemTextListText}>
                <img src={checkImg} alt="check" />
                Бесплатная доставка по Москве и СПБ в течение 2х часов
              </p>
              <p className={styles.headerBottomItemTextListText}>
                <img src={checkImg} alt="check" />
                Квалифицированный персональный менеджер
              </p>
            </div>
          </div>
          <form className={styles.headerBottomForm}>
            <div className={styles.headerBottomFormTitle}>
              <p className={styles.headerBottomFormTitleText}>
                ЗАКАЖИТЕ <br /> ОБРАТНЫЙ ЗВОНОК
              </p>
            </div>
            <div className={styles.headerBottomFormInputs}>
              <div className={styles.headerBottomFormInput}>
                <label htmlFor="name">Ваше имя *</label>
                <input type="text" id="name" placeholder="Петров Петр" />
              </div>
              <div className={styles.headerBottomFormInput}>
                <label htmlFor="phone">Ваш номер *</label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="+7 (_ _ _) _ _ _-_ _-_ _"
                />
              </div>
            </div>
            <div className={styles.headerBottomFormButtonContainer}>
              <button type="submit" className={styles.headerBottomFormButton}>
                ЗАКАЗАТЬ ЗВОНОК
              </button>
              <p className={styles.headerBottomFormText}>
                <img src={lockImg} alt="lock" />
                Мы гарантируем конфиденциальность данных
              </p>
            </div>
          </form>
        </div>
      </div>
    </header>
  );
}
