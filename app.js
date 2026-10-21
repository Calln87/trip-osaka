/**
 * Osaka Trip 2026 - Shopping & Gourmet Smart Guide
 * Developed with Vanilla JS for high performance & offline capability
 */

// Basecamp (Hotel) Configuration
const BASECAMP = {
  name: "DEL style 오사카 신사이바시 (다이와 로이넷)",
  enName: "DEL style Osakashinsaibashi by Daiwa Roynet Hotel",
  address: "3 Chome-9-8 Minamisenba, Chuo Ward, Osaka, 542-0081",
  lat: 34.6766,
  lng: 135.5015,
  mapUrl: "https://maps.app.goo.gl/x1Ut3p6uw95g8wWA9"
};

// Places Database
const PLACES = [
  {
    id: "combo-grand-front",
    name: "그랜드 프론트 오사카 남관 5F (원스톱 추천)",
    category: "combo",
    area: "우메다 (JR 오사카역 북측)",
    floor: "남관 5층 (동일 층 위치)",
    lat: 34.7042,
    lng: 135.4954,
    mapUrl: "https://maps.app.goo.gl/Lvw87A5fpfLfQHxv5",
    targetItems: [
      { name: "몽벨 (MontBell Umekita)", price: "로건부츠 7,480엔 / 샤미스 1,760엔" },
      { name: "노스페이스+ (TNF+ Grand Front)", price: "눕시 부티 10,450엔~ (오사카 최대 매장)" }
    ],
    tips: "★ 몽벨과 노스페이스가 한 건물 같은 층(남관 5층)에 마주보고 있어 사이즈/디자인 즉시 비교 가능! 물품 구비량이 가장 많음.",
    badge: "원스톱 성지",
    directNav: "https://www.google.com/maps/dir/?api=1&destination=34.7042,135.4954"
  },
  {
    id: "combo-daimaru-parco",
    name: "다이마루 신사이바시 & 파르코 (숙소 최단 콤보)",
    category: "combo",
    area: "신사이바시",
    floor: "다이마루 6F·8F / 파르코 3F",
    lat: 34.6738,
    lng: 135.5009,
    mapUrl: "https://maps.app.goo.gl/EyfKcADWJZGMGqTz8",
    targetItems: [
      { name: "쇼토쿠 우스하리 맥주잔 (8F)", price: "L(375ml) 2개 개당 2,640엔" },
      { name: "몽벨 (다이마루 6F)", price: "로건부츠 / 방한용품" },
      { name: "노스페이스 UNLIMITED (파르코 3F)", price: "키즈 눕시 부티 VII" }
    ],
    tips: "★ 숙소에서 도보 4분! 다이마루 3층 연결통로를 통해 신사이바시 파르코 3층 노스페이스로 외부 안 나가고 바로 이동 가능.",
    badge: "숙소 도보 4분",
    directNav: "https://www.google.com/maps/dir/?api=1&destination=34.6738,135.5009"
  },
  {
    id: "shop-daimaru-shinsaibashi-8f",
    name: "다이마루 신사이바시점 8F 식기판매",
    category: "shop",
    area: "신사이바시",
    floor: "본관 8층 리빙/식기",
    lat: 34.6738,
    lng: 135.5009,
    mapUrl: "https://maps.app.goo.gl/JWpeMsXtpJKyAhSA8",
    targetItems: [
      { name: "쇼토쿠 우스하리 맥주잔 L (375ml)", price: "개당 2,640엔" }
    ],
    tips: "숙소에서 제일 가까움. 계산 전 인포메이션 또는 카운터에서 외국인 전용 5% 할인 쿠폰 필수 수령! 완충재(에어캡) 포장 요청 필수.",
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
    mapUrl: "https://maps.app.goo.gl/LtKDM5A1kddopH766",
    targetItems: [
      { name: "노스페이스 키즈 눕시 부티 VII (160cm)", price: "정가 10,450엔~ / 면세 약 9,500엔~" }
    ],
    tips: "신발 특화 매장으로 부츠/신발 라인업이 가장 다양함. 푹신하고 가벼운 일상 방한화 추천. 숙소에서 도보 2~3분 거리.",
    badge: "신발 특화",
    directNav: "https://www.google.com/maps/dir/?api=1&destination=34.6752,135.5002"
  },
  {
    id: "shop-tnf-parco",
    name: "THE NORTH FACE UNLIMITED Shinsaibashi PARCO",
    category: "shop",
    area: "신사이바시",
    floor: "PARCO 3층",
    lat: 34.6739,
    lng: 135.5012,
    mapUrl: "https://maps.app.goo.gl/ZGutGMroZv96XJoU7",
    targetItems: [
      { name: "노스페이스 키즈 눕시 부티 VII", price: "면세 적용 가능" }
    ],
    tips: "파르코 3층에 위치. 다이마루 3층 연결통로 이용 시 비가 와도 젖지 않고 쾌적하게 이동 가능.",
    badge: "노스페이스",
    directNav: "https://www.google.com/maps/dir/?api=1&destination=34.6739,135.5012"
  },
  {
    id: "shop-montbell-namba-city",
    name: "MontBell @ Namba City (난바시티)",
    category: "shop",
    area: "난바",
    floor: "남관 지하 1층",
    lat: 34.6640,
    lng: 135.5018,
    mapUrl: "https://maps.app.goo.gl/1Uztud3fmSqqPbReA",
    targetItems: [
      { name: "몽벨 로건부츠 (160cm 베이지)", price: "7,480엔 (세전 6,800엔)" },
      { name: "클리마 플러스 200 O.D.이어 워머 캡", price: "면세가 2,200엔" },
      { name: "샤미스 머플러 (성인용)", price: "1,760엔 (면세가 1,600엔)" }
    ],
    tips: "난바 지역에서 가장 넓은 몽벨 매장. 아동용 부츠 및 방한 액세서리 재고 확률 높음.",
    badge: "몽벨 대형점",
    directNav: "https://www.google.com/maps/dir/?api=1&destination=34.6640,135.5018"
  },
  {
    id: "shop-timeless-comfort",
    name: "타임리스 컴포트 미나미호리에점",
    category: "shop",
    area: "오렌지스트리트 / 호리에",
    floor: "1-2층 편집샵",
    lat: 34.6705,
    lng: 135.4950,
    mapUrl: "https://maps.app.goo.gl/enscYbYctE3Vbdhx6",
    targetItems: [
      { name: "쇼토쿠 우스하리 글라스", price: "정가 판매" }
    ],
    tips: "트렌디한 오렌지스트리트 카페거리 감성 인테리어 리빙 편집숍. 쇼토쿠 우스하리 정품 라인 구비.",
    badge: "리빙 편집샵",
    directNav: "https://www.google.com/maps/dir/?api=1&destination=34.6705,135.4950"
  },
  {
    id: "shop-takashimaya",
    name: "다카시마야 오사카점 (난바역)",
    category: "shop",
    area: "난바역",
    floor: "6층 식기 / 노스페이스",
    lat: 34.6652,
    lng: 135.5015,
    mapUrl: "https://maps.app.goo.gl/bGjv4VoWquUeVChn6",
    targetItems: [
      { name: "우스하리 잔 (6F 식기)", price: "2,640엔" },
      { name: "THE NORTH FACE Takashimaya", price: "의류/신발" }
    ],
    tips: "외국인 5% 할인쿠폰(헬로키티 카드) 1층 인포메이션 발급. 6층에서 우스하리 잔과 노스페이스 동시 공략 가능.",
    badge: "백화점 5% 할인",
    directNav: "https://www.google.com/maps/dir/?api=1&destination=34.6652,135.5015"
  },
  {
    id: "shop-montbell-lucua",
    name: "mont-bell LUCUA Osaka Store (루쿠아 1100)",
    category: "shop",
    area: "우메다",
    floor: "루쿠아 1100(이레) 6층",
    lat: 34.7032,
    lng: 135.4965,
    mapUrl: "https://maps.app.goo.gl/n3zsUk3FpaHtVh758",
    targetItems: [
      { name: "몽벨 로건부츠 / 방한모 / 머플러", price: "정가/면세" }
    ],
    tips: "JR 오사카역과 바로 연결되어 접근성이 극상. 우메다 쇼핑 시 접근하기 편리함.",
    badge: "오사카역 직결",
    directNav: "https://www.google.com/maps/dir/?api=1&destination=34.7032,135.4965"
  },
  {
    id: "shop-hankyu-umeda",
    name: "한큐백화점 우메다 본점",
    category: "shop",
    area: "우메다",
    floor: "7F 리빙식기 / 11F 키즈",
    lat: 34.7025,
    lng: 135.4988,
    mapUrl: "https://maps.app.goo.gl/2XCMuqqHcDTjYeh17",
    targetItems: [
      { name: "쇼토쿠 우스하리 맥주잔 (7F)", price: "2,640엔" },
      { name: "THE NORTH FACE kids (11F)", price: "키즈 전용 눕시 부티" }
    ],
    tips: "11층에 노스페이스 '키즈 전용 매장' 단독 입점! 아이 사이즈(160cm 등) 및 색상 찾기에 최적. 외국인 5% 쿠폰 챙기기.",
    badge: "키즈 전문점",
    directNav: "https://www.google.com/maps/dir/?api=1&destination=34.7025,135.4988"
  },
  {
    id: "shop-hanshin-umeda",
    name: "한신백화점 우메다 본점 7F CLASKA DO",
    category: "shop",
    area: "우메다",
    floor: "7층 CLASKA Gallery & Shop 'DO'",
    lat: 34.7013,
    lng: 135.4975,
    mapUrl: "https://maps.app.goo.gl/VHRnY2YE4gpYWWsS9",
    targetItems: [
      { name: "쇼토쿠 우스하리 잔", price: "2,640엔" }
    ],
    tips: "정갈하고 모던한 일본 공예 식기 편집샵 CLASKA DO. 감성 패키징 선물용 구매에 최적.",
    badge: "공예 편집샵",
    directNav: "https://www.google.com/maps/dir/?api=1&destination=34.7013,135.4975"
  },
  {
    id: "food-nishiya",
    name: "우동치리 혼케 니시야 본점 (うどん錦)",
    category: "food",
    area: "신사이바시",
    floor: "1-2층 단독 고택",
    lat: 34.6748,
    lng: 135.5028,
    mapUrl: "https://maps.app.goo.gl/uX3mG6c8hY7aWnC67",
    targetItems: [
      { name: "1일차 저녁식사 (18:00 - 21:00)", price: "우동치리(해산물 전골) / 면 요리" }
    ],
    tips: "★ 10/23(금) 저녁 공식 식사 장소! 1957년 창업한 신사이바시 대표 노포. 호텔에서 도보 3분 거리.",
    badge: "1일차 석식",
    directNav: "https://www.google.com/maps/dir/?api=1&destination=34.6748,135.5028"
  },
  {
    id: "tour-kuromon",
    name: "구로몬 시장 (Kuromon Market)",
    category: "tour",
    area: "닛폰바시",
    floor: "전통 아케이드 시장",
    lat: 34.6657,
    lng: 135.5074,
    mapUrl: "https://maps.app.goo.gl/9y5H6uJ3sE7tLmNp9",
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
    mapUrl: "https://maps.app.goo.gl/r4fK6c7tU8qVxWmS8",
    targetItems: [
      { name: "1일차 일정 (16:30 - 17:30)", price: "천수각 관람 & 공원 산책" }
    ],
    tips: "오사카의 대표 랜드마크. 해질 무렵 천수각 배경 사진 촬영 명소.",
    badge: "1일차 명소",
    directNav: "https://www.google.com/maps/dir/?api=1&destination=34.6873,135.5262"
  },
  {
    id: "tour-usj",
    name: "유니버셜 스튜디오 재팬 (USJ)",
    category: "tour",
    area: "고노하나구",
    floor: "테마파크 전체",
    lat: 34.6654,
    lng: 135.4323,
    mapUrl: "https://maps.app.goo.gl/bV3g6W7mK9pTqRzB7",
    targetItems: [
      { name: "2일차 자유일정 (10/24 토)", price: "슈퍼 닌텐도 월드 / 해리포터" }
    ],
    tips: "★ 2일차 핵심 일정. 닌텐도 월드 입장 확약권(정리권) 앱 등록 필수!",
    badge: "2일차 메인",
    directNav: "https://www.google.com/maps/dir/?api=1&destination=34.6654,135.4323"
  },
  {
    id: "food-kanidoraku-east",
    name: "가니도라쿠 도톤보리 히가시점 (동관)",
    category: "food",
    area: "도톤보리 동편",
    floor: "전층",
    lat: 34.6687,
    lng: 135.5042,
    mapUrl: "https://maps.app.goo.gl/dJ7tV8sQeLm9XnP56",
    targetItems: [
      { name: "3일차 점심 (12:30 - 13:30)", price: "게 가이세키 정식 코스" }
    ],
    tips: "★ 10/25(일) 점심 공식 식사 장소! 본점보다 비교적 쾌적하고 조용한 동관. 식사 후 14:00 호텔 로비 집합.",
    badge: "3일차 중식",
    directNav: "https://www.google.com/maps/dir/?api=1&destination=34.6687,135.5042"
  },
  {
    id: "tour-dotonbori-night",
    name: "도톤보리 글리코상 & 신사이바시 야시장",
    category: "tour",
    area: "난바/도톤보리",
    floor: "거리 전체",
    lat: 34.6690,
    lng: 135.5013,
    mapUrl: "https://maps.app.goo.gl/3Q8v7sLmK8pTqXzD8",
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
    mapUrl: "https://maps.app.goo.gl/x1Ut3p6uw95g8wWA9",
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
    id: "wish-glass",
    name: "쇼토쿠 우스하리 맥주잔 (松徳硝子 うすはり)",
    spec: "L사이즈 (375ml) x 2개",
    price: "개당 2,640엔 (세전/면세 시 약 2,400엔)",
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
  }
];

