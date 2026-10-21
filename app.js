/**
 * Osaka Trip 2026 - Shopping, Luxury, Fashion, Gourmet & CVS Smart Guide (v2.1)
 * Fast, offline-first Vanilla JS with Geolocation & Calculator
 */

// Basecamp (Hotel) Configuration
const BASECAMP = {
  name: "DEL style 오사카 신사이바시 (다이와 로이넷)",
  enName: "DEL style Osakashinsaibashi by Daiwa Roynet Hotel",
  address: "3 Chome-9-8 Minamisenba, Chuo Ward, Osaka, 542-0081",
  lat: 34.6766,
  lng: 135.5015,
  mapUrl: "https://www.google.com/maps/search/?api=1&query=DEL+style+Osaka+shinsaibashi+34.6766,135.5015"
};

// Comprehensive Places Database (33 Curated Spots)
const PLACES = [
  // --- 원스톱 성지 ---
  {
    id: "combo-grand-front",
    name: "그랜드 프론트 오사카 남관 (몽벨+노페+단톤+포터 성지)",
    category: "combo",
    area: "우메다 (오사카역 북측)",
    floor: "남관 3F(포터)·4F(단톤/Bshop)·5F(몽벨/노페)",
    lat: 34.7042,
    lng: 135.4954,
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Grand+Front+Osaka+South+Building+34.7042,135.4954",
    targetItems: [
      { name: "5F 몽벨 & 노스페이스+", price: "로건부츠, 눕시 부티 동시 비교" },
      { name: "4F Bshop (단톤 DANTON 공식)", price: "인너 다운, 플리스 가디건" },
      { name: "3F KURA CHIKA by PORTER", price: "요시다 포터 탱커 가방" }
    ],
    tips: "★ 단톤, 포터, 몽벨, 노스페이스가 그랜드프론트 남관 한 건물에 3~5층 연속 배치되어 있어 이동 동선이 가장 효율적!",
    badge: "올인원 성지",
    directNav: "https://www.google.com/maps/dir/?api=1&destination=34.7042,135.4954"
  },
  {
    id: "combo-daimaru-parco",
    name: "다이마루 신사이바시 & 파르코 (숙소 최단 동선)",
    category: "combo",
    area: "신사이바시",
    floor: "파르코 1F(포터/꼼데)·3F(노페)·5F(단톤/Bshop) / 다이마루 6F·8F",
    lat: 34.6738,
    lng: 135.5009,
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Daimaru+Shinsaibashi+34.6738,135.5009",
    targetItems: [
      { name: "파르코 5F Bshop (단톤 DANTON)", price: "경량 패딩, 캔버스 백" },
      { name: "파르코 1F PORTER & 꼼데가르송", price: "탱커 가방, 플레이 라인" },
      { name: "다이마루 8F 우스하리 잔 & 6F 몽벨", price: "맥주잔 2,640엔, 로건부츠" }
    ],
    tips: "★ 숙소에서 도보 4분! 다이마루 3층 연결통로로 파르코와 실내 연결. 단톤, 포터, 노페, 몽벨, 우스하리 잔을 1시간 만에 정복 가능.",
    badge: "숙소 도보 4분",
    directNav: "https://www.google.com/maps/dir/?api=1&destination=34.6738,135.5009"
  },

  // --- 단톤, 포터, 오니츠카타이거 전문 매장 ---
  {
    id: "shop-danton-parco",
    name: "Bshop 신사이바시 PARCO점 (단톤 DANTON)",
    category: "shop",
    area: "신사이바시",
    floor: "PARCO 5층",
    lat: 34.6739,
    lng: 135.5012,
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Bshop+Shinsaibashi+PARCO+34.6739,135.5012",
    targetItems: [
      { name: "단톤 인너 다운 자켓 (경량 패딩)", price: "약 19,000~21,000엔 (면세 10%)" },
      { name: "단톤 플리스 노칼라 가디건", price: "약 17,000엔대" },
      { name: "단톤 캔버스 토트백 & 백팩", price: "인기 캐주얼 백" }
    ],
    tips: "프랑스 워크웨어 감성 단톤(DANTON)의 일본 최대 공식 셀렉트숍 Bshop. 숙소에서 도보 4분 거리로 재고 확인 용이.",
    badge: "단톤 공식",
    directNav: "https://www.google.com/maps/dir/?api=1&destination=34.6739,135.5012"
  },
  {
    id: "shop-porter-parco",
    name: "PORTER SHINSAIBASHI (요시다 포터)",
    category: "shop",
    area: "신사이바시",
    floor: "PARCO 1층",
    lat: 34.6739,
    lng: 135.5012,
    mapUrl: "https://www.google.com/maps/search/?api=1&query=PORTER+Shinsaibashi+PARCO+34.6739,135.5012",
    targetItems: [
      { name: "탱커(TANKER) 헬멧백 / 2WAY 숄더백", price: "대표 인기 시그니처" },
      { name: "포터 웨이스트백 & 지갑", price: "10% 면세 가능" }
    ],
    tips: "요시다 포터 직영 플래그십 매장. 1층 매장이라 접근성이 좋으며 탱커 시리즈 및 한정판 라인업 구비.",
    badge: "포터 직영",
    directNav: "https://www.google.com/maps/dir/?api=1&destination=34.6739,135.5012"
  },
  {
    id: "shop-onitsuka-shinsaibashi",
    name: "오니츠카 타이거 신사이바시 플래그십",
    category: "shop",
    area: "신사이바시스지",
    floor: "1-2층 단독 대형 매장",
    lat: 34.6732,
    lng: 135.5011,
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Onitsuka+Tiger+Shinsaibashi+34.6732,135.5011",
    targetItems: [
      { name: "멕시코 66 (MEXICO 66)", price: "약 14,000~16,500엔 (면세 가능)" },
      { name: "NIPPON MADE (일본 장인 수제 라인)", price: "약 26,000~38,000엔 (프리미엄 가죽)" },
      { name: "덴티그레 (DENTIGRE) 청키 스니커즈", price: "패션 트렌드 아이템" }
    ],
    tips: "간사이 최대 오니츠카 타이거 매장. 일본 장인이 수작업으로 가공한 NIPPON MADE 단독 코너 완비. 숙소 도보 4분.",
    badge: "오니츠카 본점",
    directNav: "https://www.google.com/maps/dir/?api=1&destination=34.6732,135.5011"
  },
  {
    id: "shop-onitsuka-namba",
    name: "오니츠카 타이거 난바 파크스점",
    category: "shop",
    area: "난바",
    floor: "난바파크스 4층",
    lat: 34.6618,
    lng: 135.5020,
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Onitsuka+Tiger+Namba+Parks+34.6618,135.5020",
    targetItems: [
      { name: "멕시코 66 SD & 슬립온", price: "인기 스니커즈" }
    ],
    tips: "신사이바시 매장에 원하는 색상/사이즈가 없을 때 난바파크스 매장으로 이동해 확인하기 좋음.",
    badge: "난바 매장",
    directNav: "https://www.google.com/maps/dir/?api=1&destination=34.6618,135.5020"
  },

  // --- 명품 & 하이엔드 / 빈티지 ---
  {
    id: "luxury-daimaru-midosuji",
    name: "다이마루 신사이바시 명품관 & 미도스지 가로수길",
    category: "luxury",
    area: "신사이바시 / 미도스지",
    floor: "본관 1F~3F 및 미도스지 대로변",
    lat: 34.6740,
    lng: 135.5005,
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Daimaru+Shinsaibashi+34.6740,135.5005",
    targetItems: [
      { name: "생로랑, 보테가베네타, 발렌시아가", price: "⭕ 5% 쿠폰 + 10% 면세 가능" },
      { name: "샤넬, 에르메스, 루이비통 메종, 디올", price: "❌ 5% 제외 (10% 면세만)" }
    ],
    tips: "숙소 도보 3분! 미도스지 대로변을 따라 루이비통 대형 메종, 샤넬, 까르띠에가 줄지어 있음. 백화점 1F 안내소에서 5% 쿠폰 수령 필수.",
    badge: "명품거리",
    couponInfo: "brand-check",
    directNav: "https://www.google.com/maps/dir/?api=1&destination=34.6740,135.5005"
  },
  {
    id: "luxury-hankyu-umeda",
    name: "한큐백화점 우메다 본점 (간사이 최대 명품관)",
    category: "luxury",
    area: "우메다",
    floor: "1층~5층 럭셔리 부티크",
    lat: 34.7025,
    lng: 135.4988,
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Hankyu+Department+Store+Umeda+34.7025,135.4988",
    targetItems: [
      { name: "셀린느, 프라다, 미우미우, 디올", price: "일본 최대 명품 라인업" },
      { name: "1층 안내소 5% 게스트 쿠폰", price: "여권 제시 시 즉시 발급" }
    ],
    tips: "간사이에서 명품 재고와 신상품이 가장 많은 백화점. B1 해외고객 서비스 카운터에서 면세 환급 일괄 처리.",
    badge: "최대 명품관",
    couponInfo: "brand-check",
    directNav: "https://www.google.com/maps/dir/?api=1&destination=34.7025,135.4988"
  },
  {
    id: "vintage-allu",
    name: "ALLU (알루) 신사이바시점 (빈티지 명품)",
    category: "vintage",
    area: "신사이바시",
    floor: "1-3F 단독 부티크",
    lat: 34.6728,
    lng: 135.5008,
    mapUrl: "https://www.google.com/maps/search/?api=1&query=ALLU+Shinsaibashi+34.6728,135.5008",
    targetItems: [
      { name: "빈티지 샤넬 백 & 에르메스 버킨/켈리", price: "전문 감정 A+급 면세" },
      { name: "롤렉스, 까르띠에 빈티지 시계", price: "정품 보증서 완비" }
    ],
    tips: "일본 최고 수준의 감정 시스템을 갖춘 하이엔드 빈티지 샵. 박물관급 빈티지 샤넬 라인업으로 유명. 숙소 도보 6분.",
    badge: "A+급 빈티지",
    directNav: "https://www.google.com/maps/dir/?api=1&destination=34.6728,135.5008"
  },
  {
    id: "vintage-komehyo",
    name: "KOMEHYO (코메효) 신사이바시점",
    category: "vintage",
    area: "신사이바시",
    floor: "전층 대형 매장",
    lat: 34.6720,
    lng: 135.5012,
    mapUrl: "https://www.google.com/maps/search/?api=1&query=KOMEHYO+Shinsaibashi+34.6720,135.5012",
    targetItems: [
      { name: "루이비통, 구찌, 디올 세컨핸드", price: "상태별 가격 정찰제" },
      { name: "명품 주얼리 & 시계", price: "10% 면세 적용" }
    ],
    tips: "일본 최대 규모의 중고 명품 백화점 체인. 상품 회전율이 빨라 득템 기회가 많음.",
    badge: "중고명품 1위",
    directNav: "https://www.google.com/maps/dir/?api=1&destination=34.6720,135.5012"
  },

  // --- 기존 쇼핑 스팟 ---
  {
    id: "shop-daimaru-shinsaibashi-8f",
    name: "다이마루 신사이바시점 8F 식기판매",
    category: "shop",
    area: "신사이바시",
    floor: "본관 8층 리빙/식기",
    lat: 34.6738,
    lng: 135.5009,
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Daimaru+Shinsaibashi+8F+34.6738,135.5009",
    targetItems: [
      { name: "쇼토쿠 우스하리 맥주잔 L (375ml)", price: "개당 2,640엔 (면세 가능)" }
    ],
    tips: "숙소에서 제일 가까움. 계산 전 1F 안내소에서 5% 할인쿠폰 필수 수령! 결제 시 '완충재(에어캡)' 포장 요청 필수.",
    badge: "우스하리 잔",
    directNav: "https://www.google.com/maps/dir/?api=1&destination=34.6738,135.5009"
  },
  {
    id: "shop-tnf-footwear",
    name: "THE NORTH FACE FOOTWEAR 신사이바시",
    category: "shop",
    area: "신사이바시",
    floor: "쿼츠 신사이바시 빌딩 4층",
    lat: 34.6752,
    lng: 135.5002,
    mapUrl: "https://www.google.com/maps/search/?api=1&query=THE+NORTH+FACE+FOOTWEAR+Shinsaibashi+34.6752,135.5002",
    targetItems: [
      { name: "노스페이스 키즈 눕시 부티 VII (160cm)", price: "정가 10,450엔~ / 면세 약 9,500엔~" }
    ],
    tips: "신발 특화 매장으로 부츠/슈즈 라인업 완비. 패딩처럼 푹신하고 가벼운 일상 방한화 추천. 숙소 도보 2분 거리.",
    badge: "신발 특화",
    directNav: "https://www.google.com/maps/dir/?api=1&destination=34.6752,135.5002"
  },
  {
    id: "shop-montbell-namba-city",
    name: "MontBell @ Namba City (난바시티)",
    category: "shop",
    area: "난바",
    floor: "남관 지하 1층",
    lat: 34.6640,
    lng: 135.5018,
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Montbell+Namba+City+34.6640,135.5018",
    targetItems: [
      { name: "몽벨 로건부츠 (160cm 베이지)", price: "7,480엔 (세전 6,800엔)" },
      { name: "클리마 플러스 200 O.D.이어 워머 캡", price: "면세가 2,200엔" },
      { name: "샤미스 머플러 (성인용)", price: "1,760엔 (면세가 1,600엔)" }
    ],
    tips: "난바 지역 최대 몽벨 매장. 아동용 부츠 및 방한 액세서리 재고 확률 높음.",
    badge: "몽벨 대형점",
    directNav: "https://www.google.com/maps/dir/?api=1&destination=34.6640,135.5018"
  },
  {
    id: "shop-baobao-daimaru",
    name: "바오바오 이세이미야케 (다이마루 4F)",
    category: "shop",
    area: "신사이바시",
    floor: "다이마루 본관 4층",
    lat: 34.6738,
    lng: 135.5009,
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Bao+Bao+Issey+Miyake+Daimaru+Shinsaibashi+34.6738,135.5009",
    targetItems: [
      { name: "루센트, 프리즘 토트백", price: "백화점 5% 쿠폰 + 10% 면세 적용!" }
    ],
    tips: "바오바오는 백화점 5% 외국인 할인쿠폰 적용 가능 브랜드! 한국 정가 대비 25~35% 저렴.",
    badge: "5% 쿠폰 가능",
    directNav: "https://www.google.com/maps/dir/?api=1&destination=34.6738,135.5009"
  },
  {
    id: "shop-liquor-mountain",
    name: "리커마운틴 신사이바시점 (위스키 성지)",
    category: "shop",
    area: "신사이바시/도톤보리",
    floor: "1층 주류 전문점",
    lat: 34.6710,
    lng: 135.5020,
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Liquor+Mountain+Shinsaibashi+34.6710,135.5020",
    targetItems: [
      { name: "산토리 야마자키 / 하쿠슈 / 히비키", price: "일본 위스키 재고 보유" },
      { name: "닷사이 23, 쿠보타 만쥬 사케", price: "면세 포장 가능" }
    ],
    tips: "새벽 2시까지 영업하는 전문 주류샵. 일본 싱글몰트 위스키 및 프리미엄 사케 가격 경쟁력 높음.",
    badge: "위스키/사케",
    directNav: "https://www.google.com/maps/dir/?api=1&destination=34.6710,135.5020"
  },
  {
    id: "shop-donki-dotonbori",
    name: "돈키호테 도톤보리점 (관람차 매장)",
    category: "shop",
    area: "도톤보리 강변",
    floor: "1F~6F 24시간 영업",
    lat: 34.6690,
    lng: 135.5024,
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Don+Quijote+Dotonbori+34.6690,135.5024",
    targetItems: [
      { name: "의약품(오타이산, 동전파스, 이브)", price: "10% 면세 + 5~7% 추가 할인" },
      { name: "산토리 위스키, 녹차 킷캣, 곤약젤리", price: "모바일 쿠폰 지갑 활용" }
    ],
    tips: "도톤보리 강변의 랜드마크. 계산 시 '할인/쿠폰' 탭의 돈키호테 바코드를 보여주면 추가 5~7% 할인.",
    badge: "24시간 면세",
    directNav: "https://www.google.com/maps/dir/?api=1&destination=34.6690,135.5024"
  },
  {
    id: "shop-hankyu-kids",
    name: "한큐백화점 우메다 본점 11F 키즈관",
    category: "shop",
    area: "우메다",
    floor: "11층 아동복/키즈",
    lat: 34.7025,
    lng: 135.4988,
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Hankyu+Umeda+Department+Store+11F+34.7025,135.4988",
    targetItems: [
      { name: "THE NORTH FACE kids 단독 매장", price: "키즈 눕시 부티 160cm 컬러 다양" },
      { name: "7F 쇼토쿠 우스하리 잔 코너", price: "개당 2,640엔" }
    ],
    tips: "오사카에서 유일하게 노스페이스 '키즈 단독 매장'이 입점해 있어 160cm 등 아동 황금 사이즈 찾기에 최적.",
    badge: "키즈 전문",
    directNav: "https://www.google.com/maps/dir/?api=1&destination=34.7025,135.4988"
  },

  // --- 맛집 & 심야 식당 (숙소 인근 특화) ---
  {
    id: "food-torikizoku-minamisenba",
    name: "토리키조쿠 미나미센바점 (숙소 바로 옆)",
    category: "food",
    area: "신사이바시",
    floor: "2층 (숙소 도보 1분)",
    lat: 34.6763,
    lng: 135.5019,
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Torikizoku+Minamisenba+34.6763,135.5019",
    targetItems: [
      { name: "전 메뉴 균일가 (야키토리 2꼬치/생맥주)", price: "각 약 370엔 (가성비 최강)" }
    ],
    tips: "★ 숙소 바로 옆 건물! 1일차/2일차 밤 늦게 부담 없이 시원한 생맥주와 닭꼬치 야식을 즐길 수 있는 최고의 로컬 아지트.",
    badge: "숙소 도보 1분",
    directNav: "https://www.google.com/maps/dir/?api=1&destination=34.6763,135.5019"
  },
  {
    id: "food-tsurutontan",
    name: "츠루동탄 소에몬초점 (세숫대야 우동)",
    category: "food",
    area: "도톤보리 북단",
    floor: "지하 1층 (새벽 6시까지 영업)",
    lat: 34.6698,
    lng: 135.5035,
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Tsurutontan+Soemoncho+34.6698,135.5035",
    targetItems: [
      { name: "명란 크림 우동, 카레 우동", price: "그릇 크기 압도적 / 면 리필 가능" }
    ],
    tips: "오사카 대표 우동 명가. 세숫대야만 한 큰 그릇에 나옴. 쫄깃한 면발과 깊은 국물로 심야 해장 및 야식으로 인기.",
    badge: "새벽 영업",
    directNav: "https://www.google.com/maps/dir/?api=1&destination=34.6698,135.5035"
  },
  {
    id: "food-rikimaru-shinsaibashi",
    name: "야키니쿠 리키마루 신사이바시점",
    category: "food",
    area: "신사이바시",
    floor: "3-4층",
    lat: 34.6743,
    lng: 135.5018,
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Yakiniku+Rikimaru+Shinsaibashi+34.6743,135.5018",
    targetItems: [
      { name: "일본산 소고기 와규 숯불 화로구이", price: "무한리필 코스 또는 단품" }
    ],
    tips: "숙소 도보 3분. 얼리지 않은 신선한 소고기 화로구이. 태블릿 한국어 주문 지원으로 주문 편리.",
    badge: "와규 화로구이",
    directNav: "https://www.google.com/maps/dir/?api=1&destination=34.6743,135.5018"
  },
  {
    id: "food-kamukura",
    name: "카무쿠라 라멘 신사이바시점 (신사이바시스지)",
    category: "food",
    area: "신사이바시",
    floor: "1층 (아침 10시 ~ 심야 영업)",
    lat: 34.6725,
    lng: 135.5014,
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Kamukura+Ramen+Shinsaibashi+34.6725,135.5014",
    targetItems: [
      { name: "오이시이 라멘 (배추 간장 라멘)", price: "약 850엔~" }
    ],
    tips: "오사카 현지인들이 사랑하는 달착지근하고 시원한 배추 베이스 국물. 느끼하지 않아 한국인 입맛에 찰떡.",
    badge: "오사카 명물 라멘",
    directNav: "https://www.google.com/maps/dir/?api=1&destination=34.6725,135.5014"
  },
  {
    id: "food-wanaka",
    name: "타코야키 도라쿠 와나카 아메리카무라점",
    category: "food",
    area: "아메리카무라 / 신사이바시",
    floor: "1층 매장",
    lat: 34.6718,
    lng: 135.4985,
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Takoyaki+Wanaka+Americamura+34.6718,135.4985",
    targetItems: [
      { name: "와나카 특제 타코야키 (8알/소금/소스)", price: "약 600엔~" }
    ],
    tips: "현지인 타코야키 랭킹 1위 와나카. 겉은 바삭하고 속은 부드러운 정통 오사카 스타일. 특제 소금맛 추천.",
    badge: "타코야키 1위",
    directNav: "https://www.google.com/maps/dir/?api=1&destination=34.6718,135.4985"
  },
  {
    id: "food-horai-daimaru",
    name: "551 호라이 만두 (다이마루 B1F)",
    category: "food",
    area: "신사이바시",
    floor: "다이마루 본관 지하 1층 식품관",
    lat: 34.6738,
    lng: 135.5009,
    mapUrl: "https://www.google.com/maps/search/?api=1&query=551+Horai+Daimaru+Shinsaibashi+34.6738,135.5009",
    targetItems: [
      { name: "부타만 (돼지고기 왕만두 2개입~)", price: "약 420엔~" },
      { name: "새우 슈마이 (에비 슈마이)", price: "인기 간식" }
    ],
    tips: "오사카인의 소울푸드. 육즙 가득한 따뜻한 만두를 포장해 호텔에서 간식으로 먹기 최고.",
    badge: "필수 먹거리",
    directNav: "https://www.google.com/maps/dir/?api=1&destination=34.6738,135.5009"
  },
  {
    id: "food-rikuro-namba",
    name: "리쿠로 오지상 치즈케이크 난바 본점",
    category: "food",
    area: "난바 상점가",
    floor: "1층 베이커리",
    lat: 34.6662,
    lng: 135.5013,
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Rikuro+Ojisano+Mise+Namba+34.6662,135.5013",
    targetItems: [
      { name: "갓 구운 수플레 치즈케이크 (1판)", price: "약 965엔" }
    ],
    tips: "종을 울리며 갓 구워져 나오는 촉촉하고 퐁신퐁신한 치즈케이크. 밑바닥 건포도가 별미.",
    badge: "치즈케이크",
    directNav: "https://www.google.com/maps/dir/?api=1&destination=34.6662,135.5013"
  },
  {
    id: "food-nishiya",
    name: "우동치리 혼케 니시야 본점 (うどん錦)",
    category: "food",
    area: "신사이바시",
    floor: "1-2층 단독 고택",
    lat: 34.6748,
    lng: 135.5028,
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Udonchiri+Honke+Nishiya+34.6748,135.5028",
    targetItems: [
      { name: "1일차 공식 저녁식사 (18:00 - 21:00)", price: "우동치리(해산물 전골) / 면 요리" }
    ],
    tips: "★ 10/23(금) 저녁 사원여행 공식 식사 장소! 1957년 창업한 전통 노포. 호텔에서 도보 3분 거리.",
    badge: "1일차 석식",
    directNav: "https://www.google.com/maps/dir/?api=1&destination=34.6748,135.5028"
  },
  {
    id: "food-kanidoraku-east",
    name: "가니도라쿠 도톤보리 히가시점 (동관)",
    category: "food",
    area: "도톤보리 동편",
    floor: "전층",
    lat: 34.6687,
    lng: 135.5042,
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Kani+Doraku+Dotonbori+Higashi+34.6687,135.5042",
    targetItems: [
      { name: "3일차 공식 점심 (12:30 - 13:30)", price: "게 가이세키 정식 코스" }
    ],
    tips: "★ 10/25(일) 점심 공식 식사 장소! 식사 후 14:00 호텔 로비 집합.",
    badge: "3일차 중식",
    directNav: "https://www.google.com/maps/dir/?api=1&destination=34.6687,135.5042"
  },

  // --- 일정 명소 ---
  {
    id: "tour-usj",
    name: "유니버셜 스튜디오 재팬 (USJ)",
    category: "tour",
    area: "고노하나구",
    floor: "테마파크 전체",
    lat: 34.6654,
    lng: 135.4323,
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Universal+Studios+Japan+34.6654,135.4323",
    targetItems: [
      { name: "2일차 자유일정 (10/24 토)", price: "슈퍼 닌텐도 월드 / 해리포터" }
    ],
    tips: "★ 2일차 메인 일정. 공식 앱 등록 후 닌텐도 월드 e정리권 즉시 확보 필수! [지도보기]로 테마파크 정문 위치 확인 가능.",
    badge: "2일차 메인",
    directNav: "https://www.google.com/maps/dir/?api=1&destination=34.6654,135.4323"
  },
  {
    id: "tour-kuromon",
    name: "구로몬 시장 (Kuromon Market)",
    category: "tour",
    area: "닛폰바시",
    floor: "전통 아케이드 시장",
    lat: 34.6657,
    lng: 135.5074,
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Kuromon+Market+34.6657,135.5074",
    targetItems: [
      { name: "1일차 일정 (13:30 - 16:00)", price: "와규 꼬치, 가리비 구이, 참치회, 과일" }
    ],
    tips: "오사카의 부엌. 신선한 해산물 구이와 길거리 간식을 즉석에서 즐기기 좋은 스팟.",
    badge: "1일차 탐방",
    directNav: "https://www.google.com/maps/dir/?api=1&destination=34.6657,135.5074"
  },
  {
    id: "tour-osaka-castle",
    name: "오사카성 천수각 (Osaka Castle)",
    category: "tour",
    area: "오사카죠코엔",
    floor: "성채 / 공원",
    lat: 34.6873,
    lng: 135.5262,
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Osaka+Castle+34.6873,135.5262",
    targetItems: [
      { name: "1일차 일정 (16:30 - 17:30)", price: "천수각 관람 & 공원 산책" }
    ],
    tips: "오사카의 대표 랜드마크. 해질 무렵 천수각 배경 사진 촬영 명소.",
    badge: "1일차 명소",
    directNav: "https://www.google.com/maps/dir/?api=1&destination=34.6873,135.5262"
  },
  {
    id: "tour-dotonbori-night",
    name: "도톤보리 글리코상 & 신사이바시 야시장",
    category: "tour",
    area: "난바/도톤보리",
    floor: "거리 전체",
    lat: 34.6690,
    lng: 135.5013,
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Dotonbori+Glico+Sign+34.6690,135.5013",
    targetItems: [
      { name: "2일차 저녁 (신사이바시 야시장)", price: "타코야키, 돈키호테 면세 쇼핑" }
    ],
    tips: "글리코상 러너 포즈 인증샷 필수. 에비스 다리 일대와 돈키호테 도톤보리점 인접.",
    badge: "야경 & 미식",
    directNav: "https://www.google.com/maps/dir/?api=1&destination=34.6690,135.5013"
  },
  {
    id: "hotel-basecamp",
    name: "DEL style 오사카 신사이바시 (베이스캠프)",
    category: "hotel",
    area: "신사이바시",
    floor: "호텔 로비 / 객실",
    lat: 34.6766,
    lng: 135.5015,
    mapUrl: "https://www.google.com/maps/search/?api=1&query=DEL+style+Osaka+shinsaibashi+34.6766,135.5015",
    targetItems: [
      { name: "우리 여행의 숙소 & 집결지", price: "체크인 15:00 / 체크아웃 11:00" }
    ],
    tips: "신사이바시역 1번 출구 도보 3분. 신사이바시 상점가 바로 옆이라 쇼핑 후 짐 놓고 다니기 최적의 위치.",
    badge: "숙소",
    directNav: "https://www.google.com/maps/dir/?api=1&destination=34.6766,135.5015"
  }
];

