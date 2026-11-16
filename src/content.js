// ===== 여기 한 곳만 바꾸면 6개 배너 전부 반영됩니다 =====
window.BANNER_CONTENT = {
  offer: "[회원 특가 내용 입력]"   // 예: 할인율·금액·업무 범위 확정 후 교체
};
// 페이지 안의 [data-slot="offer"] 요소에 자동 주입
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('[data-slot="offer"]').forEach(function (el) {
    el.textContent = window.BANNER_CONTENT.offer;
  });
});
