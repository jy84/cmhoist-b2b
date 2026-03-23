'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './products.module.css';

const productList = [
  { id: 1, category: "electric", name: "CM-항주공장-EU-전기체인호이스트", brand: "CM", image: "/images/prod_electric.png" },
  { id: 2, category: "electric", name: "CM-파워스타-대형", brand: "CM", image: "/images/prod_electric.png" },
  { id: 3, category: "air", name: "CM-에어 로드스타 XL", brand: "CM", image: "/images/prod_air.png" },
  { id: 4, category: "electric", name: "CM-샵스타 소형", brand: "CM", image: "/images/prod_electric.png" },
  { id: 5, category: "rigging", name: "CM-방폭파레트", brand: "CM", image: "/images/prod_rigging.png" },
  { id: 6, category: "winch", name: "CM-YALE-엔드리스윈치", brand: "Yale", image: "/images/prod_winch.png" },
  { id: 7, category: "air", name: "CM-YALE-에어호이스트", brand: "Yale", image: "/images/prod_air.png" },
  { id: 8, category: "rigging", name: "CM-YALE 콘테이너러그", brand: "Yale", image: "/images/prod_rigging.png" },
  { id: 9, category: "winch", name: "CM-PFFAF-핸드윈치", brand: "CM", image: "/images/prod_winch.png" },
  { id: 10, category: "jack", name: "CM-PFFAF 잭", brand: "CM", image: "/images/prod_jack.png" },
  { id: 11, category: "electric", name: "CM-COFFING-소형 전기 호이스트", brand: "CM", image: "/images/prod_electric.png" },
  { id: 12, category: "special", name: "CMCO offshore presentation", brand: "CM", image: "/images/bg_cm.png" },
  { id: 13, category: "rigging", name: "CM 체인-샤클-링크", brand: "CM", image: "/images/prod_rigging.png" },
  { id: 14, category: "special", name: "CM-STAHL-SK와이어호이스트", brand: "STAHL", image: "/images/prod_electric.png" },
  { id: 15, category: "rigging", name: "CM-YALE-가종 슬링", brand: "Yale", image: "/images/prod_rigging.png" },
  { id: 16, category: "jack", name: "CM-YALE-잭", brand: "Yale", image: "/images/prod_jack.png" },
  { id: 17, category: "special", name: "CM-로드스타-시품-의약용", brand: "CM", image: "/images/prod_electric.png" },
  { id: 18, category: "electric", name: "CM-STAHL-방폭전기체인", brand: "STAHL", image: "/images/prod_electric.png" },
  { id: 19, category: "manual", name: "CM-YALE 360도", brand: "Yale", image: "/images/prod_manual.png" },
  { id: 20, category: "manual", name: "CM-YALE 핸들러", brand: "Yale", image: "/images/prod_manual.png" },
  { id: 21, category: "special", name: "CM-YALE-ATEX", brand: "Yale", image: "/images/prod_air.png" },
  { id: 22, category: "jack", name: "CM-YALE-JACK", brand: "Yale", image: "/images/prod_jack.png" },
  { id: 23, category: "special", name: "CM-YALE-항공기용", brand: "Yale", image: "/images/prod_electric.png" },
  { id: 24, category: "special", name: "CM-공업용", brand: "CM", image: "/images/bg_cm.png" },
  { id: 25, category: "rigging", name: "CM-샤클 등", brand: "CM", image: "/images/prod_rigging.png" },
  { id: 26, category: "special", name: "CM-스탈 미국방폭UL 버젼", brand: "STAHL", image: "/images/prod_electric.png" },
];

const categories = [
  { id: "all", name: "전체보기" },
  { id: "electric", name: "전동 호이스트" },
  { id: "air", name: "에어 호이스트" },
  { id: "manual", name: "수동 호이스트" },
  { id: "winch", name: "윈치 (Winches)" },
  { id: "jack", name: "잭 (Jacks)" },
  { id: "rigging", name: "리깅 & 액세서리" },
  { id: "special", name: "특수/방폭 장치" },
];

export default function ProductsPage() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProducts = activeTab === "all" 
    ? productList 
    : productList.filter(p => p.category === activeTab);

  return (
    <div className={styles.productsPage}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1>PRODUCT CATALOG</h1>
          <p>글로벌 최정상 브랜드의 프리미엄 호이스트 및 산업용 장비 라인업</p>
        </div>
      </header>

      <section className={styles.filterSection}>
        <div className={styles.tabContainer}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`${styles.tabBtn} ${activeTab === cat.id ? styles.active : ''}`}
              onClick={() => setActiveTab(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </section>
      
      <section className={styles.gallery}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {filteredProducts.map((product) => (
              <div key={product.id} className={styles.productCard}>
                <div className={styles.imageWrapper}>
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className={styles.productImage}
                  />
                  <div className={styles.brandTag}>{product.brand}</div>
                </div>
                <div className={styles.productInfo}>
                  <h3>{product.name}</h3>
                  <Link href="/contact" className={styles.inquiryBtn}>견적 문의</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.contactBanner}>
        <h2>찾으시는 제품이 없으신가요?</h2>
        <p>CM한국지점의 전문가가 최적의 솔루션을 제안해 드립니다.</p>
        <Link href="/contact" className={styles.bannerBtn}>전문가와 상담하기</Link>
      </section>
    </div>
  );
}
