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