// Shopping Targets for Wishlist Tab
const WISHLIST_ITEMS = [
  {
    id: "wish-danton",
    name: "단톤 (DANTON) 인너 다운 자켓 / 플리스",
    spec: "남녀공용 경량 패딩 / 노칼라 플리스 가디건",
    price: "약 17,000~21,000엔 (세전)",
    tip: "신사이바시 PARCO 5F Bshop 또는 그랜드프론트 남관 4F Bshop. 핏이 슬림하고 보온성이 좋아 간절기 및 이너로 최고 인기.",
    stores: ["Bshop 신사이바시 PARCO 5F (숙소 도보 4분)", "Bshop 그랜드 프론트 남관 4F", "Bshop 난바 파크스 3F"]
  },
  {
    id: "wish-porter",
    name: "요시다 포터 (PORTER) 탱커 숄더 / 헬멧백",
    spec: "탱커(TANKER) 시그니처 나일론 오렌지 안감 라인",
    price: "정가 판매 (10% 면세 적용)",
    tip: "신사이바시 PARCO 1F 직영 매장. 내구성 극강의 클래식 캐주얼 백. 현지 매장에서 실물 착용 후 구매 추천.",
    stores: ["PORTER SHINSAIBASHI (파르코 1F)", "KURA CHIKA 그랜드프론트 남관 3F", "난바 다카시마야 2F"]
  },
  {
    id: "wish-onitsuka",
    name: "오니츠카 타이거 멕시코 66 / NIPPON MADE",
    spec: "MEXICO 66 (실버/골드/화이트) 또는 수제 NIPPON MADE",
    price: "멕시코66 약 15,000엔대 / NIPPON MADE 약 30,000엔대",
    tip: "신사이바시 플래그십 매장(도보 4분). 착화감이 매우 가볍고 편안함. 일본 한정 컬러 체크 필수.",
    stores: ["오니츠카 타이거 신사이바시 플래그십", "오니츠카 타이거 난바 파크스 4F"]
  },
  {
    id: "wish-glass",
    name: "쇼토쿠 우스하리 맥주잔 (松徳硝子 うすはり)",
    spec: "L사이즈 (375ml) x 2개",
    price: "개당 2,640엔 (세전 약 2,400엔)",
    tip: "다이마루 신사이바시 8층 식기코너 또는 한큐/한신 7층. 백화점 5% 게스트 쿠폰 필수! '완충재(에어캡)' 포장 요청 꼭 하기.",
    stores: ["다이마루 신사이바시점 8F (숙소 도보 4분)", "한신백화점 7F CLASKA DO", "한큐백화점 7F 리빙", "타카시마야 6F"]
  },
  {
    id: "wish-boots",
    name: "몽벨 로건부츠 (MontBell Logan Boots)",
    spec: "160cm (뉴발란스 베이지 160 신는 발 기준)",
    price: "7,480엔 (세금 포함) / 세전 6,800엔",
    tip: "발목을 단단하게 지지해 주는 방한/스노우 부츠. 그랜드프론트 오사카 남관 5층(우메키타점)이 재고 확률 가장 높음.",
    stores: ["그랜드 프론트 오사카 남관 5F", "다이마루 신사이바시 6F", "난바CITY 남관 B1F", "루쿠아 1100 6F"]
  },
  {
    id: "wish-cap",
    name: "몽벨 클리마 플러스 200 O.D. 이어워머 캡",
    spec: "Kidz (아동용)",
    price: "면세가 2,200엔",
    tip: "귀마개 일체형 플리스 방한 모자. 겨울철 보온성 극상 인기템.",
    stores: ["몽벨 전 매장"]
  },
  {
    id: "wish-muffler",
    name: "몽벨 샤미스 머플러 (CHAMEECE Muffler)",
    spec: "성인용 (초경량 보온 플리스)",
    price: "1,760엔 (세금 포함) / 면세가 1,600엔",
    tip: "가볍고 부드러운 극세사 플리스 머플러. 가성비 최고의 가족 선물용 추천템.",
    stores: ["몽벨 전 매장"]
  },
  {
    id: "wish-nuptse",
    name: "노스페이스 키즈 눕시 부티 VII (K Nuptse Bootie VII)",
    spec: "160cm",
    price: "정가 10,450엔 ~ 11,550엔 / 면세 약 9,500엔 ~ 10,500엔",
    tip: "몽벨이 단단한 부츠라면, 눕시는 패딩처럼 가볍고 푹신한 일상 방한화. 신발 특화 매장(신사이바시 쿼츠 4층) 및 한큐 11층 키즈 추천.",
    stores: ["THE NORTH FACE FOOTWEAR 신사이바시 4F", "신사이바시 PARCO 3F", "한큐백화점 11F 키즈", "그랜드프론트 5F"]
  },
  {
    id: "wish-baobao",
    name: "바오바오 이세이미야케 루센트 토트",
    spec: "베이직 컬러 (화이트/블랙/실버)",
    price: "약 43,000엔대 (5% 쿠폰+면세 시 약 38,000엔)",
    tip: "다이마루 신사이바시 4F. 5% 게스트 쿠폰 적용 가능 브랜드! 가볍고 스타일리시한 스테디셀러.",
    stores: ["다이마루 신사이바시 4F", "한큐 우메다 본점 1F"]
  },
  {
    id: "wish-whisky",
    name: "산토리 싱글몰트 위스키 (야마자키 / 하쿠슈)",
    spec: "700ml 병",
    price: "정가 약 7,700엔~ (현지 리셀샵 시세 상이)",
    tip: "리커마운틴 신사이바시점 또는 빅카메라 난바점. 주류 면세 한도 2병(총 2L, $400 이하) 체크.",
    stores: ["리커마운틴 신사이바시점", "빅카메라 난바점 2F 주류코너"]
  }
];

