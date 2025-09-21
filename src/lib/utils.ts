import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const generateAvatarUrl = (seed: string, size: number = 40) => {
  return `https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}&size=${size}`
}

export const getStatusColor = (status: string) => {
  switch (status) {
    case "In Progress":
      return " text-purple-800"
    case "Complete":
      return " text-green-800"
    case "Pending":
      return " text-blue-800"
    case "Approved":
      return " text-yellow-800"
    case "Rejected":
      return " text-gray-800"
    default:
      return " text-gray-800"
  }
}

export const getStatusDot = (status: string) => {
  switch (status) {
    case "In Progress":
      return "bg-purple-500"
    case "Complete":
      return "bg-green-500"
    case "Pending":
      return "bg-blue-500"
    case "Approved":
      return "bg-yellow-500"
    case "Rejected":
      return "bg-gray-500"
    default:
      return "bg-gray-500"
  }
}