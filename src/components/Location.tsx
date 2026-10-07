import Picture from "./Picture";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { DISCLAIMER, LOCATION } from "@/data/site";

export default function Location() {
  return (
    <section id="location" className="bg-pearl-50 py-24 md:py-36">
      <div className="container-site">
        <div className="grid gap-10 md:grid-cols-12">
          <SectionHead
            className="md:col-span-5"
            over="Location"
            title={"인천 서남권,\n완성되는 생활의 중심"}
            desc="광역 교통망과 도보권 학교, 약 10만 평 그랜드파크(예정)까지. 단지에서 걸어서 닿는 거리 위주로 정리했습니다."
          />
        </div>

        <Reveal className="mt-14 md:mt-20">
          <figure>
            <Picture
              src="/images/render/perspective-street.webp"
              mobile="/images/render/perspective-street-m.webp"
              alt="시티오씨엘 9단지 투시도 (가로변)"
              width={1920}
              height={1080}
              className="aspect-[16/9] w-full object-cover object-[50%_70%] md:aspect-[21/9]"
            />
            <figcaption className="note mt-3">
              {DISCLAIMER.cg}
            </figcaption>
          </figure>
        </Reveal>

        <ol className="mt-4 md:mt-8">
          {LOCATION.map((l, i) => (
            <li key={l.no} className="border-b border-line py-10 md:grid md:grid-cols-12 md:gap-10 md:py-14">
              <Reveal className="md:col-span-4" delay={i * 0.04}>
                <div className="flex items-baseline gap-5">
                  <span className="num text-[44px] font-light leading-none text-amber md:text-[64px]">{l.no}</span>
                  <div>
                    <h3 className="text-xl font-semibold tracking-tightest text-navy md:text-2xl">{l.title}</h3>
                    <p className="mt-1 text-sm text-greige">{l.lead}</p>
                  </div>
                </div>
              </Reveal>
              <Reveal className="mt-6 md:col-span-7 md:col-start-6 md:mt-0" delay={0.08 + i * 0.04}>
                <ul className="divide-y divide-line border-t border-navy/80">
                  {l.items.map((t) => (
                    <li key={t} className="py-3.5 text-[15px] leading-relaxed text-navy md:text-base">
                      {t}
                    </li>
                  ))}
                </ul>
                <p className="note mt-3 flex gap-2">
                  <span className="shrink-0 border border-greige/50 px-1.5 py-px text-[10px] leading-4 text-greige">출처·예정</span>
                  {l.note}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>
        <p className="note mt-6">{DISCLAIMER.plan}</p>
      </div>
    </section>
  );
}
