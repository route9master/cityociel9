import Picture from "./Picture";
import { DISCLAIMER, SITE } from "@/data/site";

const HERO_STATS = [
  { k: "최고", v: "49", u: "층" },
  { k: "", v: "9", u: "개동" },
  { k: "총", v: "1,949", u: "세대" },
];

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] flex-col overflow-hidden bg-navy text-pearl">
      <div className="absolute inset-0">
        <Picture
          src="/images/render/aerial-dusk.webp"
          mobile="/images/render/aerial-dusk-m.webp"
          alt="시티오씨엘 9단지 조감도 (저녁)"
          width={2560}
          height={1280}
          priority
          className="h-full w-full object-cover object-[58%_50%] animate-[heroZoom_14s_ease-out_forwards]"
        />
        {/* 텍스트 가독성용 포토 스크림 (장식 아님) */}
        <div className="absolute inset-0 bg-navy/30" aria-hidden />
        <div
          className="absolute inset-x-0 bottom-0 h-[70%]"
          style={{ background: "linear-gradient(to top, rgba(20,26,51,.82), rgba(20,26,51,0))" }}
          aria-hidden
        />
      </div>

      <div className="container-site relative z-10 mt-auto pb-24 pt-32 md:pb-20">
        <p className="overline flex items-center gap-3 text-pearl/75">
          <span className="inline-block h-px w-8 bg-amber" aria-hidden />
          ABOVE PRIDES
        </p>
        <h1 className="mt-6 text-[40px] font-semibold leading-[1.15] tracking-tightest sm:text-[56px] md:text-[76px]">
          시티오씨엘,
          <br />
          마침내 정점.
        </h1>
        <p className="mt-5 text-base font-light text-pearl/80 md:text-xl">차이를 넘어, 차원이 다른.</p>

        <dl className="mt-10 flex max-w-xl items-stretch divide-x divide-pearl/25 border-y border-pearl/25">
          {HERO_STATS.map((s) => (
            <div key={s.u} className="flex-1 py-4 pl-4 first:pl-0 md:py-5 md:pl-6">
              <dt className="sr-only">{s.u}</dt>
              <dd className="flex items-baseline gap-1">
                {s.k && <span className="text-xs text-pearl/60 md:text-sm">{s.k}</span>}
                <span className="num text-2xl font-semibold md:text-[34px]">{s.v}</span>
                <span className="text-xs text-pearl/70 md:text-sm">{s.u}</span>
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-8 hidden gap-3 md:flex">
          <a
            href="#contact"
            className="inline-flex h-[52px] items-center bg-pearl px-8 text-[15px] font-semibold text-navy transition-colors hover:bg-white"
          >
            분양 상담 신청
          </a>
          <a
            href={SITE.telHref}
            className="num inline-flex h-[52px] items-center border border-pearl/50 px-8 text-[15px] font-semibold text-pearl transition-colors hover:border-pearl"
          >
            {SITE.tel}
          </a>
        </div>
      </div>

      <p className="relative z-10 container-site pb-20 text-[10px] leading-relaxed text-pearl/50 md:pb-5 md:text-[11px]">
        {DISCLAIMER.cg}
      </p>
    </section>
  );
}
