const stack = {
  js: "JavaScript",
  ra: "React",
  rn: "React-Native",
  nj: "Node.js",
  rd: "Redux",
  ms: "Mysql",
  ex: "Express",
  ts: "TypeScript"
};

export const skills = Object.keys(stack).map(key => stack[key]);

export const projects = {
  WALKWITH: {
    period: "2020.01 ~ 진행 중",
    skill: [stack.js, stack.ra, stack.rn, stack.rd, stack.ts],
    position: "FRONT-END / TEAM LEADER",
    description: {
      concept: [
        "오늘, 내 주변에 사는 강아지 친구와 같이 산책하고 싶나요?",
        "지역기반 반려견 산책 친구 찾기 어플리케이션",
        "프로젝트 진행 중"
      ],
      stack:
        "Typescript, React-Native, React-Navigation, Redux, Node.js, Express, Mysql, AWS",
      link: {},
      roll: [
        "네비게이션 구조 설계 및 구현",
        "포스트 상세 정보 스크린 구현",
        "회원가입 스크린 구현",
        "채팅 스크린 구현",
        "포커싱 스크린에 따른 탭모드 동적 변경 등",
        "현재 진행 중"
      ]
    },
    blog: {
      title: "진행 중"
    },
    img: [
      {
        source: require("./Assets/image/walkwith/home.png"),
        txt: "현재 위치 기준, 지도에서 실시간 주변 산책 검색 기능"
      },
      {
        source: require("./Assets/image/walkwith/detail.png"),
        txt: "산책 시간, 장소, 참여하는 반려견 정보 확인"
      },
      {
        source: require("./Assets/image/walkwith/chat.png"),
        txt: "각 산책 등록건마다 산책 시간 전까지 참여자들간 채팅으로 대화 기능"
      }
    ]
  },
  "NEWS-CLIPPER": {
    period: "2019.2 ~  2019.2",
    skill: [stack.js, stack.ra, stack.rn, stack.rd],
    position: "BACK-END / TEAM LEADER",
    description: {
      concept: ["첫 번째 프로젝트", "냉장고 재고관리 웹어플리케이션"],
      stack:
        "Node.js, Express, JWT, Mysql, Sequelize, AWS EC2/RDS, React, React-router",
      link: {
        slide: "https://slides.com/bangsil/deck-3",
        Github: "https://github.com/59inu/_foodo/"
      },
      roll: [
        "유저의 식재료 재고 데이터와 메뉴별 재료의 일치 여부에 따라 메뉴를 추천하는 DB Schema 및 프로세스 공동설계",
        "JWT 방식의 권한 인증과 토큰 관리",
        "회원가입/로그인/로그아웃 구현",
        "AWS/ RDS와 EC2를 통한 서버 및 DB 구축과 배포"
      ]
    },
    blog: {
      title: "React 그리고 Team, Team Leader?? — 냉장고 관리 웹앱 Foodo",
      uri:
        "https://medium.com/59inu/%EC%B2%AB-%EB%B2%88%EC%A7%B8-project-%ED%9A%8C%EA%B3%A0-888f390e31d5"
    },
    img: [
      {
        source: require("./Assets/image/foodo/foodo.png"),
        txt: "냉장고 열지 않고 냉장고 속을 파악하기"
      },
      {
        source: require("./Assets/image/foodo/new.png"),
        txt:
          "새로운 식재료를 등록할 수 있습니다. 자동 완성 기능을 통해 서버에 등록된 식재료의 이름을 쉽게 검색할 수 있습니다."
      },
      {
        source: require("./Assets/image/foodo/list.png"),
        txt:
          "식재료 재고 현황의 목록을 확인하고 남은 수량을 수정할 수 있습니다."
      },
      {
        source: require("./Assets/image/foodo/chart.png"),
        txt: "현재 재고의 양과 신선도를 차트로 한 눈에 파악할 수 있습니다."
      },
      {
        source: require("./Assets/image/foodo/recipe.png"),
        txt:
          "현재 유저의 재고를 바탕으로 재료가 일치하는 메뉴를 추천하여, 해당 메뉴의 레시피 영상을 보여줍니다."
      }
    ]
  },
  MEMON: {
    period: "2019.11 ~ 2019.12",
    skill: [stack.js, stack.rn, stack.ra, stack.ts],
    blog: {
      title: "React Native 와 Expo —  모바일 어플 개발 후기",
      uri:
        "https://medium.com/59inu/final-project-%ED%9A%8C%EA%B3%A0-c5dec01f7f50"
    },
    position: "FRONT-END",
    description: {
      concept: ["잦은 더치페이 정산을 위한 금전거래 관리 모바일 어플리케이션"],
      stack:
        "Typescript, React-Native, Expo, firebase, Node.js, Express, PostgreSQL,Sequelize",
      link: {
        PlayStore:
          "https://play.google.com/store/apps/details?id=com.memon.app",
        Github: "https://github.com/59inu/_memon"
      },
      roll: [
        "버튼, 인풋박스 등 재사용 가능한 UI 컴포넌트 설계 및 Native-Base 커스터마이징",
        "거래 등록/ 조회/ 수정 기능 구현 및, 각 기능별 모드로 전환 가능한 입력폼 구현",
        "firebase Auth를 이용한 구글 로그인/로그아웃 기능구현",
        "switch / drawer navigator 결합으로 비로그인 유저의 접근 제한 및 회원가입 프로세스, 자동로그인 등 페이지 진입 경로 설계",
        "디바이스 주소록 접근을 통해 서버로부터 유저 여부를 확인하여 앱 내 친구 목록 구현 및 입금요청, 독촉 등 유저간 interaction 기능 구현",
        "거래건 마다 자동으로 미입금자를 필터링하여, 누적된 독촉 실행 횟수에 따라 서로 다른 메시지를 전달하는 앱푸시 기능 구현 (Expo Push Notification)",
        "사용자 경험 개선을 위해, 다양한 시나리오 테스트를 바탕으로 예외처리 및 에러를 검토하여 상황에 따른 안내 및 경고 메시지 기획 및 구현"
      ]
    },
    img: [
      { source: require("./Assets/image/memon/cover.png"), txt: "" },
      {
        source: require("./Assets/image/memon/paycut.gif"),
        txt:
          "기기에 등록된 연락처 목록에서 어플 회원을 자동으로 필터링하여 새로운 거래 등록 시 참여자로 추가할 수 있습니다."
      },
      {
        source: require("./Assets/image/memon/getmoney.gif"),
        txt:
          "입금요청시 미납 상태인 거래 참여자에게 notification 알람을 띄우며, 한 사람 당 정해진 회수 내에서 입금을 요청할 수 있습니다."
      },
      {
        source: require("./Assets/image/memon/noti.gif"),
        txt:
          "거래 참여자로서 입금을 완료한 경우, 거래등록 유저에게 입금확인요청을 보낼 수 있습니다."
      }
    ]
  },
  FOODO: {
    period: "2019.11 ~  2019.11",
    skill: [stack.js, stack.nj, stack.ex, stack.ms],
    position: "BACK-END / TEAM LEADER",
    description: {
      concept: ["첫 번째 프로젝트", "냉장고 재고관리 웹어플리케이션"],
      stack:
        "Node.js, Express, JWT, Mysql, Sequelize, AWS EC2/RDS, React, React-router",
      link: {
        slide: "https://slides.com/bangsil/deck-3",
        Github: "https://github.com/59inu/_foodo/"
      },
      roll: [
        "유저의 식재료 재고 데이터와 메뉴별 재료의 일치 여부에 따라 메뉴를 추천하는 DB Schema 및 프로세스 공동설계",
        "JWT 방식의 권한 인증과 토큰 관리",
        "회원가입/로그인/로그아웃 구현",
        "AWS/ RDS와 EC2를 통한 서버 및 DB 구축과 배포"
      ]
    },
    blog: {
      title: "React 그리고 Team, Team Leader?? — 냉장고 관리 웹앱 Foodo",
      uri:
        "https://medium.com/59inu/%EC%B2%AB-%EB%B2%88%EC%A7%B8-project-%ED%9A%8C%EA%B3%A0-888f390e31d5"
    },
    img: [
      {
        source: require("./Assets/image/foodo/foodo.png"),
        txt: "냉장고 열지 않고 냉장고 속을 파악하기"
      },
      {
        source: require("./Assets/image/foodo/new.png"),
        txt:
          "새로운 식재료를 등록할 수 있습니다. 자동 완성 기능을 통해 서버에 등록된 식재료의 이름을 쉽게 검색할 수 있습니다."
      },
      {
        source: require("./Assets/image/foodo/list.png"),
        txt:
          "식재료 재고 현황의 목록을 확인하고 남은 수량을 수정할 수 있습니다."
      },
      {
        source: require("./Assets/image/foodo/chart.png"),
        txt: "현재 재고의 양과 신선도를 차트로 한 눈에 파악할 수 있습니다."
      },
      {
        source: require("./Assets/image/foodo/recipe.png"),
        txt:
          "현재 유저의 재고를 바탕으로 재료가 일치하는 메뉴를 추천하여, 해당 메뉴의 레시피 영상을 보여줍니다."
      }
    ]
  }
};
