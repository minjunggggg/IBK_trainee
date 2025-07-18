const pathMap = {
  "HP_CSCETR_INDEX.html": "고객지원 전체보기",
  "HP_CSCETR_FAQ.html": "자주묻는 질문",
  "HP_CSCETR_USE_PAYATT_MTT.html": "콜센터 이용안내",
  "MOB_SMT_CNTR_NTC_INDV.html": "모바일 스마트 창구 안내",
  "HP_CSCETR_LON_GUID_PDT_NTC.html": "보험계약대출 가이드",
  "HP_CSCETR_POSN_DOC_INS_LIST.html": "구비서류안내",
  "HP_CSCETR_CVAP_APPL.html": "소비자보호마당",
  "HP_CSCERT_INDV_INF_CON_NTC.html": "이용관련 주요법률",
  "HP_CSCETR_PERINFO_EXPOS.html": "금융사기피해예방",
  "HP_CSCETR_TERM_BEF.html": "용어사전",
  "HP_CSCETR_PROG_EVNT_LIST.html": "이벤트",
};

// 현재 경로에서 브래드크럼 메뉴명 추출
const currentPath = window.location.pathname;
const fileName = currentPath.substring(currentPath.lastIndexOf("/") + 1);

const newTitle = pathMap[fileName];

if (newTitle) {
  const menuBtn = document.getElementById("menuTitleBtn");
  for (const node of menuBtn.childNodes) {
    if (node.nodeType === Node.TEXT_NODE && node.nodeValue.trim()) {
      node.nodeValue = newTitle + " ";
      break;
    }
  }
}

// 현재 경로에서 브래드크럼 LNB 메뉴에 .on 클래스 추가하여 css 표시
document.querySelectorAll(".c_menu a").forEach((link) => {
  const linkPath = new URL(link.href, location.origin).pathname;
  const currentPath = location.pathname;

  if (linkPath === currentPath) {
    link.classList.add("on");
  }
});

// 서브메뉴 추가
// 현재 경로에 따라 서브메뉴를 추가
const subMenuKeyMap = {
  "MOB_SMT_CNTR_NTC_INDV.html": ["연금보험", "퇴직연금"],
  "HP_CSCETR_LON_GUID_PDT_NTC.html": ["상품안내", "대출계산기", "채무조정안내"],
  "HP_CSCETR_POSN_DOC_INS_LIST.html": ["연금보험", "퇴직연금"],
  "HP_CSCETR_CVAP_APPL.html": ["민원 / 칭찬ㆍ불만ㆍ의견", "민원건수 공시", "금융소비자 보호체계", "금융소비자 보호실태평가", "소비자보호 우수사례", "유익한 소비자보호 정보", "소비자 금융교육", "금융소비자의 권리"],
  "HP_CSCERT_INDV_INF_CON_NTC.html": ["개인정보 처리방침", "신용정보 활용체제", "전자금융거래약관", "위법신고", "고객권리 안내문", "영상정보처리기기 설치운영", "개인신용정보이용·제공조회"],
  "HP_CSCETR_PERINFO_EXPOS.html": ["개인정보 노출 등록/해제"],
};

// 현재 경로에서 서브메뉴 키 추출
const subMenu = subMenuKeyMap[fileName];
// 브래드크럼 ul 가져오기
const subMenuElement = document.querySelector(".c_menu > ul");

// 서브메뉴 li 생성
const newLi = document.createElement("li");
newLi.className = "off";
newLi.innerHTML = `<button type="button" aria-expanded="false">
                    ${subMenu[0]}
                    <i class="icon line xsmall arrowdown1"></i>
                  </button>
                  <ul style="display: none">
                    ${
                      subMenu
                        .map(
                          (item) => `<li>
                    <a href="#" class="off">${item}</a>
                    </li>`
                        )
                        .join("") // 자바스크립트가 배열을 문자열로 변환할 때 자동으로 쉼표로 join하는 현상을 막아줌
                    }
                  </ul>`;

// 브래드크럼 ul에 서브메뉴 li 추가
subMenuElement.appendChild(newLi);

// 클릭 이벤트에 따른 메뉴명 변경, css(class) 변경
newLi.querySelector("ul").addEventListener("click", function (e) {
  if (e.target.tagName.toLowerCase() === "a") {
    e.preventDefault(); // 링크 이동 방지

    const allLinks = newLi.querySelectorAll("a");
    allLinks.forEach((a) => a.classList.remove("on"));
    allLinks.forEach((a) => a.classList.add("off"));

    e.target.classList.add("on");
    e.target.classList.remove("off");

    // 상단 버튼 텍스트를 해당 항목으로 변경
    const button = newLi.querySelector("button");
    button.childNodes[0].nodeValue = e.target.textContent + "\n"; // 텍스트만 교체
  }
});
