"use client";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import SectionHead from "./SectionHead";
import { BRAND_FACTS, DISCLAIMER } from "@/data/site";

export default function BrandTown() {
  const wrap = useRef<HTMLDivElement>(null);
  const img = useRef<HTMLImageElement>(null);
  const reduce = useReducedMotion();
  const [dist, setDist] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (!img.current) return;
      setDist(Math.max(0, img.current.getBoundingClientRect().width - window.innerWidth));
    };
    measure();
    const el = img.current;
    el?.addEventListener("load", measure);
    window.addEventListener("resize", measure);
    return () => {
      el?.removeEventListener("load", measure);
      window.removeEventListener("resize", measure);
    };
  }, []);

  const { scrollYProgress } = useScroll({ target: wrap, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], [0, -dist]);

  return (
    <section id="brand" className="bg-navy text-pearl">
      <div className="container-site pb-12 pt-24 md:pb-16 md:pt-36">
        <div className="grid gap-10 md:grid-cols-12">
          <SectionHead
            dark
            className="md:col-span-6"
            over="Brand Town"
            title={"1만 3천여 세대,\n미니신도시급 시티오씨엘"}
            desc="주거·상업·업무·공원이 하나의 생활권으로 이어지는 용현·학익 도시개발구역. 그 안에서 가장 큰 단지가 9단지입니다."
          />
          <dl className="grid grid-cols-2 gap-x-6 gap-y-8 self-end md:col-span-5 md:col-start-8">
            {BRAND_FACTS.map((f) => (
              <div key={f.k} className="border-t border-pearl/20 pt-4">
                <dt className="text-xs text-greige-300">{f.k}</dt>
                <dd className="mt-2 text-[15px] font-semibold leading-snug md:text-base">{f.v}</dd>
                {f.s && <dd className="mt-1 text-xs text-pearl/55">{f.s}</dd>}
              </div>
            ))}
          </dl>
        </div>
      </div>

      {reduce ? (
        <div className="overflow-x-auto pb-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/render/panorama-m.webp" alt="시티오씨엘 9단지 와이드 투시도" className="h-[60vh] w-auto max-w-none" />
        </div>
      ) : (
        <div ref={wrap} className="relative h-[220vh] md:h-[260vh]">
          <div className="sticky top-0 flex h-[100svh] items-center overflow-hidden">
            <motion.div style={{ x }} className="will-change-transform">
              <picture>
                <source media="(max-width: 767px)" srcSet="/images/render/panorama-m.webp" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  ref={img}
                  src="/images/render/panorama.webp"
                  alt="시티오씨엘 9단지 와이드 투시도"
                  width={5622}
                  height={1200}
                  loading="lazy"
                  className="h-[62svh] w-auto max-w-none md:h-[78svh]"
                />
              </picture>
            </motion.div>
            <p className="absolute bottom-6 left-0 right-0 container-site text-[10px] text-pearl/45 md:text-[11px]">{DISCLAIMER.cg}</p>
          </div>
        </div>
      )}
    </section>
  );
}
