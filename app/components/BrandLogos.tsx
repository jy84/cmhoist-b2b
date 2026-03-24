"use client";

import { useState } from 'react';
import Link from 'next/link';
import { brandsData } from '../data/brands';
import styles from './BrandLogos.module.css';

export default function BrandLogos() {
  const [showAll, setShowAll] = useState(false);
  
  // Featured brands for the 2x2 grid
  const featuredIds = ["cm", "stahl", "yale", "duff-norton"];
  const featuredBrands = featuredIds.map(id => brandsData[id]);
  
  // All other brands
  const otherBrands = Object.values(brandsData).filter(brand => !featuredIds.includes(brand.id));

  return (
    <section className={styles.logosSection}>
        <p className={styles.sectionSubtitle}>글로벌 파트너</p>
        <h2 className={styles.sectionTitle}>검증된 글로벌 브랜드 제공</h2>
        
        <div className={styles.logoGrid}>
          {featuredBrands.map((brand, i) => (
            <Link 
              key={brand.id} 
              href={`/brands/${brand.id}`} 
              className={styles.logoItem}
              style={{ backgroundImage: `url(${brand.bgImage})` }}
            >
              <div className={styles.overlay}></div>
              <div className={styles.content}>
                <h3>{brand.name}</h3>
                <span>{brand.subtitle}</span>
              </div>
            </Link>
          ))}
        </div>

        {!showAll ? (
          <div className={styles.showMoreContainer}>
            <button className={styles.showMoreBtn} onClick={() => setShowAll(true)}>
              모든 브랜드 보기 (+{otherBrands.length})
            </button>
          </div>
        ) : (
          <div className={`${styles.otherBrandsGrid} ${styles.fadeIn}`}>
            {otherBrands.map((brand) => (
              <Link 
                key={brand.id} 
                href={`/brands/${brand.id}`} 
                className={styles.minilogoItem}
                style={{ backgroundImage: `url(${brand.bgImage})` }}
              >
                <div className={styles.miniOverlay}></div>
                <div className={styles.miniContent}>
                  <h4>{brand.name}</h4>
                </div>
              </Link>
            ))}
          </div>
        )}
    </section>
  );
}
