import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.info}>
          <h3>CM한국지점</h3>
          <p>미군부대 공급용 CSA/UL 마크 방폭인증 호이스트 전문</p>
          <p>대표 : 김용백 | 사업자번호 : 113-05-23022</p>
        </div>
        <div className={styles.contact}>
          <h4>고객센터</h4>
          <p><strong>Hp: </strong> 010-3664-0847</p>
          <p><strong>Email: </strong> ybkssm@gmail.com</p>
          <p><strong>주소: </strong> 경기 성남시 분당구 방아로 68 (13569)</p>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} CM한국지점. All rights reserved.</p>
      </div>
    </footer>
  );
}
