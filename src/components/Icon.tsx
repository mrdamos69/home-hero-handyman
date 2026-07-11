/** Minimal inline icon set (stroke style, 24x24). No external icon library needed. */

const paths: Record<string, React.ReactNode> = {
  wrench: (
    <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 0 0 5.4-5.4l-2.9 2.9-2.1-2.1 3-2.8z" />
  ),
  assembly: (
    <>
      <rect x="3" y="10" width="18" height="8" rx="1" />
      <path d="M6 18v3M18 18v3M8 10V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4" />
    </>
  ),
  roller: (
    <>
      <rect x="5" y="3" width="13" height="5" rx="1" />
      <path d="M18 5h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-8v3M12 13h-1v8h2v-8h-1z" />
    </>
  ),
  door: (
    <>
      <rect x="6" y="3" width="12" height="18" rx="1" />
      <circle cx="15" cy="12" r="1" />
      <path d="M3 21h18" />
    </>
  ),
  floor: (
    <>
      <path d="M3 9h18M3 15h18M9 3v6M15 9v6M9 15v6" />
      <rect x="3" y="3" width="18" height="18" rx="1" />
    </>
  ),
  faucet: (
    <>
      <path d="M12 3v4M8 7h8M12 7v3a5 5 0 0 1-5 5H4v3h4a8 8 0 0 0 8-8V7" />
      <path d="M19 16c0 1.7-1.3 3-1.3 3s-1.2-1.3-1.2-3 1.2-3 1.2-3 1.3 1.3 1.3 3z" />
    </>
  ),
  tv: (
    <>
      <rect x="3" y="5" width="18" height="12" rx="1" />
      <path d="M9 21h6M12 17v4" />
    </>
  ),
  building: (
    <>
      <rect x="5" y="3" width="14" height="18" rx="1" />
      <path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2M3 21h18" />
    </>
  ),
  chat: (
    <path d="M21 12a8 8 0 0 1-8 8H4l2-3a8 8 0 1 1 15-5z" />
  ),
  detail: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </>
  ),
  broom: (
    <>
      <path d="M14 3 9.5 12M6 21c0-4 2-7 3.5-9l4 2C13 16 11 19 8 21H6z" />
      <path d="M9.5 12l4 2" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M8 3v4M16 3v4M3 10h18" />
    </>
  ),
  phone: (
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
  ),
  message: (
    <>
      <path d="M21 11a8 8 0 0 1-8 8H4l2-3a8 8 0 1 1 15-5z" />
      <path d="M8 10h8M8 13h5" />
    </>
  ),
  camera: (
    <>
      <path d="M4 8h3l2-2h6l2 2h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
      <circle cx="12" cy="13" r="3.5" />
    </>
  ),
  check: <path d="m5 13 4 4L19 7" />,
  arrow: <path d="M5 12h14m-6-6 6 6-6 6" />,
  list: (
    <path d="M8 6h13M8 12h13M8 18h13M3.5 6h.01M3.5 12h.01M3.5 18h.01" />
  ),
};

export default function Icon({
  name,
  className = "h-6 w-6",
}: {
  name: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {paths[name] ?? paths.wrench}
    </svg>
  );
}
