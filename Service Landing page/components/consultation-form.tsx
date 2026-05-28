"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

const redirectDelayMs = 4500;
const successCheckWindowMs = 20000;
const flodeskRootClass = "ff-6a0c5355613f067ca55c5a36";
const fieldNameMap: Record<string, string> = {
  email: "email",
  "fields.firstName": "first-name",
  "fields.": "website-link",
  "fields.businessName": "business-name",
  "fields.whatsappNumber": "whatsapp-number",
};

const flodeskMarkup = `
<div class="ff-6a0c5355613f067ca55c5a36" data-ff-el="root" data-ff-version="3" data-ff-type="popup" data-ff-name="popupNoImage" data-ff-stage="default">
  <div data-ff-el="config" data-ff-config="eyJ0cmlnZ2VyIjp7Im1vZGUiOiJpbW1lZGlhdGVseSIsInZhbHVlIjpudWxsfSwib25TdWNjZXNzIjp7Im1vZGUiOiJtZXNzYWdlIiwibWVzc2FnZSI6IjxkaXYgZGF0YS1wYXJhZ3JhcGg9XCJ0cnVlXCI+R290IGl0ISBDaGVjayB5b3VyIGluYm94IGZvciBhbiBlbWFpbCB0byBjb25maXJtIHlvdXIgc3Vic2NyaXB0aW9uLjwvZGl2PiIsInJlZGlyZWN0VXJsIjoiIn0sImNvaSI6ZmFsc2UsInNob3dGb3JSZXR1cm5WaXNpdG9ycyI6dHJ1ZSwibm90aWZpY2F0aW9uIjp0cnVlLCJnZHByIjp7ImFjY2VwdHNNYXJrZXRpbmciOmZhbHNlLCJwcml2YWN5UG9saWN5Ijp7ImVuYWJsZWQiOmZhbHNlLCJtYW5kYXRvcnkiOmZhbHNlfX0sInRyYWNraW5nQ29uZmlnIjp7Im1ldGFQaXhlbElkIjoiIiwiY29va2llQmFubmVyRW5hYmxlZCI6ZmFsc2UsImdvb2dsZUFuYWx5dGljc0lkIjoiIn19" style="display: none"></div>
  <div class="ff-6a0c5355613f067ca55c5a36__modal fd-modal" data-ff-el="modal">
    <div class="ff-6a0c5355613f067ca55c5a36__modal-dialog fd-modal__dialog" data-ff-el="modal-dialog">
      <div class="ff-6a0c5355613f067ca55c5a36__modal-content fd-modal__content" data-ff-el="modal-content">
        <div class="ff-6a0c5355613f067ca55c5a36__modal-body fd-modal__body" data-ff-el="modal-body">
          <div class="ff-6a0c5355613f067ca55c5a36__wrapper">
            <form class="ff-6a0c5355613f067ca55c5a36__form" action="https://form.flodesk.com/forms/6a0c5355613f067ca55c5a36/submit" method="post" data-ff-el="form">
              <div class="ff-6a0c5355613f067ca55c5a36__title"><div style="word-break:break-word"><div data-paragraph="true">FREE 1:1 digital marketing consultation call</div></div></div>
              <div class="ff-6a0c5355613f067ca55c5a36__subtitle"><div style="word-break:break-word"><div data-paragraph="true">Book a FREE digital marketing consultation call with me and get a free customised strategy plan for your business</div></div></div>
              <div class="ff-6a0c5355613f067ca55c5a36__content fd-form-content" data-ff-el="content">
                <div class="ff-6a0c5355613f067ca55c5a36__fields" data-ff-el="fields">
                  <div class="ff-6a0c5355613f067ca55c5a36__field fd-form-group"><input id="ff-6a0c5355613f067ca55c5a36-email" class="ff-6a0c5355613f067ca55c5a36__control fd-form-control" type="text" maxlength="255" name="email" placeholder="Email address" data-ff-tab="email::fields.firstName" required /><label for="ff-6a0c5355613f067ca55c5a36-email" class="ff-6a0c5355613f067ca55c5a36__label fd-form-label"><div><div>Email address</div></div></label></div>
                  <div class="ff-6a0c5355613f067ca55c5a36__field fd-form-group"><input id="ff-6a0c5355613f067ca55c5a36-JcM5D6UANl" class="ff-6a0c5355613f067ca55c5a36__control fd-form-control" type="text" maxlength="255" name="fields.firstName" placeholder="First Name:" data-ff-tab="fields.firstName:email:fields." required /><label for="ff-6a0c5355613f067ca55c5a36-JcM5D6UANl" class="ff-6a0c5355613f067ca55c5a36__label fd-form-label"><div><div>First Name:</div></div></label></div>
                  <div class="ff-6a0c5355613f067ca55c5a36__field fd-form-group"><input id="ff-6a0c5355613f067ca55c5a36-Q10b1huZtY" class="ff-6a0c5355613f067ca55c5a36__control fd-form-control" type="text" maxlength="255" name="fields." placeholder="Website or Facebook Links :" data-ff-tab="fields.:fields.firstName:fields.businessName" required /><label for="ff-6a0c5355613f067ca55c5a36-Q10b1huZtY" class="ff-6a0c5355613f067ca55c5a36__label fd-form-label"><div><div>Website or Facebook Links :</div></div></label></div>
                  <div class="ff-6a0c5355613f067ca55c5a36__field fd-form-group"><input id="ff-6a0c5355613f067ca55c5a36-MU6fW7mEa5" class="ff-6a0c5355613f067ca55c5a36__control fd-form-control" type="text" maxlength="255" name="fields.businessName" placeholder="Business Name:" data-ff-tab="fields.businessName:fields.:fields.whatsappNumber" required /><label for="ff-6a0c5355613f067ca55c5a36-MU6fW7mEa5" class="ff-6a0c5355613f067ca55c5a36__label fd-form-label"><div><div>Business Name:</div></div></label></div>
                  <div class="ff-6a0c5355613f067ca55c5a36__field fd-form-group"><input id="ff-6a0c5355613f067ca55c5a36-ODMXHm1li7" class="ff-6a0c5355613f067ca55c5a36__control fd-form-control" type="text" maxlength="255" name="fields.whatsappNumber" placeholder="WhatsApp Number" data-ff-tab="fields.whatsappNumber:fields.businessName:submit" required /><label for="ff-6a0c5355613f067ca55c5a36-ODMXHm1li7" class="ff-6a0c5355613f067ca55c5a36__label fd-form-label"><div><div>WhatsApp Number</div></div></label></div>
                  <input type="text" maxlength="255" name="confirm_email_address" style="display: none" />
                </div>
                <div class="ff-6a0c5355613f067ca55c5a36__footer" data-ff-el="footer"><button type="submit" class="ff-6a0c5355613f067ca55c5a36__button fd-btn" data-ff-el="submit" data-ff-tab="submit"><div><span data-draw-element="editable">Book a Call</span></div></button></div>
              </div>
              <div class="ff-6a0c5355613f067ca55c5a36__success fd-form-success" data-ff-el="success"><div class="ff-6a0c5355613f067ca55c5a36__success-message"><div><div><div data-paragraph="true">Thanks! Keep an eye on your inbox for updates.</div></div></div></div></div>
              <div class="ff-6a0c5355613f067ca55c5a36__error fd-form-error" data-ff-el="error"></div>
            </form>
          </div>
        </div>
        <button class="ff-6a0c5355613f067ca55c5a36__modal-close fd-modal__close" data-ff-el="modal-close"><svg style="width: 1em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.51 14.51"><line x1="1" y1="1" x2="13.51" y2="13.51" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" /><line x1="13.51" y1="1" x2="1" y2="13.51" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" /></svg></button>
      </div>
    </div>
  </div>
</div>
`;

