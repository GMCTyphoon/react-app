import styles from "./PageContent.module.scss";
import leftBtn from "../../assets/pageContentImages/middleCards/leftbtn.png";
import rightBtn from "../../assets/pageContentImages/middleCards/rightbtn.png";
import { useState } from "react";
import arrow from "../../assets/pageContentImages/endCards/arrow.png";
import arrowOpen from "../../assets/pageContentImages/endCards/arrowOpen.png";
import icon1 from "../../assets/pageContentImages/topCards/card-1.png";

const cards = [
  {
    id: 1,
    icon: icon1,
    title: "Качественная продукция",
    subtitle:
      "Все наши товары сертифицированы и имеют сопроводительную документацию.",
  },
  {
    id: 2,
    icon: "/src/assets/pageContentImages/topCards/card-2.png",
    title: "Индивидуальный подход",
    subtitle:
      "Возможность изготовления компонентов специально для вас на заводах-изготовителя.",
  },
  {
    id: 3,
    icon: "/src/assets/pageContentImages/topCards/card-3.png",
    title: "Бесплатная доставка",
    subtitle:
      "При наличии товара на складе и заказе от 10 000 рублей, доставим бесплатно по Москве и СПБ в течение 2х часов.",
  },
  {
    id: 4,
    icon: "/src/assets/pageContentImages/topCards/card-4.png",
    title: "Подбираем аналоги",
    subtitle:
      "Поможем подобрать аналоги популярных европейских брендов в условиях санкций.",
  },
  {
    id: 5,
    icon: "/src/assets/pageContentImages/topCards/card-5.png",
    title: "Резервный запас компонентов",
    subtitle: "Хранение товара на наших складах для постоянных клиентов.",
  },
  {
    id: 6,
    icon: "/src/assets/pageContentImages/topCards/card-6.png",
    title: "Гибкая система оплаты",
    subtitle: "Отсрочка платежей для постоянных клиентов.",
  },
];

const middleCards = [
  {
    id: 1,
    icon: "/src/assets/pageContentImages/middleCards/card-1.png",
  },
  {
    id: 2,
    icon: "/src/assets/pageContentImages/middleCards/card-2.png",
  },
  {
    id: 3,
    icon: "/src/assets/pageContentImages/middleCards/card-3.png",
  },
  {
    id: 4,
    icon: "/src/assets/pageContentImages/middleCards/card-4.png",
  },
  {
    id: 5,
    icon: "/src/assets/pageContentImages/middleCards/card-5.png",
  },
];

const bottomCards = [
  {
    id: "01",
    title: "ВЫ ОСТАВЛЯЕТЕ ЗАЯВКУ",
    subtitle:
      "Отправить запрос вы можете любым удобным для вас способом: например, через форму на сайте. Также вы можете связаться с нами напрямую.",
  },
  {
    id: "02",
    title: "МЫ ПРОВЕРЯЕМ НАЛИЧИЕ ПОЗИЦИЙ",
    subtitle:
      "Проверяем наличие на складе, а также актуальность производства (возможна замена, если необходимо.) Если требуется замена - подбираем аналоги и привозим на заказ.",
  },
  {
    id: "03",
    title: "ФОРМИРУЕМ КОММЕРЧЕСКОЕ ПРЕДЛОЖЕНИЕ",
    subtitle:
      "На данном этапе мы с вами согласуем ценовое предложение, обговариваем сроки поставки и условия оплаты.",
  },
  {
    id: "06",
    title: "ВЫ ПОЛУЧАЕТЕ ТОВАР",
    subtitle:
      "Поставляем вам товар в надлежащей упаковке в сопровождении оригиналов всех необходимых документов либо вы забираете его самовывозом.",
  },
  {
    id: "05",
    title: "МЫ ВЫПОЛНЯЕМ ЗАКАЗ",
    subtitle:
      "Товар поступает на склад в Москву или Санкт-Петербург, где мы сверяем правильность поставки и начинаем сборку.",
  },
  {
    id: "04",
    title: "ПРОВОДИМ ОПЛАТУ",
    subtitle: "Далее, после получения авансового платежа, мы размещаем заказ.",
  },
];

