"use client";

import { useMemo, useState } from "react";

type ThanksVideoProps = {
  embedUrl: string;
  videoUrl: string;
};

function withAutoplay(url: string) {
  try {
    const parsed = new URL(url);
    parsed.searchParams.set("autoplay", "1");
    return parsed.toString();
  } catch {
    return url;
  }
}

export function ThanksVideo({ embedUrl, videoUrl }: ThanksVideoProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const autoplayUrl = useMemo(() => withAutoplay(embedUrl), [embedUrl]);

  if (isPlaying) {
    return (
      <div className="space-y-3 p-3 sm:p-4">
        <div className="aspect-video w-full overflow-hidden rounded-[1.25rem] border border-white/8">
          <iframe
            src={autoplayUrl}
            title="Consultation preparation video"
            className="h-full w-full"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
        <div className="rounded-2xl border border-amber-300/20 bg-amber-400/10 px-4 py-2.5 text-xs leading-6 text-amber-100 sm:text-sm">
          If the video does not appear,{" "}
          <a
            href={videoUrl}
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-amber-50 underline underline-offset-4"
          >
            open it in a new tab
          </a>
          .
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-3 p-3 sm:p-4">
      <button
        type="button"
        onClick={() => setIsPlaying(true)}
        className="group relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-[1.25rem] border border-white/8 bg-[radial-gradient(circle_at_top,_rgba(45,166,159,0.22),_transparent_42%),linear-gradient(180deg,rgba(4,31,32,0.96),rgba(3,16,16,1))] text-left shadow-[0_25px_60px_rgba(0,0,0,0.3)]"
      >
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(8,88,87,0.12),transparent_38%,rgba(199,47,47,0.12))]" />
        <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:28px_28px]" />

        <div className="relative z-10 flex flex-col items-center gap-3 px-5 text-center">
          <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-cyan-200/30 bg-cyan-400/12 shadow-[0_0_0_8px_rgba(45,166,159,0.08)] transition duration-200 group-hover:scale-[1.03] group-hover:bg-cyan-400/18 sm:h-24 sm:w-24">
            <div className="absolute h-14 w-14 rounded-full bg-red-500 shadow-[0_16px_36px_rgba(220,38,38,0.45)] sm:h-16 sm:w-16" />
            <div className="relative ml-1 h-0 w-0 border-y-[10px] border-y-transparent border-l-[18px] border-l-white sm:border-y-[12px] sm:border-l-[20px]" />
          </div>

          <div className="space-y-1.5">
            <p className="text-xl font-semibold text-white sm:text-2xl">
              Play the consultation video
            </p>
            <p className="max-w-2xl text-sm leading-6 text-slate-300">
              Tap the button to start the video and see what to do before your
              consultation call.
            </p>
          </div>
        </div>
      </button>

      <div className="rounded-2xl border border-brand-300/15 bg-brand-500/10 px-4 py-2.5 text-xs leading-6 text-brand-50/90 sm:text-sm">
        Prefer watching it in a separate tab?{" "}
        <a
          href={videoUrl}
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-white underline underline-offset-4"
        >
          Open the video here
        </a>
        .
      </div>
    </div>
  );
}
