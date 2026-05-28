"use client";

import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={item.question}
            className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950/55"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
            >
              <span className="text-base font-semibold text-white sm:text-lg">
                {item.question}
              </span>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brand-300/30 bg-brand-500/10 text-2xl text-brand-100">
                {isOpen ? "−" : "+"}
              </span>
            </button>
            {isOpen ? (
              <div className="border-t border-white/8 px-5 py-5 text-sm leading-7 text-slate-300 sm:px-6 sm:text-base">
                {item.answer}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
