import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

export function Checkbox({ checked, onCheckedChange, id }: { checked: boolean, onCheckedChange: () => void, id: string }) {
    return (
        <CheckboxPrimitive.Root
            id={id}
            className={cn(
                "w-5 h-5 border rounded-md flex items-center justify-center",
                checked ? "bg-primary border-primary" : "border-gray-400"
            )}
            checked={checked}
            onCheckedChange={onCheckedChange}
        >
            {checked && <Check className="w-4 h-4 text-white" />}
        </CheckboxPrimitive.Root>
    )
}