const endList = [
  {
    id: "01",
    title: "Lorem ipsum dolor sit amet consectetur. Ultrices aliquam.",
    subtitle:
      "Like the phrase “stem cell” itself, “stem cell therapy” is often used to describe a variety of different medical therapies that utilize stem cells in some form to treat a patient. Sometimes the term is used incorrectly to refer to platelet rich plasma (PRP) injections. The term is also used to refer to stem cell transplants, also known as bone marrow transplants.",
    subtitle2:
      "Most commonly “stem cell therapy” is used to describe a procedure where the patient’s adult stem cells and other potentially regenerative cells are harvested from a tissue sample of either fat or bone marrow taken from the patient. These concentrated regenerative cells are then used to treat specific injuries typically by injecting them into the afflicted area. It should be said that this type of stem cell therapy is currently not FDA approved and clinics performing it illegally in the US or in other countries perform various versions of the procedure to treat illnesses and injuries with little to no clinical evidence.",
    subtitle3:
      "At InGeneron we use the term “regenerative cell therapy” since there are many different cell types and regenerative properties collected and used by our therapy along with adult stem cells. Importantly we do not treat patients outside of our approved clinical trials and we are dedicated to securing FDA approval through rigorous clinical testing.",
  },
  {
    id: "02",
    title: "Lorem ipsum dolor sit amet consectetur. Ultrices aliquam.",
    subtitle:
      "Like the phrase “stem cell” itself, “stem cell therapy” is often used to describe a variety of different medical therapies that utilize stem cells in some form to treat a patient. Sometimes the term is used incorrectly to refer to platelet rich plasma (PRP) injections. The term is also used to refer to stem cell transplants, also known as bone marrow transplants.",
    subtitle2:
      "Most commonly “stem cell therapy” is used to describe a procedure where the patient’s adult stem cells and other potentially regenerative cells are harvested from a tissue sample of either fat or bone marrow taken from the patient. These concentrated regenerative cells are then used to treat specific injuries typically by injecting them into the afflicted area. It should be said that this type of stem cell therapy is currently not FDA approved and clinics performing it illegally in the US or in other countries perform various versions of the procedure to treat illnesses and injuries with little to no clinical evidence.",
    subtitle3:
      "At InGeneron we use the term “regenerative cell therapy” since there are many different cell types and regenerative properties collected and used by our therapy along with adult stem cells. Importantly we do not treat patients outside of our approved clinical trials and we are dedicated to securing FDA approval through rigorous clinical testing.",
  },
  {
    id: "03",
    title: "Lorem ipsum dolor sit amet consectetur. Ultrices aliquam.",
    subtitle:
      "Like the phrase “stem cell” itself, “stem cell therapy” is often used to describe a variety of different medical therapies that utilize stem cells in some form to treat a patient. Sometimes the term is used incorrectly to refer to platelet rich plasma (PRP) injections. The term is also used to refer to stem cell transplants, also known as bone marrow transplants.",
    subtitle2:
      "Most commonly “stem cell therapy” is used to describe a procedure where the patient’s adult stem cells and other potentially regenerative cells are harvested from a tissue sample of either fat or bone marrow taken from the patient. These concentrated regenerative cells are then used to treat specific injuries typically by injecting them into the afflicted area. It should be said that this type of stem cell therapy is currently not FDA approved and clinics performing it illegally in the US or in other countries perform various versions of the procedure to treat illnesses and injuries with little to no clinical evidence.",
    subtitle3:
      "At InGeneron we use the term “regenerative cell therapy” since there are many different cell types and regenerative properties collected and used by our therapy along with adult stem cells. Importantly we do not treat patients outside of our approved clinical trials and we are dedicated to securing FDA approval through rigorous clinical testing.",
  },
  {
    id: "04",
    title: "Lorem ipsum dolor sit amet consectetur. Ultrices aliquam.",
    subtitle:
      "Like the phrase “stem cell” itself, “stem cell therapy” is often used to describe a variety of different medical therapies that utilize stem cells in some form to treat a patient. Sometimes the term is used incorrectly to refer to platelet rich plasma (PRP) injections. The term is also used to refer to stem cell transplants, also known as bone marrow transplants.",
    subtitle2:
      "Most commonly “stem cell therapy” is used to describe a procedure where the patient’s adult stem cells and other potentially regenerative cells are harvested from a tissue sample of either fat or bone marrow taken from the patient. These concentrated regenerative cells are then used to treat specific injuries typically by injecting them into the afflicted area. It should be said that this type of stem cell therapy is currently not FDA approved and clinics performing it illegally in the US or in other countries perform various versions of the procedure to treat illnesses and injuries with little to no clinical evidence.",
    subtitle3:
      "At InGeneron we use the term “regenerative cell therapy” since there are many different cell types and regenerative properties collected and used by our therapy along with adult stem cells. Importantly we do not treat patients outside of our approved clinical trials and we are dedicated to securing FDA approval through rigorous clinical testing.",
  },
  {
    id: "05",
    title: "Lorem ipsum dolor sit amet consectetur. Ultrices aliquam.",
    subtitle:
      "Like the phrase “stem cell” itself, “stem cell therapy” is often used to describe a variety of different medical therapies that utilize stem cells in some form to treat a patient. Sometimes the term is used incorrectly to refer to platelet rich plasma (PRP) injections. The term is also used to refer to stem cell transplants, also known as bone marrow transplants.",
    subtitle2:
      "Most commonly “stem cell therapy” is used to describe a procedure where the patient’s adult stem cells and other potentially regenerative cells are harvested from a tissue sample of either fat or bone marrow taken from the patient. These concentrated regenerative cells are then used to treat specific injuries typically by injecting them into the afflicted area. It should be said that this type of stem cell therapy is currently not FDA approved and clinics performing it illegally in the US or in other countries perform various versions of the procedure to treat illnesses and injuries with little to no clinical evidence.",
    subtitle3:
      "At InGeneron we use the term “regenerative cell therapy” since there are many different cell types and regenerative properties collected and used by our therapy along with adult stem cells. Importantly we do not treat patients outside of our approved clinical trials and we are dedicated to securing FDA approval through rigorous clinical testing.",
  },
];

