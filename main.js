/* ============================================================
   모바일 메뉴 토글
   이 사이트에서 JavaScript가 필요한 유일한 부분입니다.

   CSS만으로도 만들 수 있지만(숨긴 체크박스 + :checked 트릭), 그 방법은
   화면 낭독기(스크린리더)에 '열림/닫힘' 상태를 알려주지 못합니다.
   그래서 여기서는 JS로 aria-expanded 를 직접 바꿔줍니다.
   ============================================================ */

const navToggle = document.querySelector('.nav-toggle');
const siteNav   = document.querySelector('#site-nav');

// 두 요소가 없는 페이지에서도 오류가 나지 않도록 먼저 확인합니다.
if (navToggle && siteNav) {

  // 열림 상태를 두 곳에 동시에 반영합니다.
  // · aria-expanded : 화면 낭독기에게 알리는 용도 (+ 아이콘 전환에도 사용)
  // · data-open     : CSS가 메뉴를 보여줄지 판단하는 용도
  function setNavOpen(open) {
    navToggle.setAttribute('aria-expanded', String(open));
    navToggle.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
    siteNav.dataset.open = String(open);
  }

  navToggle.addEventListener('click', () => {
    setNavOpen(navToggle.getAttribute('aria-expanded') !== 'true');
  });

  // 메뉴에서 항목을 고르면 알아서 닫히도록
  siteNav.addEventListener('click', (event) => {
    if (event.target.closest('a')) setNavOpen(false);
  });

  // Esc 키로 닫기
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setNavOpen(false);
  });

  // 창을 넓혀 데스크톱 레이아웃이 되면, 열려 있던 상태를 정리합니다.
  window.matchMedia('(min-width: 721px)').addEventListener('change', (event) => {
    if (event.matches) setNavOpen(false);
  });
}
