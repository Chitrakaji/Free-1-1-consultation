import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { ThanksVideo } from "@/components/thanks-video";

function getVimeoEmbedUrl(url: string) {
  if (!url) {
    return "";
  }

  if (url.includes("app.heygen.com/embeds/")) {
    return url;
  }

  if (url.includes("player.vimeo.com/video/")) {
    return url;
  }

  const parsedUrl = new URL(url);
  const match = parsedUrl.href.match(/vimeo\.com\/(?:video\/)?(\d+)/i);
  if (!match) {
    return "";
  }

  const token = parsedUrl.searchParams.get("h");
  const embedBase = `https://player.vimeo.com/video/${match[1]}`;
  return token ? `${embedBase}?h=${token}` : embedBase;
}

export default function ThanksPage() {
  const videoUrl = siteConfig.vimeoUrl;
  const isEmbeddableDirectUrl =
    videoUrl.includes("vimeo.com") || videoUrl.includes("app.heygen.com/embeds/");
  const embedUrl = isEmbeddableDirectUrl ? getVimeoEmbedUrl(videoUrl) : "";
  const hasWhatsApp = Boolean(siteConfig.whatsAppUrl);

  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-6 sm:px-6 sm:py-8">
      <div className="w-full max-w-4xl rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(8,31,31,0.96),rgba(5,17,17,0.98))] p-5 shadow-[0_35px_90px_rgba(0,0,0,0.45)] sm:p-6 lg:p-7">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold tracking-[0.18em] text-brand-200 uppercase">
            Thank you
          </p>
          <h1 className="mt-3 text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-[2.6rem]">
            Wait... watch the video before you go
          </h1>
          <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
            Before your consultation, please watch this short video so you know
            what to do next.
          </p>
        </div>

        <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950/70 shadow-[0_25px_80px_rgba(0,0,0,0.35)]">
          {embedUrl ? (
            <ThanksVideo embedUrl={embedUrl} videoUrl={videoUrl} />
          ) : videoUrl ? (
            <div className="flex aspect-video flex-col items-center justify-center gap-5 px-6 text-center">
              <div className="max-w-2xl space-y-3">
                <p className="text-xl font-semibold text-white">
                  Watch the preparation video before your consultation
                </p>
                <p className="text-sm leading-7 text-slate-300 sm:text-base">
                  This video host does not allow direct embedding on the thank
                  you page, so please open it using the button below.
                </p>
              </div>
              <a
                href={videoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-14 items-center justify-center rounded-full bg-brand-500 px-8 text-base font-semibold text-slate-950 shadow-[0_20px_60px_rgba(25,162,157,0.35)] transition hover:-translate-y-0.5 hover:bg-brand-400"
              >
                Watch the video
              </a>
            </div>
          ) : (
            <div className="flex aspect-video items-center justify-center px-6 text-center text-slate-300">
              Add your video link in{" "}
              <code className="mx-1 rounded bg-white/10 px-2 py-1 text-brand-100">
                lib/site-config.ts
              </code>
              and the video will appear here.
            </div>
          )}
        </div>

        <div className="mt-5 flex flex-col items-center gap-3 text-center">
          {hasWhatsApp ? (
            <a
              href={siteConfig.whatsAppUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-14 items-center justify-center rounded-full bg-brand-500 px-8 text-base font-semibold text-slate-950 shadow-[0_20px_60px_rgba(25,162,157,0.35)] transition hover:-translate-y-0.5 hover:bg-brand-400"
            >
              Chat with me on WhatsApp
            </a>
          ) : (
            <div className="rounded-full border border-dashed border-brand-300/50 px-5 py-3 text-sm text-slate-300">
              Add your WhatsApp chat link in{" "}
              <code className="rounded bg-white/10 px-2 py-1 text-brand-100">
                lib/site-config.ts
              </code>{" "}
              to activate the button.
            </div>
          )}

          <Link
            href="/"
            className="text-sm font-medium text-brand-200 underline decoration-brand-400/50 underline-offset-4 hover:text-white"
          >
            Back to the main page
          </Link>
        </div>
      </div>
    </main>
  );
}
