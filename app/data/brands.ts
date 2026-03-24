export interface Brand {
  id: string;
  name: string;
  title: string;
  subtitle: string;
  description: string;
  bgImage: string;
  categories: { name: string; items: string[] }[];
}

export const brandsData: Record<string, Brand> = {
  cm: {
    id: "cm",
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
      }
    ]
  },
  yale: {
    id: "yale",
    name: "Yale",
    title: "글로벌 표준의 우수성",
    subtitle: "모든 작업을 위한 혁신적인 라인업",
    description: "Yale은 해상 석유 플랫폼부터 펄프 및 제지 생산에 이르기까지 다양한 산업 현장에서 전 세계적으로 널리 사용되는 자재 취급 전문 브랜드입니다. 최고의 품질과 성능을 상징합니다.",
    bgImage: "/images/bg_yale.png",
    categories: [
      {
        name: "전동 및 에어 호이스트",
        items: ["전동 와이어 로프 호이스트", "방폭형 와이어 로프 호이스트", "공압식 와이어 로프 호이스트", "에어 체인 호이스트"]
      },
      {
        name: "수동 호이스트",
        items: ["방폭형 핸드 체인 호이스트", "핸드 체인 호이스트", "레버 호이스트"]
      }
    ]
  },
  stahl: {
    id: "stahl",
    name: "STAHL",
    title: "고성능 리프팅 기술",
    subtitle: "독일의 정밀함이 담긴 고품질 호이스트",
    description: "STAHL CraneSystems는 전 세계 방폭 리프팅 및 크레인 기술의 선두 주자입니다. 당사의 고품질 호이스트는 전 세계 산업 현장에서 탁월한 성능을 발휘합니다.",
    bgImage: "/images/bg_stahl.png",
    categories: [
      {
        name: "호이스트 라인업",
        items: ["SH 와이어 로프 호이스트", "ST 체인 호이스트", "SH Ex 방폭 와이어 로프 호이스트", "ST Ex 방폭 체인 호이스트"]
      }
    ]
  },
  "duff-norton": {
    id: "duff-norton",
    name: "Duff-Norton",
    title: "모션 기술 솔루션의 첫 번째 선택",
    subtitle: "강력하고 정밀한 모션 제어",
    description: "Duff-Norton은 높은 강도와 신뢰성, 긴 수명을 위해 설계된 강력하고 정밀한 모션 제어 제품을 제공합니다.",
    bgImage: "/images/bg_duff_norton.png",
    categories: [
      {
        name: "선형 모션",
        items: ["기계식 액추에이터", "볼 스크류 잭", "로터리 유니온"]
      }
    ]
  },
  camlok: {
    id: "camlok",
    name: "Camlok",
    title: "A Solution For Every Lift",
    subtitle: "리프팅 클램프의 정석",
    description: "Camlok은 60년 이상의 리프팅 전문 지식을 바탕으로 강철 플레이트 리프팅 및 이송을 위한 프리미엄 클램프 솔루션을 제공합니다.",
    bgImage: "/images/bg_camlok.png",
    categories: [
      {
        name: "클램프 제품군",
        items: ["플레이트 클램프 (Vertical/Horizontal)", "거더(Girder) 스택 클램프", "하조 장비 (Below the Hook)"]
      }
    ]
  },
  crosby: {
    id: "crosby",
    name: "Crosby",
    title: "The Global Standard in Rigging",
    subtitle: "리깅 및 리프팅 하드웨어의 글로벌 리더",
    description: "Crosby는 리깅, 리프팅 및 고정 하드웨어 분야의 세계적인 표준을 제시하며, 가장 까다로운 작업 환경에서도 신뢰할 수 있는 품질을 제공합니다.",
    bgImage: "/images/bg_crosby.png",
    categories: [
      {
        name: "리깅 부품",
        items: ["샤클(Shackles)", "후크(Hooks)", "와이어 로프 엔드 부품", "블록(Blocks)"]
      }
    ]
  },
  dixie: {
    id: "dixie",
    name: "Dixie Industries",
    title: "Quality & Dependability for Loggers",
    subtitle: "100년 전통의 로깅 및 임업 도구",
    description: "Dixie Industries는 100년 넘게 임업 및 로깅 도구 시장에서 신뢰받아온 브랜드로, 피비(Peavies)와 후카룬(Hookaroons) 등 혁신적인 라인업을 제공합니다.",
    bgImage: "/images/bg_dixie.png",
    categories: [
      {
        name: "임업 도구",
        items: ["피비 및 캔트 후크", "후카룬", "파이크 폴(Pike Poles)"]
      }
    ]
  },
  dorner: {
    id: "dorner",
    name: "Dorner",
    title: "Transforming Conveyor Automation",
    subtitle: "정밀 컨베이어 자동화 솔루션",
    description: "Dorner는 산업용, 위생용 및 팔레트 시스템을 위한 정밀 컨베이어 자동화 분야의 선두 주자로, 생산 라인의 효율성을 극대화합니다.",
    bgImage: "/images/bg_dorner.png",
    categories: [
      {
        name: "컨베이어 시스템",
        items: ["산업용 컨베이어", "위생용(Sanitary) 컨베이어", "팔레트 시스템"]
      }
    ]
  },
  eepos: {
    id: "eepos",
    name: "eepos",
    title: "Flexible Aluminum Crane Systems",
    subtitle: "유연한 알루미늄 크레인 시스템",
    description: "eepos는 효율적인 하중 처리 및 제조 공정을 위한 고도의 유연성과 맞춤형 알루미늄 크레인 시스템을 제공합니다.",
    bgImage: "/images/bg_eepos.png",
    categories: [
      {
        name: "크레인 시스템",
        items: ["알루미늄 크레인 레일", "맞춤형 크레인 상부 구조", "스마트 로드 핸들링"]
      }
    ]
  },
  gunnebo: {
    id: "gunnebo",
    name: "Gunnebo Industries",
    title: "Quality, Trusted Lifting Solutions",
    subtitle: "1764년부터 시작된 안전한 리프팅",
    description: "Gunnebo Industries는 1764년부터 품질과 신뢰를 바탕으로 한 리프팅 솔루션을 제공해온 글로벌 리더입니다.",
    bgImage: "/images/bg_gunnebo.png",
    categories: [
      {
        name: "체인 및 컴포넌트",
        items: ["GrabiQ 체인 시스템", "마스터 링크", "커플링 링크"]
      }
    ]
  },
  harrington: {
    id: "harrington",
    name: "Harrington",
    title: "World-Class Hoists and Cranes",
    subtitle: "아메리카 대륙의 신뢰받는 리프팅 브랜드",
    description: "Harrington은 세계적인 수준의 호이스트, 크레인 및 자재 취급 장비를 제조하는 Kito Crosby의 핵심 브랜드입니다.",
    bgImage: "/images/bg_harrington.png",
    categories: [
      {
        name: "호이스트",
        items: ["전동 체인 호이스트", "레버 호이스트", "핸드 체인 호이스트"]
      }
    ]
  },
  kito: {
    id: "kito",
    name: "Kito",
    title: "Precision-Engineered Lifting",
    subtitle: "정밀 공학 리프팅 기술의 정수",
    description: "Kito는 전 세계적으로 신뢰받는 정밀 공학 호이스트와 크레인을 통해 가장 안전하고 효율적인 리프팅 기술을 제공합니다.",
    bgImage: "/images/bg_kito.png",
    categories: [
      {
        name: "핵심 제품",
        items: ["전동 체인 호이스트", "와이어 로프 호이스트", "크레인 키트"]
      }
    ]
  },
  magnetek: {
    id: "magnetek",
    name: "Magnetek",
    title: "Experts in Power and Motion Control",
    subtitle: "디지털 전력 및 모션 제어 시스템",
    description: "Magnetek은 자재 취급, 마이닝 및 인원이동 애플리케이션을 위한 디지털 전력 및 모션 제어 시스템 분야의 전문가입니다.",
    bgImage: "/images/bg_magnetek.png",
    categories: [
      {
        name: "제어 시스템",
        items: ["AC 모터 제어 시스템 (VFD)", "산업용 무선 원격 제어", "충돌 회피 시스템"]
      }
    ]
  },
  budgit: {
    id: "budgit",
    name: "Budgit Hoists",
    title: "Versatility for Heavy-Duty",
    subtitle: "내구성과 다목적성의 대명사",
    description: "Budgit Hoists는 고가치 애플리케이션을 위한 내구성이 뛰어난 호이스트를 제공하며, 클린룸 및 위험 환경용 옵션을 갖추고 있습니다.",
    bgImage: "/images/bg_budgit.png",
    categories: [
      {
        name: "호이스트",
        items: ["에어 체인 호이스트", "전동 체인 호이스트", "크레인 부품"]
      }
    ]
  },
  chester: {
    id: "chester",
    name: "Chester Hoist",
    title: "Custom Solutions for Complex Problems",
    subtitle: "맞춤형 특수 호이스트 전문",
    description: "Chester Hoist는 1920년대부터 맞춤형 및 특수 리프팅 제품을 통해 가장 복잡한 문제에 대한 솔루션을 제시해왔습니다.",
    bgImage: "/images/bg_chester.png",
    categories: [
      {
        name: "특수 제품",
        items: ["커스텀 메이드 전동 호이스트", "저상형(Low Headroom) 호이스트", "특수 환경용 수동 호이스트"]
      }
    ]
  },
  coffing: {
    id: "coffing",
    name: "Coffing Hoists",
    title: "Performance and Design You Can Trust",
    subtitle: "신뢰할 수 있는 성능과 디자인",
    description: "Coffing Hoists는 다양한 산업 분야에서 리프팅과 포지셔닝을 위한 광범위한 제품군을 제공합니다.",
    bgImage: "/images/bg_coffing.png",
    categories: [
      {
        name: "주요 라인업",
        items: ["JLC 전동 체인 호이스트", "레버 호이스트", "수동 체인 호이스트"]
      }
    ]
  },
  garvey: {
    id: "garvey",
    name: "Garvey",
    title: "Maximize Your Production",
    subtitle: "생산성 극대화를 위한 어큐뮬레이션",
    description: "Garvey는 제약, 식품 및 음료 산업을 위한 컨베이어 라인의 어큐뮬레이션 및 분배 시스템 전문가입니다.",
    bgImage: "/images/bg_garvey.png",
    categories: [
      {
        name: "자동화 솔루션",
        items: ["어큐뮬레이션 시스템", "병/용기 핸들링", "라인 분석 서비스"]
      }
    ]
  },
  "little-mule": {
    id: "little-mule",
    name: "Little Mule",
    title: "Getting Linemen Home Safe",
    subtitle: "전력 유틸리티 작업의 필수 장비",
    description: "Little Mule은 전력 유틸리티 작업을 위한 스트랩 호이스트와 케이블 풀러 등 장인의 기술이 담긴 안전 장비를 제공합니다.",
    bgImage: "/images/bg_little_mule.png",
    categories: [
      {
        name: "유틸리티 장비",
        items: ["스트랩 호이스트", "와이어 그립", "케이블 풀러"]
      }
    ]
  },
  montratec: {
    id: "montratec",
    name: "Montratec",
    title: "Intelligent Monorail Transport",
    subtitle: "지능형 모노레일 이송 시스템",
    description: "Montratec은 인트라로지스틱스와 공장 자동화를 위한 혁신적인 모노레일 이송 시스템을 제공합니다.",
    bgImage: "/images/bg_montratec.png",
    categories: [
      {
        name: "이송 시스템",
        items: ["montrac® 모노레일", "자동 제어 시스템", "클린룸 이송 솔루션"]
      }
    ]
  },
  peerless: {
    id: "peerless",
    name: "Peerless",
    title: "Total Chain Solutions",
    subtitle: "체인 및 액세서리 자재 취급 전문가",
    description: "Peerless는 오버헤드 리프팅, 운송 및 트랙션 체인 분야에서 가장 광범위한 솔루션을 제공하는 북미 대형 체인 제조사입니다.",
    bgImage: "/images/bg_peerless.png",
    categories: [
      {
        name: "체인 제품",
        items: ["오버헤드 리프팅 체인", "운송용 체인", "타이어 체인 (Traction)"]
      }
    ]
  },
  "pfaff-silberblau": {
    id: "pfaff-silberblau",
    name: "Pfaff-silberblau",
    title: "Motion Technology Excellence",
    subtitle: "정밀 모션 및 리프팅 기술",
    description: "Pfaff-silberblau는 스크류 잭, 리프팅 테이블 등 드라이브 기술과 자재 취급 분야의 정밀한 솔루션을 제공합니다.",
    bgImage: "/images/bg_pfaff.png",
    categories: [
      {
        name: "드라이브 및 리프팅",
        items: ["스크류 잭", "전동 리프팅 테이블", "핸드 팔레트 트럭"]
      }
    ]
  },
  "shaw-box": {
    id: "shaw-box",
    name: "Shaw-Box",
    title: "Heavy-Duty Hoisting",
    subtitle: "고중량 와이어 로프 호이스트의 표준",
    description: "Shaw-Box는 가혹한 산업 환경을 위해 설계된 강력한 와이어 로프 호이스트와 크레인 시스템을 제공합니다.",
    bgImage: "/images/bg_stahl.png",
    categories: [
      {
        name: "고중량 호이스트",
        items: ["와이어 로프 호이스트", "빌트-업(Built-up) 호이스트", "크레인 키트"]
      }
    ]
  },
  steerman: {
    id: "steerman",
    name: "Steerman",
    title: "Specialized Load Moving",
    subtitle: "고중량물 이동 장비의 리더",
    description: "Steerman은 공장 이전 및 중량물 운반을 위한 전문 부하 이동 스케이트와 운반 시스템을 제공합니다.",
    bgImage: "/images/bg_cm.png",
    categories: [
      {
        name: "운반 장비",
        items: ["로드 무빙 스케이트", "유압 잭", "조정 가능 운반차"]
      }
    ]
  },
  unified: {
    id: "unified",
    name: "Unified Industries",
    title: "Ergonomic Rail Systems",
    subtitle: "인체공학적 워크스테이션 크레인",
    description: "Unified Industries는 작업자의 부하를 줄이고 생산성을 높이는 인체공학적 알루미늄 및 스틸 레일 시스템을 제공합니다.",
    bgImage: "/images/bg_eepos.png",
    categories: [
      {
        name: "워크스테이션",
        items: ["브릿지 크레인", "지브 크레인", "에어 밸런서"]
      }
    ]
  },
  "cm-entertainment": {
    id: "cm-entertainment",
    name: "CM Entertainment",
    title: "Staging the Future",
    subtitle: "엔터테인먼트 산업 전용 리깅 솔루션",
    description: "CM Entertainment는 콘서트, 공연장 등 무대 리깅 및 특수 효과 장비 분야의 전 세계 표준입니다.",
    bgImage: "/images/bg_cm.png",
    categories: [
      {
        name: "공연장 장비",
        items: ["Lodestar 전동 체인 호이스트", "무대 리깅 액세서리", "제어 시스템"]
      }
    ]
  }
};
