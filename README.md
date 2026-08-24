# 당근마켓 소개 페이지 클론 (학습용)

HTML·CSS를 익히기 위해 만든 **비공식 연습 프로젝트**입니다.
중고거래 플랫폼 소개 페이지를 주제로, 빌드 도구나 프레임워크 없이 정적 파일만으로 만들었습니다.

> ⚠️ **면책 고지**
> 이 저장소는 학습 목적의 클론 코딩 결과물이며, **실제 당근마켓 서비스와 아무런 관련이 없습니다.**
> 주식회사 당근마켓의 상표와 브랜드에 대한 권리는 해당 회사에 있습니다.
> 페이지에 적힌 정책은 공개된 공식 자료를 참고했지만, 정확한 내용은 항상 공식 채널에서 확인하세요.
> 모든 페이지에 `robots: noindex` 를 넣어 검색 노출을 막아두었습니다.

## 실행 방법

배포된 페이지: <https://miji111.github.io/danggeun-market-clone/>

빌드 과정이 없습니다. `index.html` 을 브라우저로 열면 끝입니다.

```bash
# 또는 로컬 서버로 (파이썬이 있다면)
python -m http.server 8000
# http://localhost:8000 접속
```

## 파일 구조

```
index.html        소개 페이지 (히어로 · 안심거래 · 거래방법 · 수수료 · FAQ)
terms.html        이용약관        ← 학습용 예시 문안
privacy.html      개인정보처리방침 ← 학습용 예시 문안
prohibited.html   거래 금지 물품   ← 공식 자료 기반
style.css         공통 스타일
main.js           모바일 메뉴 토글 (이 프로젝트의 유일한 JS)
favicon.svg       탭 아이콘
og-image.png      공유 미리보기 이미지 (1200×630)
```

`terms.html` 과 `privacy.html` 은 **실제 약관이 아닙니다.** 국내 플랫폼 약관의 일반적인 조문
구조와 개인정보 보호법이 요구하는 기재 항목을 익히기 위해 작성한 예시이며, 법적 효력이 없습니다.

## 연습한 내용

| 주제 | 어디에 |
|---|---|
| CSS 변수로 디자인 토큰 관리 | `style.css` 최상단 `:root` |
| 다크 모드 (`prefers-color-scheme`) | 색 변수만 재정의 |
| 색 대비 확보 | 배경용 `--brand` 와 글자용 `--brand-ink` 를 분리 |
| 미디어 쿼리 없는 반응형 | `repeat(auto-fit, minmax(...))` |
| 가변 타이포그래피 | `clamp()` |
| JS 없는 아코디언 | `<details>` / `<summary>` |
| 고정 헤더와 앵커 이동 | `scroll-margin-top` |
| 접근성 | `aria-expanded`, `:focus-visible`, `prefers-reduced-motion` |
| 공유 카드 | Open Graph 메타 태그 |

## 정책 출처

페이지에 적은 수수료·보상·금지품목 내용의 근거입니다.

- [안심결제 안내](https://link.daangnpay.com/) — 이용료 3.3%(구매자 부담), 판매자 수수료 0원
- [안심결제 보상제도 도입](https://about.daangn.com/company/pr/archive/%EB%8B%B9%EA%B7%BC%ED%8E%98%EC%9D%B4-%EC%A4%91%EA%B3%A0%EA%B1%B0%EB%9E%98-%EC%95%88%EC%8B%AC%EA%B2%B0%EC%A0%9C-%EB%B3%B4%EC%83%81%EC%A0%9C%EB%8F%84-%EB%8F%84%EC%9E%85/) — 최대 195만 원, 구매확정일 15일 이내 접수
- [바로구매 기능 도입](https://about.daangn.com/company/pr/archive/%EB%8B%B9%EA%B7%BC-%EC%A4%91%EA%B3%A0%EA%B1%B0%EB%9E%98-%EB%B0%94%EB%A1%9C%EA%B5%AC%EB%A7%A4-%EA%B8%B0%EB%8A%A5-%EB%8F%84%EC%9E%85/) — 판매자 수수료 0원, 택배비 구매자 부담
- [거래 금지 물품 가이드라인](https://about.daangn.com/company/pr/archive/%EB%8B%B9%EA%B7%BC-%EC%A4%91%EA%B3%A0%EA%B1%B0%EB%9E%98-%EA%B8%88%EC%A7%80-%EB%AC%BC%ED%92%88-%EA%B0%80%EC%9D%B4%EB%93%9C%EB%9D%BC%EC%9D%B8-%EA%B0%95%ED%99%94/) — 4대 분류와 예외
- [2025년 연간 실적 발표](https://about.daangn.com/company/pr/archive/%EB%8B%B9%EA%B7%BC-2025%EB%85%84-%EC%97%B0%EA%B0%84-%EC%8B%A4%EC%A0%81-%EB%B0%9C%ED%91%9C/) — MAU 2,100만, 중고거래 연결 1억 9,000만 건

## 아직 안 한 것

- 매물 썸네일이 이모지 (실제 이미지로 교체 필요)
- "앱 다운로드" 버튼이 페이지 내부 이동 (실제 스토어 링크 없음)

- 검색 결과, 매물 상세 등 실제 기능 페이지 없음