// Convenience Store (CVS) Database
const CVS_DATA = {
  seven: {
    brand: "세븐일레븐 (7-Eleven)",
    badge: "디저트 & 스무디 명가",
    class: "seven",
    items: [
      {
        name: "세븐카페 즉석 블렌딩 스무디",
        jp: "お店で作る スムージー",
        price: "약 300엔",
        tag: "음료/혁신",
        tagClass: "tag-drink",
        desc: "냉동 컵을 골라 계산 후 전용 블렌더 머신에 바코드를 찍고 갈아먹는 즉석 스무디! 딸기바나나소이 & 그린스무디 추천."
      },
      {
        name: "타마고 산도 (달걀 샌드위치)",
        jp: "たっぷりたまごサンド",
        price: "약 250엔",
        tag: "식사/간식",
        tagClass: "tag-hot",
        desc: "흰 식빵 사이에 고소하고 부드러운 에그 마요 샐러드가 꽉 찬 편의점 샌드위치의 근본."
      },
      {
        name: "오하요 쟈지우유 브륄레 아이스크림",
        jp: "オハヨー ブリュレ (BRULEE)",
        price: "약 365엔",
        tag: "디저트 1위",
        tagClass: "tag-dessert",
        desc: "바삭하게 구워진 설탕 캐러멜 토핑을 숟가락으로 톡 깨서 진한 쟈지우유 밀크 아이스크림과 함께 먹는 환상의 조합."
      },
      {
        name: "쟈지우유 푸딩 (Jersey Milk Pudding)",
        jp: "ジャージー牛乳プリン",
        price: "약 170엔",
        tag: "디저트",
        tagClass: "tag-dessert",
        desc: "윗면의 부드러운 크림과 아래의 진한 밀크 푸딩이 녹아내리는 국민 푸딩."
      },
      {
        name: "세븐 프리미엄 랑그드샤 화이트초코",
        jp: "ラングドシャ ホワイトチョコ",
        price: "약 192엔",
        tag: "과자/선물",
        tagClass: "tag-dessert",
        desc: "시로이 코이비토와 맛이 95% 흡사한 가성비 최고의 고급 쿠키 과자."
      }
    ]
  },
  lawson: {
    brand: "로손 (Lawson)",
    badge: "모찌롤 & 튀김 성지",
    class: "lawson",
    items: [
      {
        name: "가라아게군 (Karaage-kun 치킨)",
        jp: "からあげクン (レッド / レギュラー)",
        price: "약 238엔 (5개입)",
        tag: "즉석 핫도그",
        tagClass: "tag-hot",
        desc: "로손 카운터 옆 온장고의 전설적인 치킨너겟. 매콤한 '레드'맛과 고소한 '치즈'맛이 맥주 안주로 극상."
      },
      {
        name: "우치카페 모찌롤 (Mochi Roll Cake)",
        jp: "もち食感ロール (北海道産生クリーム)",
        price: "약 343엔 (6조각)",
        tag: "디저트 1위",
        tagClass: "tag-dessert",
        desc: "빵 시트가 떡처럼 쫄깃쫄깃하고 신선한 홋카이도 생크림이 가득 찬 로손의 대표 효자템."
      },
      {
        name: "프리미엄 롤케이크",
        jp: "プレミアムロールケーキ",
        price: "약 194엔",
        tag: "디저트",
        tagClass: "tag-dessert",
        desc: "숟가락으로 떠먹는 순백의 우유 생크림 롤케이크. 편의점 수준을 뛰어넘은 퀄리티."
      },
      {
        name: "바스크 치즈케이크 (Baschee)",
        jp: "バスチー (バスク風チーズケーキ)",
        price: "약 243엔",
        tag: "치즈케이크",
        tagClass: "tag-dessert",
        desc: "겉은 노릇하게 그을리고 속은 크리미하게 녹아내리는 진한 치즈 풍미."
      }
    ]
  },
  fami: {
    brand: "패밀리마트 (FamilyMart)",
    badge: "파미치키 & 수플레 푸딩",
    class: "fami",
    items: [
      {
        name: "파미치키 (Famichiki 뼈없는 순살 치킨)",
        jp: "ファミチキ",
        price: "약 220엔",
        tag: "치킨 1위",
        tagClass: "tag-hot",
        desc: "한입 베어 물면 뜨거운 육즙이 터져 나오는 바삭하고 짭조름한 일본 편의점 즉석치킨의 최강자."
      },
      {
        name: "수플레 푸딩 (Souffle Pudding)",
        jp: "スフレ・プリン",
        price: "약 320엔",
        tag: "디저트 1위",
        tagClass: "tag-dessert",
        desc: "탱글하고 달콤한 커스터드 푸딩 위에 두툼하고 촉촉한 치즈 수플레 케이크를 통째로 얹은 디저트."
      },
      {
        name: "패미마 프라페 (Famima Frappe)",
        jp: "ファミマフラッペ",
        price: "약 330~350엔",
        tag: "음료",
        tagClass: "tag-drink",
        desc: "냉동 컵을 주물러 얼음을 깬 후 매장 커피 머신에서 따뜻한 우유를 부어 빨대로 저어 마시는 프라페."
      },
      {
        name: "크리스피 치킨 (하바네로 핫)",
        jp: "クリスピーチキン (ハバネロホット)",
        price: "약 178엔",
        tag: "스낵",
        tagClass: "tag-hot",
        desc: "닭가슴살을 매콤하고 극도로 바삭하게 튀겨내 부담 없이 즐기기 좋은 핫 스낵."
      }
    ]
  }
};

