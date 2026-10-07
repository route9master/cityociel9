import Picture from "./Picture";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { DISCLAIMER, PREMIUM } from "@/data/site";

export default function Premium() {
  return (
    <section id="premium" className="bg-pearl py-24 md:py-36">
      <div className="container-site grid gap-14 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-5">
          <div className="md:sticky md:top-28">
            <SectionHead over="Premium 7" title={"차이를 넘어,\n차원이 다른 일곱 가지"} />
            <Reveal delay={0.1} className="mt-10">
              <figure>
                <Picture
                  src="/images/render/aerial-axis.webp"
                  mobile="/images/render/aerial-axis-m.webp"
                  alt="시티오씨엘 9단지 통경축 조감도"
                  width={1600}
                  height={2286}
                  className="aspect-[4/5] w-full object-cover object-[50%_60%] md:aspect-[4/5]"
                />
                <figcaption className="note mt-3">{DISCLAIMER.cg}</figcaption>
              </figure>
            </Reveal>
          </div>
        </div>

        <ol className="md:col-span-6 md:col-start-7">
          {PREMIUM.map((p, i) => (
            <li key={p.no} className="border-t border-line first:border-navy">
              <Reveal delay={i * 0.03} className="grid grid-cols-[56px_1fr] gap-x-4 py-8 md:grid-cols-[88px_1fr] md:py-11">
                <span className="num pt-1 text-[13px] font-medium tracking-[0.2em] text-amber">{p.no}</span>
                <div>
                  <h3 className="text-[20px] font-semibold leading-snug tracking-tightest text-navy md:text-[26px]">{p.title}</h3>
                  <p className="mt-3 max-w-[30rem] text-[15px] leading-[1.75] text-navy/70">{p.desc}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
