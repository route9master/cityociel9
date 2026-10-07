// 모든 문구·수치의 단일 출처. 출처: docs/CONTENT.md
// 표시광고법: 개통·개교 연도 표기 금지, 시세·분양가 비교 금지, 조망은 (일부세대) 단서 필수

export const SITE = {
  name: "시티오씨엘 9단지",
  officialName: "시티오씨엘 9단지 오션파크뷰",
  tel: "1800-7159",
  telHref: "tel:18007159",
  // SMS 수신번호 — 연속 문자열로 두지 말 것 (lib/sms.ts에서 조립)
  smsParts: ["010", "8168", "7861"],
  url: "https://cityociel9.vercel.app",
};

// TODO(분양대행사 정보 수급 후 입력) — 비어 있으면 푸터·개인정보처리방침에 해당 줄을 렌더링하지 않음
export const AGENCY = {
  name: "", // 상호
  ceo: "", // 대표자
  bizNo: "", // 사업자등록번호
  address: "",
  retention: "상담 목적 달성 후 지체 없이 파기", // 보유기간 — 대행사 확인 필요
};

export const NAV = [
  { id: "overview", label: "사업개요" },
  { id: "location", label: "입지환경" },
  { id: "premium", label: "프리미엄" },
  { id: "complex", label: "단지안내" },
  { id: "community", label: "커뮤니티" },
  { id: "plans", label: "평면안내" },
  { id: "contact", label: "상담신청" },
];

export const DISCLAIMER = {
  cg: "※ 상기 CG, 이미지 등은 소비자의 이해를 돕기 위한 것으로 실제 시공 시 다소 차이가 있을 수 있으며, 향후 개발 계획 및 인·허가에 따라 변경될 수 있습니다.",
  area: "※ 상기 표기된 면적 등은 인허가·설계변경 등으로 변경될 수 있으니 참고용으로만 활용하여 주시기 바랍니다.",
  plan: "※ 개발계획 및 학교 등 예정사항은 향후 관계기관의 사정에 따라 변경될 수 있습니다.",
  view: "※ 조망은 동·호수 및 층에 따라 다를 수 있습니다(일부세대).",
  site: "※ 본 홈페이지의 CG, 이미지, 면적, 개발계획 등은 소비자의 이해를 돕기 위한 것으로 실제와 차이가 있을 수 있으며, 인·허가 및 관계기관 사정에 따라 변경될 수 있습니다. 청약 및 계약 전 반드시 입주자모집공고를 확인하시기 바랍니다.",
};

export const OVERVIEW_ROWS: [string, string][] = [
  ["사업명", "시티오씨엘 9단지 오션파크뷰"],
  ["대지위치", "인천광역시 미추홀구 학익동 인천 용현·학익 1블록 도시개발구역 공동3BL"],
  ["대지면적", "91,275.6000㎡ (27,610.86평)"],
  ["연면적", "332,891.2799㎡ (100,699.61평)"],
  ["건축규모", "지하 2층 ~ 지상 최고 49층 / 9개동"],
  ["세대수", "총 1,949세대 (전용 59~136㎡)"],
  ["건폐율 / 용적률", "7.87% (부대시설 제외) / 249.84%"],
  ["주차대수", "총 2,660대 (세대당 1.36대)"],
  ["입주예정", "2030년 4월 예정"],
  ["시공", "HDC현대산업개발 · 현대건설 · 포스코이앤씨"],
];

export const STATS = [
  { value: 1949, unit: "세대", label: "총 세대수", decimals: 0 },
  { value: 49, unit: "층", label: "최고 층수", decimals: 0 },
  { value: 9, unit: "개동", label: "건립 동수", decimals: 0 },
  { value: 7.87, unit: "%", label: "건폐율 (부대시설 제외)", decimals: 2 },
];

export const SUPPLY = [
  { type: "59", units: 189 },
  { type: "75", units: 137 },
  { type: "84A", units: 984 },
  { type: "84B", units: 366 },
  { type: "95", units: 80 },
  { type: "101A", units: 45 },
  { type: "101B", units: 97 },
  { type: "110", units: 49 },
  { type: "133P", units: 1 },
  { type: "136P", units: 1 },
];

export const BRAND_FACTS = [
  { k: "사업면적", v: "1,546,747㎡", s: "약 46만 평" },
  { k: "계획 세대", v: "1만 3천여 세대", s: "미니신도시급 도시개발" },
  { k: "컨소시엄", v: "HDC현대산업개발 · 현대건설 · 포스코이앤씨", s: "" },
  { k: "9단지", v: "단일 최대 1,949세대", s: "시티오씨엘 내" },
];