// App State
let userCoords = null;
let useGpsMode = false;
let activeCategory = "all";
let searchQuery = "";
let bookmarks = new Set(JSON.parse(localStorage.getItem("trip_osaka_bookmarks") || "[]"));
let purchasedItems = new Set(JSON.parse(localStorage.getItem("trip_osaka_purchased") || "[]"));

// Calculator State
let calcState = {
  price: 10000,
  use5Percent: true,
  useTaxFree: true,
  deductFee: true, // 1.55% 백화점 수수료
  rate: 9.20 // 100엔당 920원 (엔화 1엔 = 9.2원)
};

// Haversine Formula for distance (km)
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Earth's radius in km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function formatDistance(distKm) {
  if (distKm < 1) {
    return `${Math.round(distKm * 1000)}m`;
  }
  return `${distKm.toFixed(1)}km`;
}

// Current Origin Coordinates
function getOriginCoords() {
  if (useGpsMode && userCoords) {
    return userCoords;
  }
  return { lat: BASECAMP.lat, lng: BASECAMP.lng };
}

// Initialize App
function initApp() {
  setupEventListeners();
  renderPlaces();
  renderWishlist();
  renderConvenienceStore();
  updateCalculator();
  tryAutoGps();
}

function tryAutoGps() {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        userCoords = {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude
        };
        useGpsMode = true;
        updateGpsButtonState(true);
        renderPlaces();
        showToast("📍 내 GPS 위치가 연동되었습니다.");
      },
      (err) => {
        console.warn("GPS access denied or unavailable, using Hotel as base:", err.message);
        useGpsMode = false;
        updateGpsButtonState(false);
        renderPlaces();
      },
      { enableHighAccuracy: true, timeout: 7000 }
    );
  }
}

