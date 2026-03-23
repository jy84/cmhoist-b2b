import styles from './Features.module.css';
import { ShieldCheck, Zap, Factory } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <ShieldCheck size={40} />,
      title: "CSA/UL 마크 방폭인증",
      description: "까다로운 미군부대 공급 기준을 통과한 완벽한 방폭 설계로 어떠한 위험 환경에서도 안전을 보장합니다."
    },
    {
      icon: <Factory size={40} />,
      title: "대형 공장 및 산업 설비 특화",
      description: "국내 대기업 및 글로벌 생산 기지 설립에 필요한 최적화된 로드맵과 맞춤형 호이스트 솔루션을 제안합니다."
    },
    {
      icon: <Zap size={40} />,
      title: "신속한 스페어 파트 공급",
      description: "유지보수(A/S)에 필요한 CM, YALE, STAHL 등 정품 스페어 파트를 신속하게 수급하여 다운타임을 최소화합니다."
    }
  ];

  return (
    <section className={styles.featuresSection}>
      <div className={styles.container}>
        {features.map((feature, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.iconWrapper}>{feature.icon}</div>
            <h3 className={styles.cardTitle}>{feature.title}</h3>
            <p className={styles.cardDesc}>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
