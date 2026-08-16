import { useEffect, useState } from "react";

type Props = {
  /** mp4 clip url — when absent, the poster image is shown on its own */
  src?: string;
  poster: string;
  alt: string;
};

export const HeroVideo = ({ src, poster, alt }: Props) => {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const showVideo = Boolean(src) && !reduceMotion;

  return (
    <div className="absolute inset-0">
      {showVideo ? (
        <video
          className="h-full w-full object-cover object-center"
          src={src}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={alt}
        />
      ) : (
        <img
          src={poster}
          alt={alt}
          className="h-full w-full object-cover object-center"
          width={1600}
          height={1200}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
    </div>
  );
};