// App State
let userCoords = null;
let useGpsMode = false;
let activeCategory = "all";
let searchQuery = "";
let bookmarks = new Set(JSON.parse(localStorage.getItem("trip_osaka_bookmarks") || "[]"));
let purchasedItems = new Set(JSON.parse(localStorage.getItem("trip_osaka_purchased") || "[]"));

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

// Current Origin Coordinates (either user GPS or Hotel Basecamp)
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

  // Compute distances & sort
  let list = PLACES.map(place => {
    const dist = calculateDistance(origin.lat, origin.lng, place.lat, place.lng);
    return { ...place, distance: dist };
  });

  // Filter by category
  if (activeCategory === "bookmarks") {
    list = list.filter(p => bookmarks.has(p.id));
  } else if (activeCategory !== "all") {
    list = list.filter(p => p.category === activeCategory || (activeCategory === "shop" && p.category === "combo"));
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

    return `
      <div class="place-card ${isBookmarked ? "bookmarked" : ""}" id="card-${place.id}">
        <div class="card-top">
          <div class="title-wrap">
            <div class="badge-row">
              <span class="badge ${categoryClass}">${place.badge || place.category}</span>
              <span class="badge" style="background:#f1f5f9; color:#475569;">${place.area}</span>
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
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>
            <span>${formattedDist}</span>
          </div>

          <div class="action-btns">
            <a href="${place.mapUrl}" target="_blank" rel="noopener noreferrer" class="nav-direct-btn" style="background:#475569;">
              지도보기
            </a>
            <a href="${place.directNav}" target="_blank" rel="noopener noreferrer" class="nav-direct-btn">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              길찾기
            </a>
          </div>
        </div>
      </div>
    `;
  }).join("");
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
          <div style="margin-top:6px; color:#475569; font-size:12px;"><strong>구매 팁:</strong> ${item.tip}</div>
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
      document.getElementById(targetTab).classList.add("active");

      // Scroll to top
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
    showToast("📋 일본어 문구가 복사되었습니다.");
  }).catch(() => {
    showToast(text);
  });
};

// Start
document.addEventListener("DOMContentLoaded", initApp);
