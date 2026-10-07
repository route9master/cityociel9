"use client";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useRef, useState } from "react";
import Lightbox from "./Lightbox";
import SectionHead from "./SectionHead";
import { PLANS, PLAN_NOTES } from "@/data/site";

const py = (m: number) => (m * 0.3025).toFixed(2);
const m2 = (m: number) => m.toFixed(4);

export default function FloorPlans() {
  const [active, setActive] = useState(2); // 84A 기본 노출 (주력 타입)
  const [ext, setExt] = useState(true);
  const [zoom, setZoom] = useState<number | null>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const p = PLANS[active];
  const src = `/images/plans/${p.id}-${ext ? "ext" : "basic"}.webp`;

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const n = (active + (e.key === "ArrowRight" ? 1 : -1) + PLANS.length) % PLANS.length;
    setActive(n);
    (tabsRef.current?.querySelectorAll("button")[n] as HTMLButtonElement | undefined)?.focus();
  };

  const rows: [string, number][] = [
    ["전용면적", p.exclusive],
    ["주거공용면적", p.residentialCommon],
    ["공급면적", p.supply],
    ["기타공용면적", p.otherCommon],
    ["계약면적", p.contract],
  ];

  return (
    <section id="plans" className="bg-pearl-50 py-24 md:py-36">
      <div className="container-site">
        <SectionHead
          over="Floor Plan"
          title={"전용 59㎡부터\n136㎡ 펜트하우스까지"}
          desc="10개 타입. 타입을 고르고 기본형과 확장형을 비교해 보세요."
        />

        <div
          ref={tabsRef}
          role="tablist"
          aria-label="평면 타입"
          onKeyDown={onKey}
          className="-mx-5 mt-12 flex overflow-x-auto border-b border-line px-5 md:mx-0 md:mt-16 md:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {PLANS.map((t, i) => (
            <button
              key={t.id}
              role="tab"
              type="button"
              aria-selected={i === active}
              tabIndex={i === active ? 0 : -1}
              onClick={() => setActive(i)}
              className={`relative shrink-0 px-4 pb-4 pt-2 text-[15px] font-semibold transition-colors md:px-6 md:text-base ${
                i === active ? "text-navy" : "text-greige hover:text-navy"
              }`}
            >
              {t.label}
              {i === active && <span className="absolute inset-x-3 -bottom-px h-[2px] bg-navy md:inset-x-5" aria-hidden />}
            </button>
          ))}
        </div>

        <div role="tabpanel" aria-label={`${p.label}㎡ 타입`} className="mt-10 grid gap-10 md:mt-14 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-7">
            <div className="inline-flex border border-navy" role="group" aria-label="평면 구분">
              {[
                { v: false, l: "기본형" },
                { v: true, l: "확장형(별도계약)" },
              ].map((o) => (
                <button
                  key={o.l}
                  type="button"
                  aria-pressed={ext === o.v}
                  onClick={() => setExt(o.v)}
                  className={`h-9 px-4 text-[13px] font-medium transition-colors ${
                    ext === o.v ? "bg-navy text-pearl" : "text-navy hover:bg-navy/5"
                  }`}
                >
                  {o.l}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setZoom(0)}
              className="relative mt-6 flex aspect-[4/3] w-full items-center justify-center bg-pearl p-4 md:p-8"
              aria-label={`${p.label} ${ext ? "확장형" : "기본형"} 평면도 크게 보기`}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={src}
                  src={src}
                  alt={`${p.label}㎡ ${ext ? "확장형" : "기본형"} 평면도`}
                  initial={reduce ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={reduce ? undefined : { opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="max-h-full max-w-full object-contain"
                />
              </AnimatePresence>
              <span className="absolute bottom-3 right-3 text-[11px] text-greige">클릭하여 확대</span>
            </button>
          </div>

          <div className="md:col-span-4 md:col-start-9">
            <p className="overline">Type</p>
            <p className="mt-2 flex items-baseline gap-2">
              <span className="num text-[56px] font-semibold leading-none tracking-tightest text-navy md:text-[72px]">{p.label}</span>
              <span className="text-lg text-navy/60">㎡</span>
            </p>
            <p className="num mt-3 text-sm text-greige">{p.units.toLocaleString()}세대</p>

            <table className="mt-8 w-full border-t border-navy text-[14px]">
              <caption className="sr-only">{p.label}㎡ 면적표 (㎡ / 평)</caption>
              <tbody>
                {rows.map(([k, v]) => (
                  <tr key={k} className="border-b border-line">
                    <th scope="row" className="py-3 text-left font-normal text-greige">
                      {k}
                    </th>
                    <td className="num py-3 text-right text-navy">
                      {m2(v)}㎡ <span className="ml-1 text-greige">({py(v)}평)</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <ul className="mt-8 space-y-2.5">
              {p.points.map((t) => (
                <li key={t} className="flex gap-3 text-[15px] text-navy">
                  <span className="mt-[10px] h-px w-3 shrink-0 bg-amber" aria-hidden />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 space-y-1">
          {PLAN_NOTES.map((n) => (
            <p key={n} className="note">
              {n}
            </p>
          ))}
        </div>
      </div>

      <Lightbox
        items={[{ src, alt: `${p.label}㎡ ${ext ? "확장형" : "기본형"} 평면도`, caption: `${p.label}㎡ ${ext ? "확장형(별도계약)" : "기본형"}`, light: true }]}
        index={zoom}
        onClose={() => setZoom(null)}
      />
    </section>
  );
}
