export const CAL_URL = "https://cal.com/coach-ziad";
export const CAL_LINK = "coach-ziad";

const SCRIPT_SRC = "https://app.cal.com/embed/embed.js";

let loading: Promise<void> | null = null;

/**
 * Official Cal.com embed stub: defines a queueing window.Cal before the
 * script loads; the script then replaces it and replays the queue.
 */
const installStub = () => {
  const w = window as any;
  if (w.Cal) return;
  const stub: any = function (...args: any[]) {
    const cal = w.Cal;
    if (!cal.loaded) {
      cal.ns = {};
      cal.q = cal.q || [];
      const script = document.createElement("script");
      script.src = SCRIPT_SRC;
      script.async = true;
      document.head.appendChild(script);
      cal.loaded = true;
    }
    if (args[0] === "init") {
      const api: any = function (...a: any[]) {
        api.q.push(a);
      };
      const namespace = args[1];
      api.q = api.q || [];
      if (typeof namespace === "string") {
        cal.ns[namespace] = cal.ns[namespace] || api;
        cal.ns[namespace].q = cal.ns[namespace].q || [];
        cal.q.push(["initNamespace", namespace]);
      } else {
        cal.q.push(args);
      }
      return;
    }
    cal.q.push(args);
  };
  stub.q = [];
  stub.loaded = false;
  stub.ns = {};
  w.Cal = stub;
};

export const loadCal = (): Promise<void> => {
  if (typeof window === "undefined") return Promise.resolve();
  installStub();
  if (loading) return loading;

  loading = new Promise<void>((resolve, reject) => {
    const w = window as any;
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${SCRIPT_SRC}"]`);
    if (existing) {
      existing.addEventListener("load", () => resolve());
      existing.addEventListener("error", () => reject(new Error("cal.com failed to load")));
      // script may already be loaded (stub replaced by real embed)
      if (w.Cal && !w.Cal.q) resolve();
      return;
    }
    // trigger the stub to inject the script
    w.Cal("init", { origin: "https://cal.com" });
    const script = document.querySelector<HTMLScriptElement>(`script[src="${SCRIPT_SRC}"]`);
    if (!script) {
      reject(new Error("cal.com script not injected"));
      return;
    }
    script.addEventListener("load", () => resolve());
    script.addEventListener("error", () => reject(new Error("cal.com failed to load")));
  });

  return loading;
};

export const openCal = async (calLink: string = CAL_LINK) => {
  try {
    await loadCal();
    const Cal = (window as any).Cal;
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
  await loadCal();
  const Cal = (window as any).Cal;
  if (!Cal) throw new Error("cal.com failed to load");
  Cal("inline", { elementOrSelector: element, calLink });
};
