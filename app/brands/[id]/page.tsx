import { notFound } from 'next/navigation';
import styles from './brand.module.css';
import Link from 'next/link';

const brandData: Record<string, any> = {
  yale: {
    name: "Yale",
    title: "글로벌 표준의 우수성",
    subtitle: "모든 작업을 위한 혁신적인 라인업",
    description: "Yale은 해상 석유 플랫폼부터 펄프 및 제지 생산에 이르기까지 다양한 산업 현장에서 전 세계적으로 널리 사용되는 자재 취급 전문 브랜드입니다. 광범위한 와이어 로프 제품군으로 잘 알려진 Yale은 최고의 품질과 성능을 상징합니다.",
    bgImage: "/images/bg_yale.png",
    categories: [
      {
        name: "전동 및 에어 호이스트",
        items: ["전동 와이어 로프 호이스트", "방폭형 와이어 로프 호이스트", "공압식 와이어 로프 호이스트", "에어 체인 호이스트"]
      },
      {
        name: "수동 호이스트",
        items: ["방폭형 핸드 체인 호이스트", "핸드 체인 호이스트", "레버 호이스트"]
      },
      {
        name: "크레인 부품",
        items: ["엔드 트럭 및 캐리지"]
      },
      {
        name: "리프팅 및 하조 장비 (Below the Hook)",
        items: ["크레인 계량기", "후크(Hooks)", "러그 및 C-후크"]
      }
    ]
  },
  cm: {
    name: "CM",
    title: "안전, 효율성, 그리고 혁신",
    subtitle: "시장 전문성의 유산",
    description: "CM (Columbus McKinnon)은 철강 생산을 위한 중량물용 호이스트부터 상업용 체인 및 후크까지 광범위한 솔루션을 제공합니다. 1875년부터 시작된 CM은 건설, 제조, 운송 등 다양한 산업 분야에서 가장 신뢰받는 브랜드입니다.",
    bgImage: "/images/bg_cm.png",
    categories: [
      {
        name: "호이스팅 제품군",
        items: ["전동 및 에어 호이스트", "수동 호이스트", "CM® BatteryStar™ 휴대용 호이스트", "윈치(Winches)"]
      },
      {
        name: "리깅 및 액세서리",
        items: ["체인 및 체인 액세서리", "샤클(Shackles)", "리프팅 슬링 및 래싱 시스템", "타이다운 및 로드 바인더"]
      },
      {
        name: "트로울리",
        items: ["트로울리 및 트로울리 클램프"]
      }
    ]
  },
  stahl: {
    name: "STAHL",
    title: "고성능 리프팅 기술",
    subtitle: "독일의 정밀함이 담긴 고품질 호이스트",
    description: "STAHL CraneSystems는 전 세계 방폭 리프팅 및 크레인 기술의 선두 주자입니다. 당사의 고품질 호이스트는 표준형부터 맞춤형, 특수 방폭 시스템까지 전 세계 산업 현장에서 탁월한 성능을 발휘합니다.",
    bgImage: "/images/bg_stahl.png",
    categories: [
      {
        name: "호이스트 라인업",
        items: ["SH 와이어 로프 호이스트", "ST 체인 호이스트", "AS 7 와이어 로프 호이스트", "SH Ex 방폭 와이어 로프 호이스트", "ST Ex 방폭 체인 호이스트"]
      },
      {
        name: "특수 시스템",
        items: ["LNG용 와이어 로프 호이스트", "TDC 트윈 드라이브 컨셉", "크레인 키트(CraneKits)", "크레인 전장 시스템"]
      },
      {
        name: "주요 부품",
        items: ["주행 드라이브", "휠 블록", "산업용 윈치"]
      }
    ]
  },
  "duff-norton": {
    name: "Duff-Norton",
    title: "모션 기술 솔루션의 첫 번째 선택",
    subtitle: "강력하고 정밀한 모션 제어",
    description: "Duff-Norton은 높은 강도와 신뢰성, 긴 수명을 위해 설계된 강력하고 정밀한 모션 제어 제품을 제공합니다. 선형 모션(Linear Motion) 및 로터리 유니온 솔루션 분야의 글로벌 리더입니다.",
    bgImage: "/images/bg_duff_norton.png",
    categories: [
      {
        name: "선형 모션 (리니어 모션)",
        items: ["기계식 액추에이터 (스크류 잭)", "아크메(Acme) 스크류 잭", "볼(Ball) 스크류 잭", "스테인리스 스틸 스크류 잭"]
      },
      {
        name: "로터리 기술",
        items: ["로터리 유니온 (Rotary Unions)"]
      },
      {
        name: "지능형 모션",
        items: ["Duff-Norton 지능형 모션 기술 솔루션"]
      }
    ]
  }
};

export default function BrandPage({ params }: { params: { id: string } }) {
  const brandId = params.id.toLowerCase();
  const brand = brandData[brandId];

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
