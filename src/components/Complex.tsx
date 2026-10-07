"use client";
import { useState } from "react";
import Lightbox, { type LightboxItem } from "./Lightbox";
import Picture from "./Picture";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { DISCLAIMER, GALLERY } from "@/data/site";

const ITEMS: LightboxItem[] = [
  { src: "/images/site/siteplan.webp", alt: "시티오씨엘 9단지 단지배치도", caption: "단지배치도" },
  ...GALLERY.map((g) => ({ src: g.src, alt: g.alt, caption: g.alt.replace("시티오씨엘 9단지 ", "") })),
];

function ZoomIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden>
      <path d="M1 6V1h5M10 1h5v5M15 10v5h-5M6 15H1v-5" stroke="currentColor" strokeWidth="1.3" fill="none" />
    </svg>
  );
}

export default function Complex() {
  const [idx, setIdx] = useState<number | null>(null);

  return (
    <section id="complex" className="bg-pearl-50 py-24 md:py-36">
      <div className="container-site">
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <SectionHead
            className="md:col-span-6"
            over="Site Plan"
            title={"9개동 사이로 열린\n공원형 단지"}
            desc="건폐율 7.87%(부대시설 제외). 동과 동 사이를 산책로와 정원, 놀이터, 커뮤니티 가든으로 채웠습니다."
          />
        </div>

        <Reveal className="mt-12 md:mt-16">
          <button
            type="button"
            onClick={() => setIdx(0)}
            className="group relative block w-full overflow-hidden text-left"
            aria-label="단지배치도 크게 보기"
          >
            <Picture
              src="/images/site/siteplan.webp"
              alt="시티오씨엘 9단지 단지배치도"
              width={2167}
              height={1428}
              className="w-full transition-transform duration-700 group-hover:scale-[1.015]"
            />
            <span className="absolute right-3 top-3 flex items-center gap-2 bg-navy px-3 py-2 text-xs font-medium text-pearl md:right-5 md:top-5">
              <ZoomIcon /> 크게 보기
            </span>
          </button>
          <p className="note mt-3">{DISCLAIMER.cg}</p>
        </Reveal>

        <div className="mt-16 grid gap-3 md:mt-24 md:grid-cols-12 md:gap-4">
          {GALLERY.map((g, i) => {
            const layout = [
              "md:col-span-7 aspect-[16/9] md:aspect-[4/3]",
              "md:col-span-5 aspect-[16/9] md:aspect-auto",
              "md:col-span-12 aspect-[16/9] md:aspect-[21/8]",
            ][i];
            return (
              <Reveal key={g.src} delay={(i % 2) * 0.06} className={`${layout} relative`}>
                <button
                  type="button"
                  onClick={() => setIdx(i + 1)}
                  className="group relative block h-full w-full overflow-hidden"
                  aria-label={`${g.alt} 크게 보기`}
                >
                  <Picture
                    src={g.src}
                    mobile={g.m}
                    alt={g.alt}
                    width={g.w}
                    height={g.h}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <span className="absolute bottom-0 left-0 bg-navy/85 px-3 py-2 text-[11px] text-pearl">
                    {g.alt.replace("시티오씨엘 9단지 ", "")}
                  </span>
                </button>
              </Reveal>
            );
          })}
        </div>
        <p className="note mt-3">
          {DISCLAIMER.cg} {DISCLAIMER.view}
        </p>
      </div>

      <Lightbox items={ITEMS} index={idx} onClose={() => setIdx(null)} />
    </section>
  );
}
