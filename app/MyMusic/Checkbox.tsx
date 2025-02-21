"use client"

import * as React from "react"

interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
    label?: string
    onCheckedChange?: (checked: boolean) => void
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
    ({ className = "", label, onCheckedChange, ...props }, ref) => {
        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            onCheckedChange?.(event.target.checked)
        }

        return (
            <label className="flex items-center space-x-2 cursor-pointer">
                <input
                    type="checkbox"
                    ref={ref}
                    className={`
            h-4 w-4 rounded border border-gray-300
            focus:ring-2 focus:ring-blue-500
            text-blue-600
            ${className}
          `}
                    onChange={handleChange}
                    {...props}
                />
                {label && <span className="text-sm text-gray-700">{label}</span>}
            </label>
        )
    },
)

Checkbox.displayName = "Checkbox"

export { Checkbox }