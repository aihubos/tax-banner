// ===== 배너 문구 =====
// offer: 시안 A·B·C / 컬러 3종 플레이스홀더. 확정 전까지 이 값을 유지합니다.
// benefit: 보라 3종에 반영한 확정 문구(해당 HTML에는 직접 넣었습니다).
window.BANNER_CONTENT = {
  offer: "[회원 특가 내용 입력]",
  benefit: "AI빌더스랩 회원 첫 세무상담 무료"
};
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('[data-slot="offer"]').forEach(function (el) {
    el.textContent = window.BANNER_CONTENT.offer;
  });
  document.querySelectorAll('[data-slot="benefit"]').forEach(function (el) {
    el.textContent = window.BANNER_CONTENT.benefit;
  });
});