function ensureHeadLink(href: string) {
  if (document.querySelector(`link[href="${href}"]`)) return;

  const preload = document.createElement("link");
  preload.rel = "preload";
  preload.href = href;
  preload.as = "style";
  document.head.appendChild(preload);

  const stylesheet = document.createElement("link");
  stylesheet.rel = "stylesheet";
  stylesheet.href = href;
  document.head.appendChild(stylesheet);
}

function ensureFlodeskScripts() {
  const win = window as Window & {
    FlodeskObject?: string;
    fd?: ((...args: unknown[]) => void) & { q?: unknown[][] };
  };

  win.FlodeskObject = "fd";
  if (!win.fd) {
    const queueFn = ((...args: unknown[]) => {
      (win.fd!.q = win.fd!.q || []).push(args);
    }) as unknown as NonNullable<typeof win.fd>;
    win.fd = queueFn;
  }

  if (document.querySelector('script[data-flodesk="module"]')) return;

  const v = `?v=${Math.floor(Date.now() / (120 * 1000)) * 60}`;

  const sm = document.createElement("script");
  sm.async = true;
  sm.type = "module";
  sm.src = `https://assets.flodesk.com/universal.mjs${v}`;
  sm.dataset.flodesk = "module";
  document.head.appendChild(sm);

  const sn = document.createElement("script");
  sn.async = true;
  sn.noModule = true;
  sn.src = `https://assets.flodesk.com/universal.js${v}`;
  sn.dataset.flodesk = "nomodule";
  document.head.appendChild(sn);
}

