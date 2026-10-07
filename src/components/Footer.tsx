import { AGENCY, DISCLAIMER, SITE } from "@/data/site";

// 북오산자이 드포레(G-139 방식) 푸터 구조: 로고 → 대표번호 → 정보 리스트 → 구분선 → 고지 → 방침·저작권
export default function Footer() {
  const agencyLine = [
    AGENCY.name && `분양대행 ${AGENCY.name}`,
    AGENCY.ceo && `대표 ${AGENCY.ceo}`,
    AGENCY.bizNo && `사업자등록번호 ${AGENCY.bizNo}`,
    AGENCY.address,
  ].filter(Boolean);

  return (
    <footer className="bg-navy pb-28 pt-20 text-pearl/70 md:pb-32 md:pt-32">
      <div className="container-site">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/brand/logo-lockup-white.png"
          alt="CITY O CIEL 시티오씨엘 9단지 오션파크뷰"
          width={1033}
          height={372}
          loading="lazy"
          className="w-[150px] opacity-90"
        />

        <a href={SITE.telHref} className="num mt-6 block text-[28px] font-semibold text-pearl">
          {SITE.tel}
        </a>

        <div className="mt-6 text-[14px]" style={{ lineHeight: 1.9 }}>
          <p>사업명 : {SITE.officialName}</p>
          <p>시공 : HDC현대산업개발 · 현대건설 · 포스코이앤씨</p>
          <p>위탁(수탁) : 코리아신탁(주)</p>
          <p>분양 문의 : {SITE.tel}</p>
          {agencyLine.length > 0 && <p>{agencyLine.join("  |  ")}</p>}
        </div>

        <hr className="my-8 border-0" style={{ height: 1, backgroundColor: "rgba(243,241,236,0.15)" }} />

        <p className="text-[13px] leading-[1.7] text-pearl/50">{DISCLAIMER.site}</p>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 text-[13px]">
          <a href="/privacy" className="font-semibold text-pearl/80 hover:text-pearl">
            개인정보처리방침
          </a>
          <p className="text-pearl/40">© {SITE.officialName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
