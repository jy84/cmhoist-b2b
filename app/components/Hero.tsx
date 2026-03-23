import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        <div className={styles.imageColumn}>
          <img 
            src="/images/cm_hoist_demo.png" 
            alt="CM 호이스트" 
            className={styles.heroImage} 
          />
        </div>
        <div className={styles.contentColumn}>
          <h1 className={styles.title}>
            글로벌 스탠다드 로드맵을 제시하는<br />
            <strong>CM 한국지점</strong>
          </h1>
          <p className={styles.subtitle}>
            최고의 안전성과 기술력을 입증받은 미군부대 공급용 <br className={styles.mobileBreak} />
            CSA/UL 마크 방폭인증 호이스트 전문 유통 기업
          </p>
          <div className={styles.actions}>
            <Link href="/products" className={styles.primaryBtn}>제품 보기</Link>
            <Link href="/contact" className={styles.secondaryBtn}>견적 문의</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
