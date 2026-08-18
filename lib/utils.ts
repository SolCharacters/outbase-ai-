import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 3,
  }).format(value);
}

export function formatLatency(ms: number) {
  return `${(ms / 1000).toFixed(1)} sec`;
}

export function formatPercent(value: number) {
  return `${(value * 100).toFixed(1)}%`;
}
