import type React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary"
  children: React.ReactNode
}

export function Button({variant = "primary", children, ...props}: ButtonProps) {
  const base = "f py-3 px-12 border-2 rounded-md hover:cursor-pointer text-lg transition-all duration-200"
  const variants = {
    primary: "text-white bg-green-900 border-green-900  hover:bg-transparent hover:text-green-900 hover:font-bold",
    secondary: "text-green-900 font-bold bg-transparent border-green-900 hover:bg-green-900 hover:text-white "
  }

  return (
    <button className={`${base} ${variants[variant]}`} {...props}>{children}</button>
  )
}