function updateGpsButtonState(active) {
  const btn = document.getElementById("gpsToggleBtn");
  const label = document.getElementById("gpsBtnLabel");
  const sortIndicator = document.getElementById("sortIndicator");

  if (active) {
    btn.classList.add("active");
    label.textContent = "내 GPS 연동 중";
    sortIndicator.textContent = "내 위치 기준 거리순";
  } else {
    btn.classList.remove("active");
    label.textContent = "숙소 기준 거리";
    sortIndicator.textContent = "숙소(DEL style) 기준 거리순";
  }
}

function toggleGps() {
  if (!useGpsMode) {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          userCoords = { lat: pos.coords.latitude, lng: pos.coords.longitude };
          useGpsMode = true;
          updateGpsButtonState(true);
          renderPlaces();
          showToast("📍 내 GPS 실시간 거리순으로 정렬되었습니다.");
        },
        (err) => {
          showToast("⚠️ 위치 권한이 꺼져 있어 숙소 기준으로 유지됩니다.");
          useGpsMode = false;
          updateGpsButtonState(false);
          renderPlaces();
        },
        { enableHighAccuracy: true }
      );
    } else {
      showToast("이 기기에서 위치 서비스를 지원하지 않습니다.");
    }
  } else {
    useGpsMode = false;
    updateGpsButtonState(false);
    renderPlaces();
    showToast("🏨 숙소(호텔) 기준 거리순으로 전환되었습니다.");
  }
}

