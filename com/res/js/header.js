const supportUrls = [
  "HP_CSCETR_INDEX.html",
  "HP_CSCETR_FAQ.html",
  "HP_CSCETR_USE_PAYATT_MTT.html",
  "MOB_SMT_CNTR_NTC_INDV.html",
  "HP_CSCETR_LON_GUID_PDT_NTC.html",
  "HP_CSCETR_POSN_DOC_INS_LIST.html",
  "HP_CSCETR_CVAP_APPL.html",
  "HP_CSCERT_INDV_INF_CON_NTC.html",
  "HP_CSCETR_PERINFO_EXPOS.html",
  "HP_CSCETR_TERM_BEF.html",
  "HP_CSCETR_PROG_EVNT_LIST.html",
];

// 현재 경로에서 고객지원 LNB 메뉴에 .on 클래스 추가하여 css 표시
const isSupportPage = supportUrls.some((url) => location.href.includes(url));
if (isSupportPage) {
  const supportBtn = document.querySelector('button[type="button"][tabindex="1600"]');
  supportBtn.classList.add("on");
}
