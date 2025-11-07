"use client";
import Link from "next/link";

export default function CustomButton({
    href = "#",
    label = "Button",
    bg = "#0b3d91",
    text = "#ffffff",
    hoverBg = "#062a63",
    hoverText = "#ffffff",
    icon = true,
    className = "",
}) {
    return (
        <Link
            href={href}
            className={`inline-flex items-center gap-2 rounded-md px-5 py-2 font-medium transition-colors duration-300 ${className}`}
            style={{ backgroundColor: bg, color: text }}
            onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = hoverBg;
                e.currentTarget.style.color = hoverText;
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = bg;
                e.currentTarget.style.color = text;
            }}
        >
            <span>{label}</span>

            {icon && (
                <svg
                    width="14"
                    height="5"
                    viewBox="0 0 14 5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transition-colors duration-300"
                >
                    <path
                        d="M10.192 4.49004C10.372 4.10604 10.546 3.77004 10.714 3.48204C10.894 3.19404 11.068 2.95404 11.236 2.76204H0.742001V2.00604H11.236C11.068 1.80204 10.894 1.55604 10.714 1.26804C10.546 0.980039 10.372 0.650039 10.192 0.278039H10.822C11.578 1.15404 12.37 1.80204 13.198 2.22204V2.54604C12.37 2.95404 11.578 3.60204 10.822 4.49004H10.192Z"
                        fill="currentColor"
                    />
                </svg>
            )}
        </Link>
    );
}