export const LOCATION = [
  {
    no: "01",
    title: "교통",
    lead: "수인분당선 학익역(예정) 도보권",
    items: [
      "수인분당선 학익역(예정) — 단지에서 도보 약 11분",
      "학익역(예정)에서 송도역(KTX 송도역 예정)까지 1정거장",
      "월곶–판교선(예정) 송도역 연계",
      "제2경인고속도로 · 경인고속도로 · 수도권제2순환고속도로 · 77번 국도 인접",
    ],
    note: "철도 노선 및 역사는 관계기관 계획 기준이며, 향후 계획에 따라 변경될 수 있습니다.",
  },
  {
    no: "02",
    title: "교육",
    lead: "도보 통학권 학교 신설 예정",
    items: [
      "단지 인근 초등학교 신설 예정 (도보 약 300m)",
      "중학교 신설 예정 · 고등학교 계획",
      "반경 1km 용학초 · 용현남초 · 용현중 · 인항고",
      "반경 2km 인하대학교 · 인하공업전문대학",
    ],
    note: "학교 신설 등 예정사항은 관계기관의 사정에 따라 변경될 수 있습니다.",
  },
  {
    no: "03",
    title: "자연 · 생활",
    lead: "약 10만 평 그랜드파크(예정) 최인접",
    items: [
      "그랜드파크(예정) 333,643㎡ — 축구장·야구장·농구장·테니스장·배드민턴장·산책로 계획",
      "인천 뮤지엄파크(예정) — 시립박물관·시립미술관·예술공원 계획",
      "중심상업지구 스타오씨엘(예정)",
      "인하대병원 · 용현시장 · CGV 인천학익점 · 남항근린공원",
    ],
    note: "그랜드파크 개요 출처: 인천시청 문화콘텐츠과. 예정사항으로 향후 계획에 따라 변동될 수 있습니다.",
  },
];

export const PREMIUM = [
  { no: "01", title: "시티오씨엘 단일 최대", desc: "1만 3천여 세대 브랜드타운 안에서 가장 큰 1,949세대. 9개동, 전용 59㎡부터 136㎡ 펜트하우스까지." },
  { no: "02", title: "최고 49층, OCEAN · PARK VIEW", desc: "그랜드파크(예정)와 서해 방향 조망을 고려한 초고층 배치. 조망은 동·호수에 따라 다릅니다(일부세대)." },
  { no: "03", title: "그랜드파크 최인접", desc: "약 10만 평 규모로 계획된 그랜드파크(예정)가 단지 바로 앞. 운동시설과 산책로를 생활 반경 안에." },
  { no: "04", title: "도보권 학교", desc: "초등학교 신설 예정 부지까지 도보 약 300m, 중학교 신설 예정 · 고등학교 계획." },
  { no: "05", title: "광역 교통", desc: "수인분당선 학익역(예정) 도보권. 송도역(KTX 송도역 예정)까지 1정거장." },
  { no: "06", title: "One Stop 생활권", desc: "인천 뮤지엄파크(예정), 중심상업지구 스타오씨엘(예정), 기존 도심의 병원·시장·영화관까지." },
  { no: "07", title: "건폐율 7.87%, 특화설계", desc: "넓은 동간거리와 단지 내 산책로. 4Bay 판상형, 알파룸, 광폭 드레스룸, 더블팬트리." },
];

export const COMMUNITY = {
  title: "다채로운 커뮤니티에서\n클래스가 다른 일상을 완성하다",
  sub: "다양하고 품격 높은 여가를 누릴 수 있는 커뮤니티로 하루하루를 풍요롭게 완성하는 일상을 경험합니다.",
  groups: [
    { name: "운동", items: ["피트니스센터", "G.X", "다목적체육관", "실내골프연습장", "스크린골프 1·2", "사우나(남·여)"] },
    { name: "학습 · 업무", items: ["열린도서관", "스터디라운지", "독서실(남·여)", "프라이빗 독서실(남·여)", "코워킹라운지"] },
    { name: "라운지 · 가족", items: ["라운지", "키즈라운지"] },
    { name: "부대시설", items: ["어린이집", "다함께돌봄센터", "경로당"] },
  ],
  notes: [
    "※ 상기 커뮤니티 아이소 CG, 이미지는 소비자의 이해를 돕기 위해 제작된 것으로 실제 시공 시 다소 차이가 있을 수 있습니다.",
    "※ 커뮤니티 시설의 규모 및 계획은 입주자와의 협의를 통해 변경 및 삭제될 수 있으며, 향후 운영 및 관리는 입주자에 의해 이루어집니다.",
    "※ 커뮤니티 공간 내 시설 관리 및 운영을 위한 가구, 비품, 각종 집기류는 제공되지 않습니다.",
  ],
};

