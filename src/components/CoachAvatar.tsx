import portrait from "@/assets/coach-ziad-portrait.jpg.asset.json";

type CoachAvatarProps = {
  size?: "xs" | "sm" | "md";
  className?: string;
};

const sizes = {
  xs: "h-7 w-7 ring-1",
  sm: "h-9 w-9 ring-2",
  md: "h-12 w-12 ring-2",
};

export const CoachAvatar = ({ size = "sm", className = "" }: CoachAvatarProps) => (
  <img
    src={portrait.url}
    alt="coach ziad"
    width={96}
    height={96}
    className={`${sizes[size]} shrink-0 rounded-full object-cover object-[center_22%] ring-primary ring-offset-2 ring-offset-background ${className}`}
  />
);