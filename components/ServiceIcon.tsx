import type { Service } from "@/data/services";

export function ServiceIcon({ name, className = "h-8 w-8" }: { name: Service["icon"]; className?: string }) {
  const props = { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, className };
  switch (name) {
    case "waves":
      return (
        <svg {...props}>
          <path d="M2 12c2.5-2 5-2 7.5 0S15 14 17.5 12 22 10 22 12" />
          <path d="M2 17c2.5-2 5-2 7.5 0S15 19 17.5 17 22 15 22 17" />
          <path d="M2 7c2.5-2 5-2 7.5 0S15 9 17.5 7 22 5 22 7" />
        </svg>
      );
    case "laser":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1" />
        </svg>
      );
    case "hand":
      return (
        <svg {...props}>
          <path d="M7 11V6a2 2 0 1 1 4 0v5" />
          <path d="M11 11V4a2 2 0 1 1 4 0v7" />
          <path d="M15 11V6a2 2 0 1 1 4 0v9a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5v-3a2 2 0 1 1 4 0" />
        </svg>
      );
    case "surgery":
      return (
        <svg {...props}>
          <path d="M12 2l4 4-8 8H4v-4l8-8z" />
          <path d="M14 4l6 6" />
          <path d="M4 22h16" />
        </svg>
      );
    case "elder":
      return (
        <svg {...props}>
          <circle cx="12" cy="7" r="3" />
          <path d="M9 10v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-6" />
          <path d="M18 21v-3M18 14l2 2M12 21v-3" />
        </svg>
      );
    case "sport":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
          <path d="M7 12l3 3 7-7" />
        </svg>
      );
  }
}
