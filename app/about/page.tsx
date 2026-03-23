import styles from './about.module.css';

export default function AboutPage() {
  return (
    <div className={styles.aboutPage}>
      <header className={styles.header}>
        <h1>회사 소개</h1>
        <p>CM한국지점은 글로벌 스탠다드 로드맵을 제시합니다</p>
      </header>
      
      <section className={styles.contentSection}>
        <div className={styles.textContent}>
          <h2>안전과 신뢰의 상징, CM한국지점</h2>
          <p>
            저희 CM한국지점은 미국과 유럽의 대형 호이스트 업체(CM, YALE, STAHL, Duff-Norton)의 제품을 국내 기업이 공장을 설립하거나 유지보수할 때 직수입하여 유통하는 전문 기업입니다.
          </p>
          <p>
            특히 미군부대 공급용으로 인증된 <strong>CSA/UL 마크 방폭인증 호이스트</strong>와 정품 스페어 파트를 전문적으로 취급하며, 극한의 환경에서도 작업자의 안전을 완벽하게 책임지는 최고 품질의 솔루션을 제공합니다.
          </p>
          <p>
            다년간 축적된 노하우와 글로벌 네트워크를 바탕으로 신속하고 정확한 진단 및 부품 수급을 약속드립니다.
          </p>
          <div className={styles.ceo}>
            <strong>대표 김 용 백</strong>
          </div>
        </div>
      </section>

      <section className={styles.mapSection}>
        <h2>오시는 길</h2>
        <div className={styles.mapInfo}>
          <p><strong>주소:</strong> 경기 성남시 분당구 방아로 68 (13569)</p>
          <p><strong>연락처:</strong> 010-3664-0847 / 031-706-0847</p>
          <p><strong>이메일:</strong> ybkssm@gmail.com</p>
        </div>
        <div className={styles.mapContainer}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3167.9272445163!2d127.124584!3d37.408103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca80036122d9b%3A0xc33e54b68e91629d!2z6rK96riw64-EIOyEseuCqOyLnCDtoTr7pneqReference66as66GvIDY4!5e0!3m2!1sko!2skr!4v1711200000000!5m2!1sko!2skr" 
            width="100%" 
            height="450" 
            style={{ border: 0, borderRadius: '12px' }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
