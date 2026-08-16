export const CALENDLY_URL = "https://calendly.com/coach-ziad";

const SCRIPT_SRC = "https://assets.calendly.com/assets/external/widget.js";
const CSS_HREF = "https://assets.calendly.com/assets/external/widget.css";

let loading: Promise<void> | null = null;

export const loadCalendly = (): Promise<void> => {
  if (typeof window === "undefined") return Promise.resolve();
  if ((window as any).Calendly) return Promise.resolve();
  if (loading) return loading;

  loading = new Promise<void>((resolve, reject) => {
    if (!document.querySelector(`link[href="${CSS_HREF}"]`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = CSS_HREF;
      document.head.appendChild(link);
    }
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${SCRIPT_SRC}"]`);
    if (existing) {
      existing.addEventListener("load", () => resolve());
      existing.addEventListener("error", () => reject(new Error("calendly failed to load")));
      return;
    }
    const script = document.createElement("script");
    script.src = SCRIPT_SRC;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("calendly failed to load"));
    document.head.appendChild(script);
  });

  return loading;
};

export const openCalendly = async (url: string = CALENDLY_URL) => {
  try {
    await loadCalendly();
    const calendly = (window as any).Calendly;
    if (calendly?.initPopupWidget) {
      calendly.initPopupWidget({ url });
      return;
    }
  } catch {
    /* fall through to new tab */
  }
  window.open(url, "_blank", "noopener,noreferrer");
};
