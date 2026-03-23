import styles from './contact.module.css';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className={styles.contactPage}>
      <header className={styles.header}>
        <h1>견적 및 수리 문의</h1>
        <p>신속하고 정확한 B2B 상담을 약속드립니다</p>
      </header>
      
      <section className={styles.contactContainer}>
        <div className={styles.infoBox}>
          <h2>고객 센터</h2>
          <p className={styles.infoDesc}>호이스트 신규 설치, 스페어 파트 견적 및 유지보수 관련 문의를 남겨주시면 담당자가 빠르게 연락드리겠습니다.</p>
          
          <div className={styles.contactItems}>
            <div className={styles.contactItem}>
              <div className={styles.icon}><Phone size={24} /></div>
              <div>
                <strong>전화 문의</strong>
                <span>010-3664-0847</span>
              </div>
            </div>
            
            <div className={styles.contactItem}>
              <div className={styles.icon}><Mail size={24} /></div>
              <div>
                <strong>이메일</strong>
                <span>ybkssm@gmail.com</span>
              </div>
            </div>
            
            <div className={styles.contactItem}>
              <div className={styles.icon}><MapPin size={24} /></div>
              <div>
                <strong>주소</strong>
                <span>경기 성남시 분당구 방아로 68 (13569)</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.formBox}>
          <h2>온라인 문의</h2>
          <form className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="company">회사명 / 소속 *</label>
              <input type="text" id="company" placeholder="예: (주)한국공장" required />
            </div>
            
            <div className={styles.row}>
              <div className={styles.formGroup}>
                <label htmlFor="name">담당자명 *</label>
                <input type="text" id="name" placeholder="이름을 입력하세요" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="phone">연락처 *</label>
                <input type="tel" id="phone" placeholder="010-0000-0000" required />
              </div>
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="inquiryType">문의 유형 *</label>
              <select id="inquiryType" required>
                <option value="">선택해주세요</option>
                <option value="new">신규 장비 견적</option>
                <option value="spare">스페어 파트 구매</option>
                <option value="repair">유지보수 및 수리</option>
                <option value="other">기타 문의</option>
              </select>
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="message">문의 내용 *</label>
              <textarea id="message" rows={5} placeholder="필요한 사양이나 문의하실 내용을 상세히 적어주세요." required></textarea>
            </div>
            
            <button type="button" className={styles.submitBtn}>
              <Send size={18} />
              <span>문의 보내기</span>
            </button>
            <p className={styles.formNotice}>* 이 폼은 프론트엔드 시연용 폼입니다.</p>
          </form>
        </div>
      </section>
    </div>
  );
}
