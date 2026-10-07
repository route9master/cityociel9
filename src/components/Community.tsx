"use client";
import { useState } from "react";
import Lightbox from "./Lightbox";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { COMMUNITY } from "@/data/site";

export default function Community() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="community" className="bg-pearl py-24 md:py-36">
      <div className="container-site">
        <SectionHead over="Community" title={COMMUNITY.title} desc={COMMUNITY.sub} />

        <div className="mt-12 grid gap-12 md:mt-16 md:grid-cols-12 md:gap-10">
          <Reveal className="md:col-span-8">
            <button
              type="button"
              onClick={() => setOpen(0)}
              className="block w-full bg-pearl-50 p-3 md:p-8"
              aria-label="커뮤니티 아이소 이미지 크게 보기"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/community/community.webp"
                alt="커뮤니티센터 아이소 CG — 피트니스센터, G.X, 다목적체육관, 사우나, 독서실, 코워킹라운지, 골프연습장 등"
                width={1853}
                height={1410}
                loading="lazy"
                className="w-full"
              />
            </button>
          </Reveal>

          <div className="md:col-span-4">
            {COMMUNITY.groups.map((g, i) => (
              <Reveal key={g.name} delay={i * 0.05} className="border-t border-navy/80 py-6 first:pt-6">
                <h3 className="text-sm font-semibold text-navy">{g.name}</h3>
                <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-[14px] text-navy/70">
                  {g.items.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-8 space-y-1">
          {COMMUNITY.notes.map((n) => (
            <p key={n} className="note">
              {n}
            </p>
          ))}
        </div>
      </div>
      <Lightbox
        items={[{ src: "/images/community/community.webp", alt: "커뮤니티센터 아이소 CG", light: true }]}
        index={open}
        onClose={() => setOpen(null)}
      />
    </section>
  );
}
