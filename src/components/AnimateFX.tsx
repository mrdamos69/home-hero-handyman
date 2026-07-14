"use client";

import { useEffect } from "react";

/**
 * AnimateFX — a global progressive-enhancement layer inspired by Animate UI
 * (https://animate-ui.com): scroll progress, splitting text, counting numbers,
 * highlight text, shimmering text, ripple / liquid / magnetic buttons,
 * tilt + shine cards and image zoom.
 *
 * Design rules:
 * - Server-rendered markup is enhanced in place; nothing breaks without JS.
 * - Every effect respects prefers-reduced-motion.
 * - Pointer-driven effects (magnetic, tilt) run only on fine pointers.
 * - Idempotent: elements are tagged via data-fx-* so re-runs are no-ops
 *   (a MutationObserver re-applies effects after client-side navigation).
 */
export default function AnimateFX() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;

    /* ---------- Scroll progress bar (Animate UI: Scroll Progress) ---------- */
    let bar = document.getElementById("fx-progress") as HTMLElement | null;
    if (!bar) {
      bar = document.createElement("div");
      bar.id = "fx-progress";
      bar.setAttribute("aria-hidden", "true");
      document.body.appendChild(bar);
    }
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const h = document.documentElement;
        const max = h.scrollHeight - h.clientHeight;
        if (bar) bar.style.transform = `scaleX(${max > 0 ? h.scrollTop / max : 0})`;
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    onScroll();

    /* ---------- Counting numbers (Animate UI: Counting Number) ---------- */
    const runCount = (el: HTMLElement) => {
      const target = parseFloat(el.dataset.fxCount || "0");
      const decimals = (el.dataset.fxCount || "").includes(".")
        ? (el.dataset.fxCount || "").split(".")[1].length
        : 0;
      const duration = 1300;
      const start = performance.now();
      const ease = (t: number) => 1 - Math.pow(1 - t, 4);
      const frame = (now: number) => {
        const p = Math.min(1, (now - start) / duration);
        el.textContent = (target * ease(p)).toFixed(decimals);
        if (p < 1) requestAnimationFrame(frame);
      };
      requestAnimationFrame(frame);
    };

    /* ---------- In-view trigger for split headings & counters ---------- */
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("fx-in");
          if (!reduced) {
            entry.target
              .querySelectorAll<HTMLElement>("[data-fx-count]")
              .forEach(runCount);
          }
          io.unobserve(entry.target);
        }
      },
      { threshold: 0.3, rootMargin: "0px 0px -8% 0px" }
    );

    /* ---------- Splitting text on section headings (Animate UI: Splitting Text) ---------- */
    const splitHeading = (h: HTMLElement) => {
      if (h.dataset.fxSplit) return;
      h.dataset.fxSplit = "1";
      if (reduced) return;
      const original = h.textContent || "";
      if (!original.trim()) return;
      h.setAttribute("aria-label", original.trim());
      let wordIndex = 0;
      const splitNode = (node: Node) => {
        if (node.nodeType === Node.TEXT_NODE) {
          const parts = (node.textContent || "").split(/(\s+)/);
          const frag = document.createDocumentFragment();
          for (const part of parts) {
            if (!part) continue;
            if (/^\s+$/.test(part)) {
              frag.appendChild(document.createTextNode(part));
            } else {
              const span = document.createElement("span");
              span.className = "fx-word";
              span.setAttribute("aria-hidden", "true");
              span.style.setProperty("--fx-d", `${Math.min(wordIndex, 14) * 45}ms`);
              if (/^\d+(\.\d+)?$/.test(part)) {
                span.dataset.fxCount = part;
              }
              span.textContent = part;
              frag.appendChild(span);
              wordIndex += 1;
            }
          }
          (node as ChildNode).replaceWith(frag);
        } else if (node.nodeType === Node.ELEMENT_NODE) {
          Array.from(node.childNodes).forEach(splitNode);
        }
      };
      Array.from(h.childNodes).forEach(splitNode);
      io.observe(h);
    };

    /* ---------- Highlight first word of the page h1 (Animate UI: Highlight Text) ---------- */
    const highlightH1 = () => {
      const h1 = document.querySelector<HTMLElement>("h1");
      if (!h1 || h1.dataset.fxHl) return;
      h1.dataset.fxHl = "1";
      if (reduced) return;
      const walker = document.createTreeWalker(h1, NodeFilter.SHOW_TEXT);
      const first = walker.nextNode() as Text | null;
      if (!first || !first.textContent) return;
      const match = first.textContent.match(/^(\s*)(\S+)/);
      if (!match) return;
      const rest = first.textContent.slice(match[0].length);
      const span = document.createElement("span");
      span.className = "fx-highlight";
      span.textContent = match[2];
      first.replaceWith(
        document.createTextNode(match[1]),
        span,
        document.createTextNode(rest)
      );
      window.setTimeout(() => span.classList.add("fx-in"), 850);
    };

    /* ---------- Buttons: ripple + liquid + magnetic ---------- */
    const enhanceButton = (btn: HTMLElement) => {
      if (btn.dataset.fxBtn) return;
      btn.dataset.fxBtn = "1";
      btn.classList.add("fx-btn");

      /* Ripple (Animate UI: Ripple Button) */
      btn.addEventListener("click", (ev: MouseEvent) => {
        if (reduced) return;
        const rect = btn.getBoundingClientRect();
        const d = Math.max(rect.width, rect.height) * 2;
        const ripple = document.createElement("span");
        ripple.className = "fx-ripple";
        ripple.style.width = ripple.style.height = `${d}px`;
        ripple.style.left = `${(ev.clientX || rect.left + rect.width / 2) - rect.left - d / 2}px`;
        ripple.style.top = `${(ev.clientY || rect.top + rect.height / 2) - rect.top - d / 2}px`;
        btn.appendChild(ripple);
        window.setTimeout(() => ripple.remove(), 700);
      });

      /* Magnetic (Animate UI: Magnetic effect) — fine pointers only */
      if (finePointer && !reduced) {
        let raf = 0;
        btn.addEventListener("pointermove", (ev: PointerEvent) => {
          const rect = btn.getBoundingClientRect();
          const x = (ev.clientX - rect.left - rect.width / 2) / rect.width;
          const y = (ev.clientY - rect.top - rect.height / 2) / rect.height;
          cancelAnimationFrame(raf);
          raf = requestAnimationFrame(() => {
            btn.style.transform = `translate(${(x * 7).toFixed(1)}px, ${(y * 5).toFixed(1)}px) scale(1.04)`;
          });
        });
        btn.addEventListener("pointerleave", () => {
          cancelAnimationFrame(raf);
          btn.style.transform = "";
        });
      }
    };

    /* ---------- Cards: tilt + shine (Animate UI: Tilt / Shine effects) ---------- */
    const enhanceCard = (card: HTMLElement) => {
      if (card.dataset.fxTilt) return;
      card.dataset.fxTilt = "1";
      if (!finePointer || reduced) return;
      card.classList.add("fx-tilt");
      const shine = document.createElement("span");
      shine.className = "fx-shine";
      shine.setAttribute("aria-hidden", "true");
      card.appendChild(shine);
      let raf = 0;
      card.addEventListener("pointermove", (ev: PointerEvent) => {
        const r = card.getBoundingClientRect();
        const px = (ev.clientX - r.left) / r.width;
        const py = (ev.clientY - r.top) / r.height;
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
          card.style.transform = `perspective(900px) rotateX(${((0.5 - py) * 4).toFixed(2)}deg) rotateY(${((px - 0.5) * 4).toFixed(2)}deg) translateY(-2px)`;
          shine.style.opacity = "1";
          shine.style.background = `radial-gradient(340px circle at ${(px * 100).toFixed(1)}% ${(py * 100).toFixed(1)}%, rgba(255,255,255,0.5), transparent 62%)`;
        });
      });
      card.addEventListener("pointerleave", () => {
        cancelAnimationFrame(raf);
        card.style.transform = "";
        shine.style.opacity = "0";
      });
    };

    /* ---------- Apply everything (idempotent) ---------- */
    const enhance = () => {
      document.querySelectorAll<HTMLElement>("h2").forEach(splitHeading);
      highlightH1();

      /* Shimmering eyebrows (Animate UI: Shimmering Text) */
      document.querySelectorAll<HTMLElement>("p, span").forEach((el) => {
        if (el.dataset.fxShimmer) return;
        const cls = el.className;
        if (typeof cls === "string" && cls.includes("uppercase") && cls.includes("tracking-")) {
          el.dataset.fxShimmer = "1";
          if (!reduced) el.classList.add("fx-shimmer");
        }
      });

      document
        .querySelectorAll<HTMLElement>(".btn-primary, .btn-dark, .btn-outline, .btn-outline-light")
        .forEach(enhanceButton);

      document.querySelectorAll<HTMLElement>(".card").forEach(enhanceCard);

      /* Image zoom (Animate UI: Image Zoom) */
      document.querySelectorAll<HTMLImageElement>("img").forEach((img) => {
        const parent = img.parentElement;
        if (!parent || parent.dataset.fxZoom) return;
        if (typeof parent.className === "string" && parent.className.includes("overflow-hidden")) {
          parent.dataset.fxZoom = "1";
          parent.classList.add("fx-zoomwrap");
          img.classList.add("fx-zoomimg");
        }
      });
    };

    enhance();

    /* Re-apply after client-side route changes / dynamic renders */
    let debounce = 0;
    const mo = new MutationObserver(() => {
      window.clearTimeout(debounce);
      debounce = window.setTimeout(enhance, 150);
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      io.disconnect();
      mo.disconnect();
      window.clearTimeout(debounce);
    };
  }, []);

  return null;
}
