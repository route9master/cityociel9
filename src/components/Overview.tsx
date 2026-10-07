import CountUp from "./CountUp";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { DISCLAIMER, OVERVIEW_ROWS, STATS, SUPPLY } from "@/data/site";

const total = SUPPLY.reduce((a, b) => a + b.units, 0);
// 84A·84B 주력 타입은 진하게, 나머지는 단계적으로
const tone = (t: string) =>
  t.startsWith("84") ? "bg-navy" : ["59", "75"].includes(t) ? "bg-navy-600" : "bg-greige";

export default function Overview() {
  return (
    <section id="overview" className="bg-pearl py-24 md:py-36">
      <div className="container-site grid gap-14 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-4">
          <SectionHead
            over="Overview"
            title={"시티오씨엘\n단일 최대 규모"}
            desc="용현·학익 도시개발구역 공동3BL. 지하 2층부터 지상 최고 49층까지, 9개동 총 1,949세대로 계획되었습니다."
          />
          <Reveal delay={0.1} className="mt-10 hidden md:block">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/brand/logo-lockup-navy.png"
              alt="CITY O CIEL 시티오씨엘 9단지 오션파크뷰"
              width={685}
              height={262}
              loading="lazy"
              className="w-[220px]"
            />
          </Reveal>
        </div>

        <Reveal className="md:col-span-7 md:col-start-6" delay={0.05}>
          <table className="w-full border-t border-navy text-left">
            <caption className="sr-only">사업개요</caption>
            <tbody>
              {OVERVIEW_ROWS.map(([k, v]) => (
                <tr key={k} className="border-b border-line">
                  <th scope="row" className="w-[96px] py-4 pr-4 align-top text-[13px] font-medium text-greige md:w-[140px] md:py-5 md:text-sm">
                    {k}
                  </th>
                  <td className="py-4 text-[14px] leading-relaxed text-navy md:py-5 md:text-[15px]">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="note mt-4">{DISCLAIMER.area}</p>
        </Reveal>
      </div>

      <div className="container-site mt-20 md:mt-28">
        <dl className="grid grid-cols-2 border-t border-line md:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06} className="border-b border-line py-7 pr-4 md:border-b-0 md:py-9 md:pl-8 md:first:pl-0 md:[&:not(:first-child)]:border-l">
              <dt className="text-[13px] text-greige">{s.label}</dt>
              <dd className="mt-3 flex items-baseline gap-1">
                <span className="text-[38px] font-semibold leading-none tracking-tightest text-navy md:text-[56px]">
                  <CountUp value={s.value} decimals={s.decimals} />
                </span>
                <span className="text-sm text-navy/70 md:text-base">{s.unit}</span>
              </dd>
            </Reveal>
          ))}
        </dl>

        <Reveal className="mt-16 md:mt-20">
          <div className="flex items-baseline justify-between">
            <p className="text-sm font-semibold text-navy">타입별 공급 구성</p>
            <p className="num text-xs text-greige">총 {total.toLocaleString()}세대</p>
          </div>
          <div className="mt-4 flex h-3 w-full gap-px" role="img" aria-label="타입별 세대수 비율">
            {SUPPLY.map((s) => (
              <div key={s.type} className={tone(s.type)} style={{ width: `${(s.units / total) * 100}%`, minWidth: 3 }} />
            ))}
          </div>
          <ul className="mt-5 grid grid-cols-5 gap-y-3 text-[12px] md:grid-cols-10">
            {SUPPLY.map((s) => (
              <li key={s.type} className="flex flex-col">
                <span className="font-semibold text-navy">{s.type}</span>
                <span className="num text-greige">{s.units.toLocaleString()}세대</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
