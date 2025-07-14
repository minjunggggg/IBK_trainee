const pathMap = {
  "HP_CSCETR_INDEX.html": "고객지원 전체보기",
  "HP_CSCETR_FAQ.html": "자주묻는 질문",
  "HP_CSCETR_TERM_BEF.html": "용어사전",
  // 필요시 계속 추가
};

const currentPath = window.location.pathname;
const fileName = currentPath.substring(currentPath.lastIndexOf("/") + 1);

const newTitle = pathMap[fileName];

if (newTitle) {
  const menuBtn = document.getElementById("menuTitleBtn");
  menuBtn.childNodes.forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      node.nodeValue = newTitle + " "; // 공백으로 아이콘 밀리지 않게
    }
  });
}
