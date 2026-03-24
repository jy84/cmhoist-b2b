import { notFound } from 'next/navigation';
import styles from './brand.module.css';
import Link from 'next/link';

import { brandsData } from '../../data/brands';

export default function BrandPage({ params }: { params: { id: string } }) {
  const brandId = params.id.toLowerCase();
  const brand = brandsData[brandId];

  if (!brand) {
    notFound();
  }

  return (
    <div className={styles.brandPage}>
      <header 
        className={styles.header}
        style={{ backgroundImage: `url(${brand.bgImage})` }}
      >
        <div className={styles.headerOverlay}></div>
        <div className={styles.headerContainer}>
          <h1>{brand.name}</h1>
          <p className={styles.tagline}>{brand.title}</p>
        </div>
      </header>

      <div className={styles.content}>
        <section className={styles.intro}>
          {brand.subtitle && <h2>{brand.subtitle}</h2>}
          <p className={styles.description}>{brand.description}</p>
        </section>

        {brand.categories && brand.categories.length > 0 && (
          <section className={styles.products}>
            <h2>{brand.name} 주요 라인업 (Products)</h2>
            <div className={styles.grid}>
              {brand.categories.map((cat: any, i: number) => (
                <div key={i} className={styles.card}>
                  <h3>{cat.name}</h3>
                  <ul>
                    {cat.items.map((item: string, j: number) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        <div className={styles.actions}>
          <Link href="/products" className={styles.backBtn}>전체 제품 돌아가기</Link>
          <Link href="/contact" className={styles.contactBtn}>견적 문의하기</Link>
        </div>
      </div>
    </div>
  );
}
