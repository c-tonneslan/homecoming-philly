import type { SVGProps } from "react";

// One outline icon family: 24x24, single 1.75 stroke, round caps/joins,
// currentColor. Icons are always paired with a text label — they are literacy
// aids, not decoration.

type IconName =
  | "crisis" | "housing" | "food" | "id" | "jobs" | "healthcare"
  | "benefits" | "legal" | "behavioral" | "transportation"
  | "phone" | "message" | "arrowRight" | "chevronRight" | "external"
  | "exit" | "check" | "clock" | "pin" | "globe" | "search" | "info" | "flag";

const PATHS: Record<IconName, React.ReactNode> = {
  crisis: (<><circle cx="12" cy="12" r="8.5" /><circle cx="12" cy="12" r="3.5" /><path d="M12 3.5v5M12 15.5v5M3.5 12h5M15.5 12h5" /></>),
  housing: (<><path d="M4 11.5 12 5l8 6.5" /><path d="M6 10.5V19a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-8.5" /><path d="M10 20v-5h4v5" /></>),
  food: (<><path d="M4 13h16a7 7 0 0 1-7 7h-2a7 7 0 0 1-7-7Z" /><path d="M7 10c0-2 1-3 1-4M12 10c0-2 1-3 1-4M17 10c0-2 1-3 1-4" /></>),
  id: (<><rect x="3" y="5.5" width="18" height="13" rx="1.5" /><circle cx="8.5" cy="11" r="2" /><path d="M6 15.5c.5-1.4 4.5-1.4 5 0M14 10h4M14 13h4M6.5 18h11" /></>),
  jobs: (<><rect x="3.5" y="7.5" width="17" height="12" rx="1.5" /><path d="M9 7.5V6a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 6v1.5M3.5 12h17" /></>),
  healthcare: (<><rect x="4" y="4" width="16" height="16" rx="3" /><path d="M12 8.5v7M8.5 12h7" /></>),
  benefits: (<><rect x="3" y="6.5" width="18" height="12" rx="2" /><path d="M3 10h18" /><circle cx="16.5" cy="14" r="1.5" /></>),
  legal: (<><path d="M12 4v16M7 20h10" /><path d="M4.5 8h15M12 4.5 6 8l-1.8 4a3 3 0 0 0 5.6 0L8 8M12 4.5 18 8l1.8 4a3 3 0 0 1-5.6 0L16 8" /></>),
  behavioral: (<><path d="M4 6.5A1.5 1.5 0 0 1 5.5 5h13A1.5 1.5 0 0 1 20 6.5v8a1.5 1.5 0 0 1-1.5 1.5H9l-4 3.5v-3.5H5.5A1.5 1.5 0 0 1 4 14.5Z" /><path d="M12 8.3c1-1.4 3.2-.7 3.2 1 0 1.6-2 2.6-3.2 3.7-1.2-1.1-3.2-2.1-3.2-3.7 0-1.7 2.2-2.4 3.2-1Z" /></>),
  transportation: (<><rect x="4.5" y="4" width="15" height="13" rx="2" /><path d="M4.5 12h15M8 4v8M16 4v8" /><circle cx="8" cy="17.5" r="1.5" /><circle cx="16" cy="17.5" r="1.5" /></>),
  phone: (<path d="M6.5 3.5h3l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2 2A15.5 15.5 0 0 1 4.5 5.5a2 2 0 0 1 2-2Z" />),
  message: (<path d="M4 6.5A1.5 1.5 0 0 1 5.5 5h13A1.5 1.5 0 0 1 20 6.5v8a1.5 1.5 0 0 1-1.5 1.5H9l-4 3.5V16H5.5A1.5 1.5 0 0 1 4 14.5Z" />),
  arrowRight: (<path d="M4 12h15M13 6l6 6-6 6" />),
  chevronRight: (<path d="M9 5l7 7-7 7" />),
  external: (<><path d="M14 4h6v6M20 4l-9 9" /><path d="M17 13.5V19a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 4 19V9a1.5 1.5 0 0 1 1.5-1.5H11" /></>),
  exit: (<><path d="M14 4H6a1.5 1.5 0 0 0-1.5 1.5v13A1.5 1.5 0 0 0 6 20h8" /><path d="M11 12h9M16 8l4 4-4 4" /></>),
  check: (<path d="M5 12.5 10 17 19 6" />),
  clock: (<><circle cx="12" cy="12" r="8" /><path d="M12 7.5V12l3 2" /></>),
  pin: (<><path d="M12 21s6.5-5.2 6.5-10A6.5 6.5 0 0 0 5.5 11c0 4.8 6.5 10 6.5 10Z" /><circle cx="12" cy="11" r="2.3" /></>),
  globe: (<><circle cx="12" cy="12" r="8" /><path d="M4 12h16M12 4c2.5 2 2.5 14 0 16M12 4c-2.5 2-2.5 14 0 16" /></>),
  search: (<><circle cx="11" cy="11" r="6.5" /><path d="m16 16 4 4" /></>),
  info: (<><circle cx="12" cy="12" r="8" /><path d="M12 11v5M12 8h.01" /></>),
  flag: (<path d="M5 21V4h10l-1.5 3.5L15 11H5" />),
};

export function Icon({ name, size = 24, ...props }: { name: IconName; size?: number } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {PATHS[name]}
    </svg>
  );
}

export type { IconName };
