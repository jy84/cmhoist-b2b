import Link from 'next/link';
import styles from './BrandLogos.module.css';

export default function BrandLogos() {
  const brands = [
    { id: "cm", name: "CM", subtitle: "Columbus McKinnon" },
    { id: "stahl", name: "STAHL", subtitle: "CraneSystems" },
    { id: "yale", name: "Yale", subtitle: "Hoisting Equipment" },
    { id: "duff-norton", name: "Duff-Norton", subtitle: "Motion Technology" }
  ];

  return (
    <section className={styles.logosSection}>
        <p className={styles.sectionSubtitle}>글로벌 파트너</p>
        <h2 className={styles.sectionTitle}>검증된 글로벌 브랜드 제공</h2>
        <div className={styles.logoGrid}>
          {brands.map((brand, i) => (
            <Link key={i} href={`/brands/${brand.id}`} className={styles.logoItem}>
              <h3>{brand.name}</h3>
              <span>{brand.subtitle}</span>
            </Link>
          ))}
        </div>
    </section>
  );
}
