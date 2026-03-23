import Link from 'next/link';
import styles from './BrandLogos.module.css';

export default function BrandLogos() {
  const brands = [
    { id: "cm", name: "CM", subtitle: "Columbus McKinnon", image: "/images/bg_cm.png" },
    { id: "stahl", name: "STAHL", subtitle: "CraneSystems", image: "/images/bg_stahl.png" },
    { id: "yale", name: "Yale", subtitle: "Hoisting Equipment", image: "/images/bg_yale.png" },
    { id: "duff-norton", name: "Duff-Norton", subtitle: "Motion Technology", image: "/images/bg_duff_norton.png" }
  ];

  return (
    <section className={styles.logosSection}>
        <p className={styles.sectionSubtitle}>글로벌 파트너</p>
        <h2 className={styles.sectionTitle}>검증된 글로벌 브랜드 제공</h2>
        <div className={styles.logoGrid}>
          {brands.map((brand, i) => (
            <Link 
              key={i} 
              href={`/brands/${brand.id}`} 
              className={styles.logoItem}
              style={{ backgroundImage: `url(${brand.image})` }}
            >
              <div className={styles.overlay}></div>
              <div className={styles.content}>
                <h3>{brand.name}</h3>
                <span>{brand.subtitle}</span>
              </div>
            </Link>
          ))}
        </div>
    </section>
  );
}
