import type React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary"
  loading?: boolean
  children: React.ReactNode
}

export function Button({ variant = "primary", loading = false, children, ...props }: ButtonProps) {
  const base = "f py-3 px-12 border-2 rounded-md hover:cursor-pointer text-lg transition-all duration-200"
  const variants = {
    primary: "text-white bg-green-900 border-green-900  hover:bg-transparent hover:text-green-900 hover:font-bold",
    secondary: "text-green-900 font-bold bg-transparent border-green-900 hover:bg-green-900 hover:text-white "
  }
  const disabledStyle = "opacity-60 cursor-not-allowed"

  return (
    <button disabled={loading || props.disabled} className={`${base} ${variants[variant]} ${(loading || props.disabled) && disabledStyle}`} {...props}>
      {loading ? (
        <div className="w-6 h-6 rounded-full border-2 border-current border-t-transparent animate-spin"></div>
      ) : (children)}
    </button>
  )
}