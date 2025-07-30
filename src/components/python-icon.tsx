import type { SVGProps } from "react";

export function PythonIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M11 15a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
      <path d="M12 22c-3.86 0-7-3.14-7-7s9-1.5 9-6.5S15.86 2 12 2s-7 3.14-7 7"/>
      <path d="M13 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
      <path d="M12 2c3.86 0 7 3.14 7 7s-9 1.5-9 6.5S8.14 22 12 22s7-3.14 7-7"/>
    </svg>
  )
}
