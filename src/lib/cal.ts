export const CAL_URL = "https://cal.com/coach-ziad";
export const CAL_LINK = "coach-ziad";

const SCRIPT_SRC = "https://app.cal.com/embed/embed.js";

let loading: Promise<void> | null = null;

export const loadCal = (): Promise<void> => {
  if (typeof window === "undefined") return Promise.resolve();
  if ((window as any).Cal?.loaded) return Promise.resolve();
  if (loading) return loading;

  loading = new Promise<void>((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${SCRIPT_SRC}"]`);
    if (existing) {
      existing.addEventListener("load", () => resolve());
      existing.addEventListener("error", () => reject(new Error("cal.com failed to load")));
      return;
    }
    const script = document.createElement("script");
    script.src = SCRIPT_SRC;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("cal.com failed to load"));
    document.head.appendChild(script);
  });

  return loading;
};

const getCal = async () => {
  await loadCal();
  const w = window as any;
  if (!w.Cal) return null;
  if (!w.__calInitialized) {
    w.Cal("init", { origin: "https://cal.com" });
    w.__calInitialized = true;
  }
  return w.Cal as (...args: any[]) => void;
};

export const openCal = async (calLink: string = CAL_LINK) => {
  try {
    const Cal = await getCal();
    if (Cal) {
      Cal("modal", { calLink });
      return;
    }
  } catch {
    /* fall through to new tab */
  }
  window.open(CAL_URL, "_blank", "noopener,noreferrer");
};

export const inlineCal = async (element: HTMLElement, calLink: string = CAL_LINK) => {
  const Cal = await getCal();
  if (!Cal) throw new Error("cal.com failed to load");
  Cal("inline", { elementOrSelector: element, calLink });
};