function isFlodeskSuccess(root: HTMLElement) {
  if (root.getAttribute("data-ff-stage") === "success") {
    return true;
  }

  if (root.classList.contains("fd-has-success")) {
    return true;
  }

  if (root.querySelector(".fd-has-success")) {
    return true;
  }

  const successEl = root.querySelector<HTMLElement>('[data-ff-el="success"]');
  if (successEl) {
    const styles = window.getComputedStyle(successEl);
    if (styles.display !== "none" && styles.visibility !== "hidden") {
      return true;
    }
  }

  return false;
}

export function ConsultationForm() {
  const router = useRouter();
  const hostRef = useRef<HTMLDivElement>(null);
  const redirectRef = useRef<number | null>(null);
  const watcherRef = useRef<number | null>(null);
  const watcherTimeoutRef = useRef<number | null>(null);
  const submittedRef = useRef(false);

  useEffect(() => {
    ensureHeadLink("https://use.typekit.net/msq2hgn.css");
    ensureHeadLink("https://assets.flodesk.com/pp-editorial-new.css");
    ensureHeadLink("https://assets.flodesk.com/flodesk-sans.css");
    ensureFlodeskScripts();

    const host = hostRef.current;
    if (!host) return;
    host.innerHTML = flodeskMarkup;

    const root = host.querySelector<HTMLElement>(`.${flodeskRootClass}`);
    if (!root) return;

    root
      .querySelectorAll<HTMLElement>(`.${flodeskRootClass}__field`)
      .forEach((field) => {
        const input = field.querySelector<HTMLInputElement>("input");
        const fieldName = input?.getAttribute("name");
        if (!fieldName || !fieldNameMap[fieldName]) return;

        field.dataset.fieldName = fieldNameMap[fieldName];

        if (input) {
          input.setAttribute("aria-label", input.placeholder || "");
        }
      });

    const scheduleRedirect = () => {
      if (redirectRef.current !== null) return;
      redirectRef.current = window.setTimeout(() => {
        router.push("/thanks");
      }, redirectDelayMs);
    };

    const clearWatchers = () => {
      if (watcherRef.current !== null) {
        window.clearInterval(watcherRef.current);
        watcherRef.current = null;
      }
      if (watcherTimeoutRef.current !== null) {
        window.clearTimeout(watcherTimeoutRef.current);
        watcherTimeoutRef.current = null;
      }
    };

    const handlePossibleSuccess = () => {
      if (!submittedRef.current) return;
      if (isFlodeskSuccess(root)) {
        clearWatchers();
        scheduleRedirect();
      }
    };

    const observer = new MutationObserver(handlePossibleSuccess);

    observer.observe(root, {
      attributes: true,
      subtree: true,
      childList: true,
      attributeFilter: ["data-ff-stage", "class", "style"],
    });

    const form = root.querySelector<HTMLFormElement>('form[data-ff-el="form"]');
    const handleSubmit = () => {
      submittedRef.current = true;
      clearWatchers();
      watcherRef.current = window.setInterval(handlePossibleSuccess, 300);
      watcherTimeoutRef.current = window.setTimeout(() => {
        clearWatchers();
        submittedRef.current = false;
      }, successCheckWindowMs);
    };
    form?.addEventListener("submit", handleSubmit);

    const timer = window.setTimeout(() => {
      const fd = (window as Window & { fd?: (...args: unknown[]) => void }).fd;
      fd?.("form:handle", {
        formId: "6a0c5355613f067ca55c5a36",
        rootEl: `.${flodeskRootClass}`,
      });
    }, 500);

    return () => {
      observer.disconnect();
      form?.removeEventListener("submit", handleSubmit);
      window.clearTimeout(timer);
      clearWatchers();
      submittedRef.current = false;
      if (redirectRef.current !== null) window.clearTimeout(redirectRef.current);
      redirectRef.current = null;
      host.innerHTML = "";
    };
  }, [router]);

  return (
    <div className="mx-auto w-full max-w-4xl rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-5 shadow-[0_30px_80px_rgba(0,0,0,0.26)] backdrop-blur-sm sm:p-7">
      <div
        ref={hostRef}
        className="flodesk-inline-host mx-auto w-full"
      />
    </div>
  );
}
