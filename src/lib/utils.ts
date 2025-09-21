import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const generateAvatarUrl = (seed: string, size: number = 40) => {
  return `https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}&size=${size}`
}