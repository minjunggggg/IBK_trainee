// 클릭한 탭 css 표시
function onClickFaqTab(clickedEl) {
  // 모든 탭에서 .on 제거
  document.querySelectorAll(".t_btn").forEach((btn) => {
    btn.classList.remove("on");
    btn.setAttribute("aria-expanded", "false");
  });

  // 클릭한 탭만 .on 추가
  clickedEl.classList.add("on");
  clickedEl.setAttribute("aria-expanded", "true");
}
