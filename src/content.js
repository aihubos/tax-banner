// ===== 여기 한 곳만 바꾸면 시안 C(원안·컬러 3종) 특가 문구가 반영됩니다 =====
// 시안 A·B는 별도의 [data-slot="offer"] 플레이스홀더를 유지합니다.
window.BANNER_CONTENT = {
  label: "AI빌더스랩 회원 전용",
  main: "월 기장료 10% 할인",
  note: "(최소 1만원 적용)"
};
document.addEventListener("DOMContentLoaded", function () {
  var c = window.BANNER_CONTENT;
  document.querySelectorAll('[data-slot="offer-label"]').forEach(function (el) {
    el.textContent = c.label;
  });
  document.querySelectorAll('[data-slot="offer-main"]').forEach(function (el) {
    el.innerHTML = c.main.replace(/(\d+%)/g, "<em>$1</em>");
  });
  document.querySelectorAll('[data-slot="offer-note"]').forEach(function (el) {
    el.textContent = c.note;
  });
});