// Render Places List
function renderPlaces() {
  const container = document.getElementById("placesList");
  const origin = getOriginCoords();

  // Compute distances
  let list = PLACES.map(place => {
    const dist = calculateDistance(origin.lat, origin.lng, place.lat, place.lng);
    return { ...place, distance: dist };
  });

  // Filter by category
  if (activeCategory === "bookmarks") {
    list = list.filter(p => bookmarks.has(p.id));
  } else if (activeCategory !== "all") {
    if (activeCategory === "shop") {
      list = list.filter(p => p.category === "shop" || p.category === "combo");
    } else if (activeCategory === "luxury") {
      list = list.filter(p => p.category === "luxury" || p.category === "vintage");
    } else {
      list = list.filter(p => p.category === activeCategory);
    }
  }

  // Filter by search query
  if (searchQuery.trim()) {
    const q = searchQuery.trim().toLowerCase();
    list = list.filter(p => 
      p.name.toLowerCase().includes(q) ||
      p.area.toLowerCase().includes(q) ||
      p.tips.toLowerCase().includes(q) ||
      p.targetItems.some(item => item.name.toLowerCase().includes(q))
    );
  }

  // Sort by distance (closest first)
  list.sort((a, b) => a.distance - b.distance);

  // Render HTML
  if (list.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding: 40px 20px; color: #94a3b8;">
        <div style="font-size: 32px; margin-bottom: 10px;">🔍</div>
        <p>조건에 맞는 장소가 없습니다.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = list.map(place => {
    const isBookmarked = bookmarks.has(place.id);
    const categoryClass = place.category;
    const formattedDist = formatDistance(place.distance);

    const itemsHtml = place.targetItems && place.targetItems.length > 0
      ? `<div class="target-items">
          ${place.targetItems.map(item => `
            <div class="target-item-row">
              <span class="target-item-name">• ${item.name}</span>
              <span class="target-item-price">${item.price}</span>
            </div>
          `).join("")}
        </div>`
      : "";

    let couponBadge = "";
    if (place.couponInfo === "brand-check") {
      couponBadge = `<span class="badge badge-coupon-yes">쿠폰/면세 상이</span>`;
    }

    return `
      <div class="place-card ${isBookmarked ? "bookmarked" : ""}" id="card-${place.id}">
        <div class="card-top">
          <div class="title-wrap">
            <div class="badge-row">
              <span class="badge ${categoryClass}">${place.badge || place.category}</span>
              <span class="badge" style="background:#f1f5f9; color:#475569;">${place.area}</span>
              ${couponBadge}
            </div>
            <h3 class="place-name">${place.name}</h3>
            <div class="place-floor">${place.floor}</div>
          </div>
          <button class="bookmark-btn ${isBookmarked ? "active" : ""}" onclick="toggleBookmark('${place.id}')" title="북마크 토글">
            ${isBookmarked ? "★" : "☆"}
          </button>
        </div>

        ${itemsHtml}

        <div class="card-tips">
          <span class="tip-icon">💡</span>
          <span>${place.tips}</span>
        </div>

        <div class="card-bottom">
          <div class="distance-tag">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>
            <span>${formattedDist}</span>
          </div>

          <div class="action-btns">
            <a href="${place.mapUrl}" target="_blank" rel="noopener noreferrer" class="nav-direct-btn" style="background:#475569;">
              지도보기
            </a>
            <a href="${place.directNav}" target="_blank" rel="noopener noreferrer" class="nav-direct-btn">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              길찾기
            </a>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

// Render Convenience Store Tab
function renderConvenienceStore() {
  const container = document.getElementById("cvsContainer");
  if (!container) return;

  const brands = [CVS_DATA.seven, CVS_DATA.lawson, CVS_DATA.fami];

  container.innerHTML = brands.map(b => `
    <div class="cvs-brand-card">
      <div class="cvs-header ${b.class}">
        <span>${b.brand}</span>
        <span style="font-size:12px; font-weight:600; opacity:0.9;">${b.badge}</span>
      </div>
      <div class="cvs-item-list">
        ${b.items.map(it => `
          <div class="cvs-item">
            <div class="cvs-item-title-row">
              <span class="cvs-item-name">${it.name}</span>
              <span class="cvs-item-tag ${it.tagClass}">${it.tag}</span>
            </div>
            <div class="cvs-item-jp" onclick="copyText('${it.jp}')" title="탭하여 일본어 복사">
              ${it.jp} <span style="font-size:10px; color:#2563eb;">📋</span>
            </div>
            <div style="font-size:12px; font-weight:700; color:#dc2626; margin-bottom:3px;">
              ${it.price}
            </div>
            <div class="cvs-item-desc">${it.desc}</div>
          </div>
        `).join("")}
      </div>
    </div>
  `).join("");
}

// Toggle Bookmark
window.toggleBookmark = function(id) {
  if (bookmarks.has(id)) {
    bookmarks.delete(id);
    showToast("북마크가 해제되었습니다.");
  } else {
    bookmarks.add(id);
    showToast("⭐ 북마크에 저장되었습니다.");
  }
  localStorage.setItem("trip_osaka_bookmarks", JSON.stringify([...bookmarks]));
  renderPlaces();
};

// Render Wishlist
function renderWishlist() {
  const container = document.getElementById("wishlistContainer");
  container.innerHTML = WISHLIST_ITEMS.map(item => {
    const isDone = purchasedItems.has(item.id);
    return `
      <div class="wish-card">
        <div class="wish-header">
          <h3 class="wish-title">${item.name}</h3>
          <div class="check-pill ${isDone ? "completed" : ""}" onclick="togglePurchased('${item.id}')">
            ${isDone ? "✓ 구매완료" : "미구매"}
          </div>
        </div>
        <div class="wish-details">
          <div><strong>규격:</strong> ${item.spec}</div>
          <div><strong>예상가격:</strong> <span style="color:#dc2626; font-weight:700;">${item.price}</span></div>
          <div style="margin-top:5px; color:#475569; font-size:12px;"><strong>구매 팁:</strong> ${item.tip}</div>
        </div>
        <div class="wish-stores">
          <strong>판매처 후보:</strong>
          <ul>
            ${item.stores.map(s => `<li>${s}</li>`).join("")}
          </ul>
        </div>
      </div>
    `;
  }).join("");
}

window.togglePurchased = function(id) {
  if (purchasedItems.has(id)) {
    purchasedItems.delete(id);
    showToast("구매 상태가 미완료로 변경되었습니다.");
  } else {
    purchasedItems.add(id);
    showToast("🎉 구매 완료 체크되었습니다!");
  }
  localStorage.setItem("trip_osaka_purchased", JSON.stringify([...purchasedItems]));
  renderWishlist();
};

// --- Calculator Logic ---
function updateCalculator() {
  const rawPrice = parseFloat(document.getElementById("calcInputPrice").value) || 0;
  calcState.price = rawPrice;

  let currentPrice = rawPrice;
  let couponDiscount = 0;

  // 1. 5% 백화점 쿠폰 적용
  if (calcState.use5Percent && currentPrice > 0) {
    couponDiscount = currentPrice * 0.05;
    currentPrice = currentPrice - couponDiscount;
  }

  // 2. 면세 10% 및 수수료 1.55% 계산
  let taxRefund = 0;
  let handlingFee = 0;
  if (calcState.useTaxFree && currentPrice > 0) {
    taxRefund = (currentPrice / 1.10) * 0.10;

    if (calcState.deductFee) {
      handlingFee = (currentPrice / 1.10) * 0.0155;
      taxRefund = taxRefund - handlingFee;
    }
  }

  const finalJpy = Math.max(0, currentPrice - taxRefund);
  const finalKrw = Math.round(finalJpy * (calcState.rate));

  document.getElementById("calcResultJpy").textContent = `${Math.round(finalJpy).toLocaleString()}엔`;
  document.getElementById("calcResultKrw").textContent = `약 ${finalKrw.toLocaleString()}원`;
  document.getElementById("calcCouponDiscount").textContent = `-${Math.round(couponDiscount).toLocaleString()}엔`;
  document.getElementById("calcTaxRefund").textContent = `-${Math.round(taxRefund).toLocaleString()}엔`;
  
  const totalSavedJpy = (rawPrice - finalJpy);
  const savedRate = rawPrice > 0 ? ((totalSavedJpy / rawPrice) * 100).toFixed(1) : 0;
  document.getElementById("calcSavedRate").textContent = `총 약 ${savedRate}% 절약`;
}

// Setup Event Listeners
function setupEventListeners() {
  // GPS button
  document.getElementById("gpsToggleBtn").addEventListener("click", toggleGps);

  // Search Input
  const searchInput = document.getElementById("searchInput");
  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    renderPlaces();
  });

  // Filter Chips
  const chips = document.querySelectorAll(".chip");
  chips.forEach(chip => {
    chip.addEventListener("click", () => {
      chips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      activeCategory = chip.dataset.category;
      renderPlaces();
    });
  });

  // Bottom Navigation Tabs
  const navItems = document.querySelectorAll(".nav-item");
  const tabViews = document.querySelectorAll(".tab-view");

  navItems.forEach(item => {
    item.addEventListener("click", () => {
      const targetTab = item.dataset.tab;
      navItems.forEach(n => n.classList.remove("active"));
      tabViews.forEach(v => v.classList.remove("active"));

      item.classList.add("active");
      const targetEl = document.getElementById(targetTab);
      if (targetEl) targetEl.classList.add("active");

      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  // Modal Open & Close
  document.getElementById("openPhraseModal").addEventListener("click", () => {
    document.getElementById("phraseModal").classList.add("open");
  });

  document.getElementById("closePhraseModal").addEventListener("click", () => {
    document.getElementById("phraseModal").classList.remove("open");
  });

  document.getElementById("phraseModal").addEventListener("click", (e) => {
    if (e.target.id === "phraseModal") {
      document.getElementById("phraseModal").classList.remove("open");
    }
  });

  // Calculator Inputs
  document.getElementById("calcInputPrice").addEventListener("input", updateCalculator);
  document.getElementById("calcInputRate").addEventListener("input", (e) => {
    const val = parseFloat(e.target.value) || 920;
    calcState.rate = val / 100;
    updateCalculator();
  });

  document.getElementById("btnToggle5Percent").addEventListener("click", function() {
    calcState.use5Percent = !calcState.use5Percent;
    this.classList.toggle("checked", calcState.use5Percent);
    updateCalculator();
  });

  document.getElementById("btnToggleTaxFree").addEventListener("click", function() {
    calcState.useTaxFree = !calcState.useTaxFree;
    this.classList.toggle("checked", calcState.useTaxFree);
    updateCalculator();
  });

  document.getElementById("btnToggleFee").addEventListener("click", function() {
    calcState.deductFee = !calcState.deductFee;
    this.classList.toggle("checked", calcState.deductFee);
    updateCalculator();
  });
}

// Toast helper
function showToast(msg) {
  let toast = document.getElementById("appToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "appToast";
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 2200);
}

// Copy to clipboard helper
window.copyText = function(text) {
  navigator.clipboard.writeText(text).then(() => {
    showToast("📋 일본어가 복사되었습니다.");
  }).catch(() => {
    showToast(text);
  });
};

// Start
document.addEventListener("DOMContentLoaded", initApp);
