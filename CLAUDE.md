# 시티오씨엘 9단지 분양 홈페이지

Next.js 14 (App Router) · TypeScript · Tailwind 3 · framer-motion · Pretendard(서브셋). 정적 페이지, 백엔드 없음.

## 구조
- `src/data/site.ts` — 모든 문구·수치·연락처의 단일 출처. 문구 수정은 여기서만.
- `src/components/*` — 섹션별 컴포넌트 (Hero → Overview → BrandTown → Location → Premium → Complex → Community → FloorPlans → Contact → Footer, MobileBar)
- `src/lib/sms.ts` — SMS 스킴. iOS `&body=` / Android `?body=` 분기
- `docs/CONTENT.md` — 원본 자료에서 정리한 콘텐츠 기준서 / `docs/palette.png` — 팔레트
- `public/images/*` — 사전 최적화된 webp (Vercel 이미지 최적화 미사용, `<picture>`로 모바일 분기)
- `public/fonts/*` — Pretendard 4종 서브셋(각 ~44KB)

## 반드시 지킬 것
- 표시광고법: 개통·개교 연도 표기 금지, 시세·분양가·타 단지 비교 금지, 계획 시설은 "(예정)/(계획)", 조망 문구에는 "(일부세대)"
- 분양가·납부조건·견본주택 주소·공식 대표번호(032)·공식 홈페이지 노출 금지. 대표번호는 1800-7159만.
- SMS 수신번호는 `SITE.smsParts` 배열로만 보관 — 소스·DOM 어디에도 연속 문자열 금지
- 디자인 토큰: navy #141A33 / pearl #F3F1EC / greige #8C7F77 / amber #C08A55(선·숫자만, 면 채움 금지). radius ≤ 4px, 그림자 없음, 아이콘 카드 그리드 금지
- 한글 줄바꿈: `word-break: keep-all` 전역 적용됨

## 남은 TODO
- 분양대행사 정보: `src/data/site.ts`의 `AGENCY` (상호·대표·사업자번호·주소·보유기간). 비어 있으면 푸터에서 해당 줄 자동 생략
- 푸터: 북오산자이 드포레(G-139 방식) 푸터 구조와 맞추기 → `C:\projects\bukosan-xi-deforet` 참고
- 공식 로고/CI 파일 수급 시 `public/images/brand/` 같은 파일명으로 교체

## 문구 수정 후 새 한글이 생기면 폰트 서브셋 다시 만들기
```powershell
npm pack pretendard@1.3.9; tar -xzf pretendard-1.3.9.tgz
pip install fonttools brotli
python scripts/subset-fonts.py package/dist/web/static/woff2
Remove-Item -Recurse -Force package, pretendard-1.3.9.tgz
```

## 작업 규칙
- 작업 단위마다 `git add . ; git commit` → `vercel --prod`
- rollback 전 반드시 `git status` / `git log` 확인