export type Plan = {
  id: string;
  label: string;
  units: number;
  exclusive: number;
  residentialCommon: number;
  supply: number;
  otherCommon: number;
  contract: number;
  points: string[];
};

export const PLANS: Plan[] = [
  { id: "59", label: "59", units: 189, exclusive: 59.9801, residentialCommon: 24.5974, supply: 84.5775, otherCommon: 38.7789, contract: 123.3564, points: ["침실특화(침실2 멀티룸) 유상옵션", "3연동 슬라이딩도어 유상옵션"] },
  { id: "75", label: "75", units: 137, exclusive: 75.9096, residentialCommon: 28.7933, supply: 104.7029, otherCommon: 49.0776, contract: 153.7805, points: ["알파룸 구성"] },
  { id: "84a", label: "84A", units: 984, exclusive: 84.9771, residentialCommon: 31.6613, supply: 116.6384, otherCommon: 54.9401, contract: 171.5785, points: ["4Bay 판상형 (맞통풍)", "알파룸 · 광폭 드레스룸", "ㄷ자형 주방 · 현관팬트리"] },
  { id: "84b", label: "84B", units: 366, exclusive: 84.8878, residentialCommon: 32.0525, supply: 116.9403, otherCommon: 54.8823, contract: 171.8226, points: ["4Bay 판상형 (맞통풍)", "더블팬트리"] },
  { id: "95", label: "95", units: 80, exclusive: 95.374, residentialCommon: 34.8484, supply: 130.2224, otherCommon: 61.6619, contract: 191.8843, points: ["알파룸 1 · 2"] },
  { id: "101a", label: "101A", units: 45, exclusive: 101.9303, residentialCommon: 36.6296, supply: 138.5599, otherCommon: 65.9008, contract: 204.4607, points: ["40평형대 넓은 실면적"] },
  { id: "101b", label: "101B", units: 97, exclusive: 101.9535, residentialCommon: 36.7122, supply: 138.6657, otherCommon: 65.9158, contract: 204.5815, points: ["랜드마크 타워동 배치", "알파룸 1 · 2"] },
  { id: "110", label: "110", units: 49, exclusive: 110.0371, residentialCommon: 40.9008, supply: 150.9379, otherCommon: 71.1421, contract: 222.08, points: ["랜드마크 타워동 배치", "3면 개방형"] },
  { id: "133p", label: "133P", units: 1, exclusive: 133.7832, residentialCommon: 53.3296, supply: 187.1128, otherCommon: 86.4894, contract: 273.6022, points: ["최상층 펜트하우스", "침실 4 + 알파룸", "외부 테라스 5개"] },
  { id: "136p", label: "136P", units: 1, exclusive: 136.2904, residentialCommon: 54.3583, supply: 190.6487, otherCommon: 88.1103, contract: 278.759, points: ["최상층 펜트하우스", "침실 4 + 알파룸", "외부 테라스 5개"] },
];

export const PLAN_NOTES = [
  "※ 평면도는 소비자의 이해를 돕기 위한 것으로 실시공 시 다소 변경될 수 있으며, 자세한 내용은 반드시 견본주택에서 확인하시기 바랍니다.",
  "※ 본 홍보물에 표기된 세대별 면적은 전용면적 기준으로 소수점 넷째 자리까지 표현되며, 면적 계산상 연면적과 전체 계약면적과는 소수점 이하에서 약간의 오차가 생길 수 있습니다.",
  "※ 현장 여건 및 구조, 성능, 상품 개선을 위하여 평면 및 디자인이 변경될 수 있습니다.",
];

export const GALLERY = [
  { src: "/images/render/perspective-sunset.webp", m: "/images/render/perspective-sunset-m.webp", alt: "시티오씨엘 9단지 투시도 (석양)", w: 2560, h: 1280 },
  { src: "/images/render/perspective-day.webp", m: "/images/render/perspective-day-m.webp", alt: "시티오씨엘 9단지 투시도 (주간)", w: 2560, h: 1280 },
  { src: "/images/render/view-tower.webp", m: "/images/render/view-tower-m.webp", alt: "시티오씨엘 9단지 조망 이미지 (일부세대)", w: 2560, h: 1280 },
];