export default function Body() {
  const [openItemId, setOpenItemId] = useState(null);

  const toggleItem = (id) => {
    setOpenItemId(openItemId === id ? null : id);
  };

  return (
    <main>
      <svg
        className={styles.pageContentTopSvg}
        viewBox="0 0 1920 60"
        fill="none"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1920 29L1915.19 29.4555L1910.38 29.9109L1905.56 30.3661L1900.75 30.8209L1895.94 31.2753L1891.13 31.7291L1886.32 32.1823L1881.5 32.6346L1876.69 33.0861L1871.88 33.5366L1867.07 33.986L1862.26 34.4341L1857.44 34.8808L1852.63 35.3262L1847.82 35.7699L1843.01 36.212L1838.2 36.6523L1833.38 37.0908L1828.57 37.5272L1823.76 37.9615L1818.95 38.3936L1814.14 38.8234L1809.32 39.2508L1804.51 39.6756L1799.7 40.0978L1794.89 40.5173L1790.08 40.9339L1785.26 41.3476L1780.45 41.7582L1775.64 42.1657L1770.83 42.5699L1766.02 42.9709L1761.2 43.3683L1756.39 43.7622L1751.58 44.1525L1746.77 44.5389L1741.95 44.9216L1737.14 45.3004L1732.33 45.6752L1727.52 46.0458L1722.71 46.4122L1717.89 46.7743L1713.08 47.132L1708.27 47.4853L1703.46 47.834L1698.65 48.178L1693.83 48.5173L1689.02 48.8519L1684.21 49.1815L1679.4 49.5061L1674.59 49.8257L1669.77 50.1401L1664.96 50.4493L1660.15 50.7532L1655.34 51.0518L1650.53 51.3449L1645.71 51.6325L1640.9 51.9145L1636.09 52.1909L1631.28 52.4615L1626.47 52.7263L1621.65 52.9854L1616.84 53.2384L1612.03 53.4855L1607.22 53.7266L1602.41 53.9615L1597.59 54.1903L1592.78 54.4129L1587.97 54.6292L1583.16 54.8392L1578.35 55.0428L1573.53 55.24L1568.72 55.4307L1563.91 55.6149L1559.1 55.7925L1554.29 55.9635L1549.47 56.1279L1544.66 56.2855L1539.85 56.4365L1535.04 56.5806L1530.23 56.718L1525.41 56.8485L1520.6 56.9722L1515.79 57.0889L1510.98 57.1987L1506.17 57.3016L1501.35 57.3975L1496.54 57.4863L1491.73 57.5682L1486.92 57.6429L1482.11 57.7107L1477.29 57.7713L1472.48 57.8249L1467.67 57.8713L1462.86 57.9106L1458.05 57.9427L1453.23 57.9678L1448.42 57.9857L1443.61 57.9964L1438.8 58L1433.98 57.9964L1429.17 57.9857L1424.36 57.9678L1419.55 57.9427L1414.74 57.9106L1409.92 57.8713L1405.11 57.8249L1400.3 57.7713L1395.49 57.7107L1390.68 57.6429L1385.86 57.5682L1381.05 57.4863L1376.24 57.3975L1371.43 57.3016L1366.62 57.1987L1361.8 57.0889L1356.99 56.9722L1352.18 56.8485L1347.37 56.718L1342.56 56.5806L1337.74 56.4365L1332.93 56.2855L1328.12 56.1279L1323.31 55.9635L1318.5 55.7925L1313.68 55.6149L1308.87 55.4307L1304.06 55.24L1299.25 55.0428L1294.44 54.8392L1289.62 54.6292L1284.81 54.4129L1280 54.1903L1275.19 53.9615L1270.38 53.7266L1265.56 53.4855L1260.75 53.2384L1255.94 52.9854L1251.13 52.7263L1246.32 52.4615L1241.5 52.1909L1236.69 51.9145L1231.88 51.6325L1227.07 51.3449L1222.26 51.0518L1217.44 50.7532L1212.63 50.4493L1207.82 50.1401L1203.01 49.8257L1198.2 49.5061L1193.38 49.1815L1188.57 48.8519L1183.76 48.5173L1178.95 48.178L1174.14 47.834L1169.32 47.4853L1164.51 47.132L1159.7 46.7743L1154.89 46.4122L1150.08 46.0458L1145.26 45.6752L1140.45 45.3004L1135.64 44.9216L1130.83 44.5389L1126.02 44.1525L1121.2 43.7622L1116.39 43.3683L1111.58 42.9709L1106.77 42.5699L1101.95 42.1657L1097.14 41.7582L1092.33 41.3476L1087.52 40.9339L1082.71 40.5173L1077.89 40.0978L1073.08 39.6756L1068.27 39.2508L1063.46 38.8234L1058.65 38.3936L1053.83 37.9615L1049.02 37.5272L1044.21 37.0908L1039.4 36.6523L1034.59 36.212L1029.77 35.7699L1024.96 35.3262L1020.15 34.8808L1015.34 34.4341L1010.53 33.986L1005.71 33.5366L1000.9 33.0861L996.09 32.6346L991.278 32.1823L986.466 31.7291L981.654 31.2753L976.842 30.8209L972.03 30.3661L967.218 29.9109L962.406 29.4555L957.594 29L952.782 28.5445L947.97 28.0891L943.158 27.6339L938.346 27.1791L933.534 26.7247L928.722 26.2709L923.91 25.8177L919.098 25.3654L914.286 24.9139L909.474 24.4634L904.662 24.014L899.85 23.5659L895.038 23.1192L890.226 22.6738L885.414 22.2301L880.602 21.788L875.79 21.3477L870.978 20.9092L866.165 20.4728L861.353 20.0385L856.541 19.6064L851.729 19.1766L846.917 18.7492L842.105 18.3244L837.293 17.9022L832.481 17.4827L827.669 17.0661L822.857 16.6524L818.045 16.2418L813.233 15.8343L808.421 15.4301L803.609 15.0291L798.797 14.6317L793.985 14.2378L789.173 13.8475L784.361 13.4611L779.549 13.0784L774.737 12.6996L769.925 12.3248L765.113 11.9542L760.301 11.5878L755.489 11.2257L750.677 10.868L745.865 10.5147L741.053 10.166L736.241 9.82196L731.429 9.48267L726.617 9.14813L721.805 8.81854L716.993 8.4939L712.181 8.17432L707.369 7.85992L702.556 7.55072L697.744 7.24677L692.932 6.94824L688.12 6.65509L683.308 6.36749L678.496 6.08551L673.684 5.80914L668.872 5.53851L664.06 5.27368L659.248 5.01465L654.436 4.7616L649.624 4.51453L644.812 4.27344L640 4.03845L635.188 3.80969L630.376 3.5871L625.564 3.37079L620.752 3.16083L615.94 2.95721L611.128 2.76001L606.316 2.56934L601.504 2.38513L596.692 2.20752L591.88 2.0365L587.068 1.87213L582.256 1.71448L577.444 1.56354L572.632 1.41937L567.82 1.28198L563.008 1.15149L558.196 1.02783L553.384 0.911072L548.572 0.80127L543.76 0.698425L538.947 0.602539L534.135 0.513672L529.323 0.431824L524.511 0.357056L519.699 0.289307L514.887 0.228699L510.075 0.17511L505.263 0.128723L500.451 0.0894165L495.639 0.057251L490.827 0.0321655L486.015 0.0142822L481.203 0.00360107L476.391 0L471.579 0.00360107L466.767 0.0142822L461.955 0.0321655L457.143 0.057251L452.331 0.0894165L447.519 0.128723L442.707 0.17511L437.895 0.228699L433.083 0.289307L428.271 0.357056L423.459 0.431824L418.647 0.513672L413.835 0.602539L409.023 0.698425L404.211 0.80127L399.399 0.911072L394.587 1.02783L389.775 1.15149L384.963 1.28198L380.15 1.41937L375.338 1.56354L370.526 1.71448L365.714 1.87213L360.902 2.0365L356.09 2.20752L351.278 2.38513L346.466 2.56934L341.654 2.76001L336.842 2.95721L332.03 3.16083L327.218 3.37079L322.406 3.5871L317.594 3.80969L312.782 4.03845L307.97 4.27344L303.158 4.51453L298.346 4.7616L293.534 5.01465L288.722 5.27368L283.91 5.53851L279.098 5.80914L274.286 6.08551L269.474 6.36749L264.662 6.65509L259.85 6.94824L255.038 7.24677L250.226 7.55072L245.414 7.85992L240.602 8.17432L235.79 8.4939L230.978 8.81854L226.166 9.14813L221.354 9.48267L216.541 9.82196L211.729 10.166L206.917 10.5147L202.105 10.868L197.293 11.2257L192.481 11.5878L187.669 11.9542L182.857 12.3248L178.045 12.6996L173.233 13.0784L168.421 13.4611L163.609 13.8475L158.797 14.2378L153.985 14.6317L149.173 15.0291L144.361 15.4301L139.549 15.8343L134.737 16.2418L129.925 16.6524L125.113 17.0661L120.301 17.4827L115.489 17.9022L110.677 18.3244L105.865 18.7492L101.053 19.1766L96.2407 19.6064L91.4287 20.0385L86.6166 20.4728L81.8046 20.9092L76.9926 21.3477L72.1805 21.788L67.3685 22.2301L62.5565 22.6738L57.7445 23.1192L52.9324 23.5659L48.1204 24.014L43.3083 24.4634L38.4963 24.9139L33.6843 25.3654L28.8723 25.8177L24.0603 26.2709L19.2482 26.7247L14.4362 27.1791L9.62415 27.6339L4.81213 28.0891L0.00012207 28.5445V60H1920V29Z"
          fill="#F2F2F4"
        />
      </svg>
      <div className={styles.pageContentContainer}>
        <div className={styles.pageContentTop}>
          <div className={styles.pageContentTopText}>
            <p className={styles.pageContentTopTitle}>Почему с нами выгодно</p>
            <p className={styles.pageContentTopSubtitle}>
              С 1996 года мы занимаемся оптовыми поставками электронных
              компонентов от ведущих производителей из Европы и Азии для
              Российских потребителей.
            </p>
          </div>
          <div className={styles.pageContentTopCards}>
            <ul className={styles.pageContentTopCardsList}>
              {cards.map((card) => (
                <li key={card.id} className={styles.pageContentTopCardsItem}>
                  <img
                    src={card.icon}
                    alt="icon"
                    className={styles.pageContentTopCardsItemIcon}
                  />
                  <p className={styles.pageContentTopCardsItemTitle}>
                    {card.title}
                  </p>
                  <p className={styles.pageContentTopCardsItemSubtitle}>
                    {card.subtitle}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <svg
          className={styles.pageContentMiddleSvg}
          viewBox="0 0 1920 60"
          fill="none"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 31L4.81 30.5445L9.62 30.0891L14.44 29.6339L19.25 29.1791L24.06 28.7247L28.87 28.2709L33.68 27.8177L38.5 27.3654L43.31 26.9139L48.12 26.4634L52.93 26.014L57.74 25.5659L62.56 25.1192L67.37 24.6738L72.18 24.2301L76.99 23.788L81.8 23.3477L86.62 22.9092L91.43 22.4728L96.24 22.0385L101.05 21.6064L105.86 21.1766L110.68 20.7492L115.49 20.3244L120.3 19.9022L125.11 19.4827L129.92 19.0661L134.74 18.6524L139.55 18.2418L144.36 17.8343L149.17 17.4301L153.98 17.0291L158.8 16.6317L163.61 16.2378L168.42 15.8475L173.23 15.4611L178.05 15.0784L182.86 14.6996L187.67 14.3248L192.48 13.9542L197.29 13.5878L202.11 13.2257L206.92 12.868L211.73 12.5147L216.54 12.166L221.35 11.822L226.17 11.4827L230.98 11.1481L235.79 10.8185L240.6 10.4939L245.41 10.1743L250.23 9.85992L255.04 9.55072L259.85 9.24677L264.66 8.94824L269.47 8.65509L274.29 8.36749L279.1 8.08551L283.91 7.80914L288.72 7.53851L293.53 7.27368L298.35 7.01465L303.16 6.7616L307.97 6.51453L312.78 6.27344L317.59 6.03845L322.41 5.80969L327.22 5.5871L332.03 5.37079L336.84 5.16083L341.65 4.95721L346.47 4.76001L351.28 4.56934L356.09 4.38513L360.9 4.20752L365.71 4.0365L370.53 3.87213L375.34 3.71448L380.15 3.56354L384.96 3.41937L389.77 3.28198L394.59 3.15149L399.4 3.02783L404.21 2.91107L409.02 2.80127L413.83 2.69843L418.65 2.60254L423.46 2.51367L428.27 2.43182L433.08 2.35706L437.89 2.28931L442.71 2.2287L447.52 2.17511L452.33 2.12872L457.14 2.08942L461.95 2.05725L466.77 2.03217L471.58 2.01428L476.39 2.0036L481.2 2L486.02 2.0036L490.83 2.01428L495.64 2.03217L500.45 2.05725L505.26 2.08942L510.08 2.12872L514.89 2.17511L519.7 2.2287L524.51 2.28931L529.32 2.35706L534.14 2.43182L538.95 2.51367L543.76 2.60254L548.57 2.69843L553.38 2.80127L558.2 2.91107L563.01 3.02783L567.82 3.15149L572.63 3.28198L577.44 3.41937L582.26 3.56354L587.07 3.71448L591.88 3.87213L596.69 4.0365L601.5 4.20752L606.32 4.38513L611.13 4.56934L615.94 4.76001L620.75 4.95721L625.56 5.16083L630.38 5.37079L635.19 5.5871L640 5.80969L644.81 6.03845L649.62 6.27344L654.44 6.51453L659.25 6.7616L664.06 7.01465L668.87 7.27368L673.68 7.53851L678.5 7.80914L683.31 8.08551L688.12 8.36749L692.93 8.65509L697.74 8.94824L702.56 9.24677L707.37 9.55072L712.18 9.85992L716.99 10.1743L721.8 10.4939L726.62 10.8185L731.43 11.1481L736.24 11.4827L741.05 11.822L745.86 12.166L750.68 12.5147L755.49 12.868L760.3 13.2257L765.11 13.5878L769.92 13.9542L774.74 14.3248L779.55 14.6996L784.36 15.0784L789.17 15.4611L793.98 15.8475L798.8 16.2378L803.61 16.6317L808.42 17.0291L813.23 17.4301L818.05 17.8343L822.86 18.2418L827.67 18.6524L832.48 19.0661L837.29 19.4827L842.11 19.9022L846.92 20.3244L851.73 20.7492L856.54 21.1766L861.35 21.6064L866.17 22.0385L870.98 22.4728L875.79 22.9092L880.6 23.3477L885.41 23.788L890.23 24.2301L895.04 24.6738L899.85 25.1192L904.66 25.5659L909.47 26.014L914.29 26.4634L919.1 26.9139L923.91 27.3654L928.72 27.8177L933.53 28.2709L938.35 28.7247L943.16 29.1791L947.97 29.6339L952.78 30.0891L957.59 30.5445L962.41 31L967.22 31.4555L972.03 31.9109L976.84 32.3661L981.65 32.8209L986.47 33.2753L991.28 33.7291L996.09 34.1823L1000.9 34.6346L1005.71 35.0861L1010.53 35.5366L1015.34 35.986L1020.15 36.4341L1024.96 36.8808L1029.77 37.3262L1034.59 37.7699L1039.4 38.212L1044.21 38.6523L1049.02 39.0908L1053.83 39.5272L1058.65 39.9615L1063.46 40.3936L1068.27 40.8234L1073.08 41.2508L1077.89 41.6756L1082.71 42.0978L1087.52 42.5173L1092.33 42.9339L1097.14 43.3476L1101.95 43.7582L1106.77 44.1657L1111.58 44.5699L1116.39 44.9709L1121.2 45.3683L1126.02 45.7622L1130.83 46.1525L1135.64 46.5389L1140.45 46.9216L1145.26 47.3004L1150.08 47.6752L1154.89 48.0458L1159.7 48.4122L1164.51 48.7743L1169.32 49.132L1174.14 49.4853L1178.95 49.834L1183.76 50.178L1188.57 50.5173L1193.38 50.8519L1198.2 51.1815L1203.01 51.5061L1207.82 51.8257L1212.63 52.1401L1217.44 52.4493L1222.26 52.7532L1227.07 53.0518L1231.88 53.3449L1236.69 53.6325L1241.5 53.9145L1246.32 54.1909L1251.13 54.4615L1255.94 54.7263L1260.75 54.9854L1265.56 55.2384L1270.38 55.4855L1275.19 55.7266L1280 55.9615L1284.81 56.1903L1289.62 56.4129L1294.44 56.6292L1299.25 56.8392L1304.06 57.0428L1308.87 57.24L1313.68 57.4307L1318.5 57.6149L1323.31 57.7925L1328.12 57.9635L1332.93 58.1279L1337.74 58.2855L1342.56 58.4365L1347.37 58.5806L1352.18 58.718L1356.99 58.8485L1361.8 58.9722L1366.62 59.0889L1371.43 59.1987L1376.24 59.3016L1381.05 59.3975L1385.86 59.4863L1390.68 59.5682L1395.49 59.6429L1400.3 59.7107L1405.11 59.7713L1409.92 59.8249L1414.74 59.8713L1419.55 59.9106L1424.36 59.9427L1429.17 59.9678L1433.98 59.9857L1438.8 59.9964L1443.61 60L1448.42 59.9964L1453.23 59.9857L1458.05 59.9678L1462.86 59.9427L1467.67 59.9106L1472.48 59.8713L1477.29 59.8249L1482.11 59.7713L1486.92 59.7107L1491.73 59.6429L1496.54 59.5682L1501.35 59.4863L1506.17 59.3975L1510.98 59.3016L1515.79 59.1987L1520.6 59.0889L1525.41 58.9722L1530.23 58.8485L1535.04 58.718L1539.85 58.5806L1544.66 58.4365L1549.47 58.2855L1554.29 58.1279L1559.1 57.9635L1563.91 57.7925L1568.72 57.6149L1573.53 57.4307L1578.35 57.24L1583.16 57.0428L1587.97 56.8392L1592.78 56.6292L1597.59 56.4129L1602.41 56.1903L1607.22 55.9615L1612.03 55.7266L1616.84 55.4855L1621.65 55.2384L1626.47 54.9854L1631.28 54.7263L1636.09 54.4615L1640.9 54.1909L1645.71 53.9145L1650.53 53.6325L1655.34 53.3449L1660.15 53.0518L1664.96 52.7532L1669.77 52.4493L1674.59 52.1401L1679.4 51.8257L1684.21 51.5061L1689.02 51.1815L1693.83 50.8519L1698.65 50.5173L1703.46 50.178L1708.27 49.834L1713.08 49.4853L1717.89 49.132L1722.71 48.7743L1727.52 48.4122L1732.33 48.0458L1737.14 47.6752L1741.95 47.3004L1746.77 46.9216L1751.58 46.5389L1756.39 46.1525L1761.2 45.7622L1766.02 45.3683L1770.83 44.9709L1775.64 44.5699L1780.45 44.1657L1785.26 43.7582L1790.08 43.3476L1794.89 42.9339L1799.7 42.5173L1804.51 42.0978L1809.32 41.6756L1814.14 41.2508L1818.95 40.8234L1823.76 40.3936L1828.57 39.9615L1833.38 39.5272L1838.2 39.0908L1843.01 38.6523L1847.82 38.212L1852.63 37.7699L1857.44 37.3262L1862.26 36.8808L1867.07 36.4341L1871.88 35.986L1876.69 35.5366L1881.5 35.0861L1886.32 34.6346L1891.13 34.1823L1895.94 33.7291L1900.75 33.2753L1905.56 32.8209L1910.38 32.3661L1915.19 31.9109L1920 31.4555V0H0V31Z"
            fill="#F2F2F4"
          />
        </svg>
        <div className={styles.pageContentMiddle}>
          <p className={styles.pageContentMiddleTitle}>Наши производители</p>
          <ul className={styles.pageContentMiddleList}>
            <button className={styles.pageContentMiddleBtn}>
              <img src={leftBtn} alt="leftBtn" />
            </button>
            {middleCards.map((card) => (
              <li key={card.id} className={styles.pageContentMiddleItem}>
                <img src={card.icon} alt="icon" />
              </li>
            ))}
            <button className={styles.pageContentMiddleBtn}>
              <img src={rightBtn} alt="rightBtn" />
            </button>
          </ul>
          <p className={styles.pageContentMiddleSubtitle}>
            Lorem ipsum dolor sit amet consectetur. Non eget blandit in euismod
            felis id quisque nunc. Non orci lacus elit mauris velit gravida
            imperdiet id. Ipsum pulvinar ac ut sociis. Sed magna gravida
            consequat et euismod aenean quis mauris. Ut etiam egestas ultrices
            faucibus ultrices nisl enim consequat faucibus. Nibh id leo
            ullamcorper eleifend. Id at commodo interdum et leo.
          </p>
        </div>
        <svg
          className={styles.pageContentBottomSvg}
          viewBox="0 0 1920 60"
          fill="none"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1920 29L1915.19 29.4555L1910.38 29.9109L1905.56 30.3661L1900.75 30.8209L1895.94 31.2753L1891.13 31.7291L1886.32 32.1823L1881.5 32.6346L1876.69 33.0861L1871.88 33.5366L1867.07 33.986L1862.26 34.4341L1857.44 34.8808L1852.63 35.3262L1847.82 35.7699L1843.01 36.212L1838.2 36.6523L1833.38 37.0908L1828.57 37.5272L1823.76 37.9615L1818.95 38.3936L1814.14 38.8234L1809.32 39.2508L1804.51 39.6756L1799.7 40.0978L1794.89 40.5173L1790.08 40.9339L1785.26 41.3476L1780.45 41.7582L1775.64 42.1657L1770.83 42.5699L1766.02 42.9709L1761.2 43.3683L1756.39 43.7622L1751.58 44.1525L1746.77 44.5389L1741.95 44.9216L1737.14 45.3004L1732.33 45.6752L1727.52 46.0458L1722.71 46.4122L1717.89 46.7743L1713.08 47.132L1708.27 47.4853L1703.46 47.834L1698.65 48.178L1693.83 48.5173L1689.02 48.8519L1684.21 49.1815L1679.4 49.5061L1674.59 49.8257L1669.77 50.1401L1664.96 50.4493L1660.15 50.7532L1655.34 51.0518L1650.53 51.3449L1645.71 51.6325L1640.9 51.9145L1636.09 52.1909L1631.28 52.4615L1626.47 52.7263L1621.65 52.9854L1616.84 53.2384L1612.03 53.4855L1607.22 53.7266L1602.41 53.9615L1597.59 54.1903L1592.78 54.4129L1587.97 54.6292L1583.16 54.8392L1578.35 55.0428L1573.53 55.24L1568.72 55.4307L1563.91 55.6149L1559.1 55.7925L1554.29 55.9635L1549.47 56.1279L1544.66 56.2855L1539.85 56.4365L1535.04 56.5806L1530.23 56.718L1525.41 56.8485L1520.6 56.9722L1515.79 57.0889L1510.98 57.1987L1506.17 57.3016L1501.35 57.3975L1496.54 57.4863L1491.73 57.5682L1486.92 57.6429L1482.11 57.7107L1477.29 57.7713L1472.48 57.8249L1467.67 57.8713L1462.86 57.9106L1458.05 57.9427L1453.23 57.9678L1448.42 57.9857L1443.61 57.9964L1438.8 58L1433.98 57.9964L1429.17 57.9857L1424.36 57.9678L1419.55 57.9427L1414.74 57.9106L1409.92 57.8713L1405.11 57.8249L1400.3 57.7713L1395.49 57.7107L1390.68 57.6429L1385.86 57.5682L1381.05 57.4863L1376.24 57.3975L1371.43 57.3016L1366.62 57.1987L1361.8 57.0889L1356.99 56.9722L1352.18 56.8485L1347.37 56.718L1342.56 56.5806L1337.74 56.4365L1332.93 56.2855L1328.12 56.1279L1323.31 55.9635L1318.5 55.7925L1313.68 55.6149L1308.87 55.4307L1304.06 55.24L1299.25 55.0428L1294.44 54.8392L1289.62 54.6292L1284.81 54.4129L1280 54.1903L1275.19 53.9615L1270.38 53.7266L1265.56 53.4855L1260.75 53.2384L1255.94 52.9854L1251.13 52.7263L1246.32 52.4615L1241.5 52.1909L1236.69 51.9145L1231.88 51.6325L1227.07 51.3449L1222.26 51.0518L1217.44 50.7532L1212.63 50.4493L1207.82 50.1401L1203.01 49.8257L1198.2 49.5061L1193.38 49.1815L1188.57 48.8519L1183.76 48.5173L1178.95 48.178L1174.14 47.834L1169.32 47.4853L1164.51 47.132L1159.7 46.7743L1154.89 46.4122L1150.08 46.0458L1145.26 45.6752L1140.45 45.3004L1135.64 44.9216L1130.83 44.5389L1126.02 44.1525L1121.2 43.7622L1116.39 43.3683L1111.58 42.9709L1106.77 42.5699L1101.95 42.1657L1097.14 41.7582L1092.33 41.3476L1087.52 40.9339L1082.71 40.5173L1077.89 40.0978L1073.08 39.6756L1068.27 39.2508L1063.46 38.8234L1058.65 38.3936L1053.83 37.9615L1049.02 37.5272L1044.21 37.0908L1039.4 36.6523L1034.59 36.212L1029.77 35.7699L1024.96 35.3262L1020.15 34.8808L1015.34 34.4341L1010.53 33.986L1005.71 33.5366L1000.9 33.0861L996.09 32.6346L991.278 32.1823L986.466 31.7291L981.654 31.2753L976.842 30.8209L972.03 30.3661L967.218 29.9109L962.406 29.4555L957.594 29L952.782 28.5445L947.97 28.0891L943.158 27.6339L938.346 27.1791L933.534 26.7247L928.722 26.2709L923.91 25.8177L919.098 25.3654L914.286 24.9139L909.474 24.4634L904.662 24.014L899.85 23.5659L895.038 23.1192L890.226 22.6738L885.414 22.2301L880.602 21.788L875.79 21.3477L870.978 20.9092L866.165 20.4728L861.353 20.0385L856.541 19.6064L851.729 19.1766L846.917 18.7492L842.105 18.3244L837.293 17.9022L832.481 17.4827L827.669 17.0661L822.857 16.6524L818.045 16.2418L813.233 15.8343L808.421 15.4301L803.609 15.0291L798.797 14.6317L793.985 14.2378L789.173 13.8475L784.361 13.4611L779.549 13.0784L774.737 12.6996L769.925 12.3248L765.113 11.9542L760.301 11.5878L755.489 11.2257L750.677 10.868L745.865 10.5147L741.053 10.166L736.241 9.82196L731.429 9.48267L726.617 9.14813L721.805 8.81854L716.993 8.4939L712.181 8.17432L707.369 7.85992L702.556 7.55072L697.744 7.24677L692.932 6.94824L688.12 6.65509L683.308 6.36749L678.496 6.08551L673.684 5.80914L668.872 5.53851L664.06 5.27368L659.248 5.01465L654.436 4.7616L649.624 4.51453L644.812 4.27344L640 4.03845L635.188 3.80969L630.376 3.5871L625.564 3.37079L620.752 3.16083L615.94 2.95721L611.128 2.76001L606.316 2.56934L601.504 2.38513L596.692 2.20752L591.88 2.0365L587.068 1.87213L582.256 1.71448L577.444 1.56354L572.632 1.41937L567.82 1.28198L563.008 1.15149L558.196 1.02783L553.384 0.911072L548.572 0.80127L543.76 0.698425L538.947 0.602539L534.135 0.513672L529.323 0.431824L524.511 0.357056L519.699 0.289307L514.887 0.228699L510.075 0.17511L505.263 0.128723L500.451 0.0894165L495.639 0.057251L490.827 0.0321655L486.015 0.0142822L481.203 0.00360107L476.391 0L471.579 0.00360107L466.767 0.0142822L461.955 0.0321655L457.143 0.057251L452.331 0.0894165L447.519 0.128723L442.707 0.17511L437.895 0.228699L433.083 0.289307L428.271 0.357056L423.459 0.431824L418.647 0.513672L413.835 0.602539L409.023 0.698425L404.211 0.80127L399.399 0.911072L394.587 1.02783L389.775 1.15149L384.963 1.28198L380.15 1.41937L375.338 1.56354L370.526 1.71448L365.714 1.87213L360.902 2.0365L356.09 2.20752L351.278 2.38513L346.466 2.56934L341.654 2.76001L336.842 2.95721L332.03 3.16083L327.218 3.37079L322.406 3.5871L317.594 3.80969L312.782 4.03845L307.97 4.27344L303.158 4.51453L298.346 4.7616L293.534 5.01465L288.722 5.27368L283.91 5.53851L279.098 5.80914L274.286 6.08551L269.474 6.36749L264.662 6.65509L259.85 6.94824L255.038 7.24677L250.226 7.55072L245.414 7.85992L240.602 8.17432L235.79 8.4939L230.978 8.81854L226.166 9.14813L221.354 9.48267L216.541 9.82196L211.729 10.166L206.917 10.5147L202.105 10.868L197.293 11.2257L192.481 11.5878L187.669 11.9542L182.857 12.3248L178.045 12.6996L173.233 13.0784L168.421 13.4611L163.609 13.8475L158.797 14.2378L153.985 14.6317L149.173 15.0291L144.361 15.4301L139.549 15.8343L134.737 16.2418L129.925 16.6524L125.113 17.0661L120.301 17.4827L115.489 17.9022L110.677 18.3244L105.865 18.7492L101.053 19.1766L96.2407 19.6064L91.4287 20.0385L86.6166 20.4728L81.8046 20.9092L76.9926 21.3477L72.1805 21.788L67.3685 22.2301L62.5565 22.6738L57.7445 23.1192L52.9324 23.5659L48.1204 24.014L43.3083 24.4634L38.4963 24.9139L33.6843 25.3654L28.8723 25.8177L24.0603 26.2709L19.2482 26.7247L14.4362 27.1791L9.62415 27.6339L4.81213 28.0891L0.00012207 28.5445V60H1920V29Z"
            fill="#F2F2F4"
          />
        </svg>
        <div className={styles.pageContentBottomContainer}>
          <div className={styles.pageContentBottomContent}>
            <p className={styles.pageContentBottomContentTitle}>Схема работы</p>
            <p className={styles.pageContentBottomContentSubtitle}>
              Lorem ipsum dolor sit amet consectetur. Augue velit in enim
              sagittis imperdiet sit mauris. Vitae sit in fusce massa amet.
            </p>
          </div>
          <div className={styles.pageContentBottomCards}>
            <ul className={styles.pageContentBottomCardsList}>
              {bottomCards.map((card) => (
                <li key={card.id} className={styles.pageContentBottomCard}>
                  <div className={styles.pageContentBottomCardContent}>
                    <p className={styles.pageContentBottomCardNumber}>
                      {card.id}
                    </p>
                    <p className={styles.pageContentBottomCardTitle}>
                      {card.title}
                    </p>
                  </div>
                  <p className={styles.pageContentBottomCardSubtitle}>
                    {card.subtitle}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <button className={styles.pageContentBottomBtn}>
            ОСТАВИТЬ ЗАЯВКУ
          </button>
        </div>
        <svg
          className={styles.pageContentEndSvg}
          viewBox="0 0 1920 60"
          fill="none"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="endGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#041080" />
              <stop offset="100%" stopColor="#0926c0" />
            </linearGradient>
          </defs>
          <path
            d="M1920 29L1915.19 29.4555L1910.38 29.9109L1905.56 30.3661L1900.75 30.8209L1895.94 31.2753L1891.13 31.7291L1886.32 32.1823L1881.5 32.6346L1876.69 33.0861L1871.88 33.5366L1867.07 33.986L1862.26 34.4341L1857.44 34.8808L1852.63 35.3262L1847.82 35.7699L1843.01 36.212L1838.2 36.6523L1833.38 37.0908L1828.57 37.5272L1823.76 37.9615L1818.95 38.3936L1814.14 38.8234L1809.32 39.2508L1804.51 39.6756L1799.7 40.0978L1794.89 40.5173L1790.08 40.9339L1785.26 41.3476L1780.45 41.7582L1775.64 42.1657L1770.83 42.5699L1766.02 42.9709L1761.2 43.3683L1756.39 43.7622L1751.58 44.1525L1746.77 44.5389L1741.95 44.9216L1737.14 45.3004L1732.33 45.6752L1727.52 46.0458L1722.71 46.4122L1717.89 46.7743L1713.08 47.132L1708.27 47.4853L1703.46 47.834L1698.65 48.178L1693.83 48.5173L1689.02 48.8519L1684.21 49.1815L1679.4 49.5061L1674.59 49.8257L1669.77 50.1401L1664.96 50.4493L1660.15 50.7532L1655.34 51.0518L1650.53 51.3449L1645.71 51.6325L1640.9 51.9145L1636.09 52.1909L1631.28 52.4615L1626.47 52.7263L1621.65 52.9854L1616.84 53.2384L1612.03 53.4855L1607.22 53.7266L1602.41 53.9615L1597.59 54.1903L1592.78 54.4129L1587.97 54.6292L1583.16 54.8392L1578.35 55.0428L1573.53 55.24L1568.72 55.4307L1563.91 55.6149L1559.1 55.7925L1554.29 55.9635L1549.47 56.1279L1544.66 56.2855L1539.85 56.4365L1535.04 56.5806L1530.23 56.718L1525.41 56.8485L1520.6 56.9722L1515.79 57.0889L1510.98 57.1987L1506.17 57.3016L1501.35 57.3975L1496.54 57.4863L1491.73 57.5682L1486.92 57.6429L1482.11 57.7107L1477.29 57.7713L1472.48 57.8249L1467.67 57.8713L1462.86 57.9106L1458.05 57.9427L1453.23 57.9678L1448.42 57.9857L1443.61 57.9964L1438.8 58L1433.98 57.9964L1429.17 57.9857L1424.36 57.9678L1419.55 57.9427L1414.74 57.9106L1409.92 57.8713L1405.11 57.8249L1400.3 57.7713L1395.49 57.7107L1390.68 57.6429L1385.86 57.5682L1381.05 57.4863L1376.24 57.3975L1371.43 57.3016L1366.62 57.1987L1361.8 57.0889L1356.99 56.9722L1352.18 56.8485L1347.37 56.718L1342.56 56.5806L1337.74 56.4365L1332.93 56.2855L1328.12 56.1279L1323.31 55.9635L1318.5 55.7925L1313.68 55.6149L1308.87 55.4307L1304.06 55.24L1299.25 55.0428L1294.44 54.8392L1289.62 54.6292L1284.81 54.4129L1280 54.1903L1275.19 53.9615L1270.38 53.7266L1265.56 53.4855L1260.75 53.2384L1255.94 52.9854L1251.13 52.7263L1246.32 52.4615L1241.5 52.1909L1236.69 51.9145L1231.88 51.6325L1227.07 51.3449L1222.26 51.0518L1217.44 50.7532L1212.63 50.4493L1207.82 50.1401L1203.01 49.8257L1198.2 49.5061L1193.38 49.1815L1188.57 48.8519L1183.76 48.5173L1178.95 48.178L1174.14 47.834L1169.32 47.4853L1164.51 47.132L1159.7 46.7743L1154.89 46.4122L1150.08 46.0458L1145.26 45.6752L1140.45 45.3004L1135.64 44.9216L1130.83 44.5389L1126.02 44.1525L1121.2 43.7622L1116.39 43.3683L1111.58 42.9709L1106.77 42.5699L1101.95 42.1657L1097.14 41.7582L1092.33 41.3476L1087.52 40.9339L1082.71 40.5173L1077.89 40.0978L1073.08 39.6756L1068.27 39.2508L1063.46 38.8234L1058.65 38.3936L1053.83 37.9615L1049.02 37.5272L1044.21 37.0908L1039.4 36.6523L1034.59 36.212L1029.77 35.7699L1024.96 35.3262L1020.15 34.8808L1015.34 34.4341L1010.53 33.986L1005.71 33.5366L1000.9 33.0861L996.09 32.6346L991.278 32.1823L986.466 31.7291L981.654 31.2753L976.842 30.8209L972.03 30.3661L967.218 29.9109L962.406 29.4555L957.594 29L952.782 28.5445L947.97 28.0891L943.158 27.6339L938.346 27.1791L933.534 26.7247L928.722 26.2709L923.91 25.8177L919.098 25.3654L914.286 24.9139L909.474 24.4634L904.662 24.014L899.85 23.5659L895.038 23.1192L890.226 22.6738L885.414 22.2301L880.602 21.788L875.79 21.3477L870.978 20.9092L866.165 20.4728L861.353 20.0385L856.541 19.6064L851.729 19.1766L846.917 18.7492L842.105 18.3244L837.293 17.9022L832.481 17.4827L827.669 17.0661L822.857 16.6524L818.045 16.2418L813.233 15.8343L808.421 15.4301L803.609 15.0291L798.797 14.6317L793.985 14.2378L789.173 13.8475L784.361 13.4611L779.549 13.0784L774.737 12.6996L769.925 12.3248L765.113 11.9542L760.301 11.5878L755.489 11.2257L750.677 10.868L745.865 10.5147L741.053 10.166L736.241 9.82196L731.429 9.48267L726.617 9.14813L721.805 8.81854L716.993 8.4939L712.181 8.17432L707.369 7.85992L702.556 7.55072L697.744 7.24677L692.932 6.94824L688.12 6.65509L683.308 6.36749L678.496 6.08551L673.684 5.80914L668.872 5.53851L664.06 5.27368L659.248 5.01465L654.436 4.7616L649.624 4.51453L644.812 4.27344L640 4.03845L635.188 3.80969L630.376 3.5871L625.564 3.37079L620.752 3.16083L615.94 2.95721L611.128 2.76001L606.316 2.56934L601.504 2.38513L596.692 2.20752L591.88 2.0365L587.068 1.87213L582.256 1.71448L577.444 1.56354L572.632 1.41937L567.82 1.28198L563.008 1.15149L558.196 1.02783L553.384 0.911072L548.572 0.80127L543.76 0.698425L538.947 0.602539L534.135 0.513672L529.323 0.431824L524.511 0.357056L519.699 0.289307L514.887 0.228699L510.075 0.17511L505.263 0.128723L500.451 0.0894165L495.639 0.057251L490.827 0.0321655L486.015 0.0142822L481.203 0.00360107L476.391 0L471.579 0.00360107L466.767 0.0142822L461.955 0.0321655L457.143 0.057251L452.331 0.0894165L447.519 0.128723L442.707 0.17511L437.895 0.228699L433.083 0.289307L428.271 0.357056L423.459 0.431824L418.647 0.513672L413.835 0.602539L409.023 0.698425L404.211 0.80127L399.399 0.911072L394.587 1.02783L389.775 1.15149L384.963 1.28198L380.15 1.41937L375.338 1.56354L370.526 1.71448L365.714 1.87213L360.902 2.0365L356.09 2.20752L351.278 2.38513L346.466 2.56934L341.654 2.76001L336.842 2.95721L332.03 3.16083L327.218 3.37079L322.406 3.5871L317.594 3.80969L312.782 4.03845L307.97 4.27344L303.158 4.51453L298.346 4.7616L293.534 5.01465L288.722 5.27368L283.91 5.53851L279.098 5.80914L274.286 6.08551L269.474 6.36749L264.662 6.65509L259.85 6.94824L255.038 7.24677L250.226 7.55072L245.414 7.85992L240.602 8.17432L235.79 8.4939L230.978 8.81854L226.166 9.14813L221.354 9.48267L216.541 9.82196L211.729 10.166L206.917 10.5147L202.105 10.868L197.293 11.2257L192.481 11.5878L187.669 11.9542L182.857 12.3248L178.045 12.6996L173.233 13.0784L168.421 13.4611L163.609 13.8475L158.797 14.2378L153.985 14.6317L149.173 15.0291L144.361 15.4301L139.549 15.8343L134.737 16.2418L129.925 16.6524L125.113 17.0661L120.301 17.4827L115.489 17.9022L110.677 18.3244L105.865 18.7492L101.053 19.1766L96.2407 19.6064L91.4287 20.0385L86.6166 20.4728L81.8046 20.9092L76.9926 21.3477L72.1805 21.788L67.3685 22.2301L62.5565 22.6738L57.7445 23.1192L52.9324 23.5659L48.1204 24.014L43.3083 24.4634L38.4963 24.9139L33.6843 25.3654L28.8723 25.8177L24.0603 26.2709L19.2482 26.7247L14.4362 27.1791L9.62415 27.6339L4.81213 28.0891L0.00012207 28.5445V60H1920V29Z"
            fill="url(#endGradient)"
          />
        </svg>
        <div className={styles.pageContentEndContainer}>
          <div className={styles.pageContentEndContent}>
            <p className={styles.pageContentEndContentTitle}>
              Ответы на самые популярные вопросы в сфере
            </p>
            <div className={styles.pageContentEndContentList}>
              {endList.map((item) => (
                <div key={item.id} className={styles.pageContentEndContentItem}>
                  <div
                    className={`${styles.pageContentEndContentItemHeader} ${
                      openItemId === item.id
                        ? styles.pageContentEndContentItemHeaderOpened
                        : ""
                    }`}
                  >
                    <p className={styles.pageContentEndContentItemTitle}>
                      {item.title}
                    </p>
                    <button
                      className={`${styles.pageContentEndContentItemButton} ${
                        openItemId === item.id
                          ? styles.pageContentEndContentItemButtonOpened
                          : ""
                      }`}
                      onClick={() => toggleItem(item.id)}
                    >
                      <img
                        src={openItemId === item.id ? arrowOpen : arrow}
                        alt="arrow"
                        className={`${styles.arrow} ${
                          openItemId === item.id ? styles.arrowOpen : ""
                        }`}
                      />
                    </button>
                  </div>
                  <div
                    className={`${styles.pageContentEndContentItemContent} ${
                      openItemId === item.id
                        ? styles.pageContentEndContentItemContentOpened
                        : ""
                    }`}
                  >
                    {openItemId === item.id && (
                      <div className={styles.pageContentEndContentItemSubtitle}>
                        <p>{item.subtitle}</p>
                        <p>{item.subtitle2}</p>
                        <p>{item.subtitle3}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
