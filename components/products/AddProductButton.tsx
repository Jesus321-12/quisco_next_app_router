"use client"

import { Product } from "@/src/generated/prisma/client"
import {useStore} from "@/src/store"

type AddProductButtonProps = {
    product: Product
}

export default function AddProductButton({product}: AddProductButtonProps) {
    const addtoOrder = useStore((state) => state.addtoOrder)

  return (
    <button className=" w-full
  group relative
  px-8 py-2.5
  rounded-full
  text-white font-semibold tracking-wide
  bg-gradient-to-b from-[#7db9e8] via-[#2a6fb0] to-[#0f4c81]
  border border-[#0a3a63]
  shadow-[0_2px_4px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.8),inset_0_-2px_4px_rgba(0,0,0,0.3)]
  hover:from-[#9ccdf0] hover:via-[#3a82c7] hover:to-[#155a94]
  active:from-[#0f4c81] active:via-[#0a3a63] active:to-[#062843]
  active:shadow-[inset_0_2px_6px_rgba(0,0,0,0.5)]
  transition-all duration-150
  overflow-hidden
  cursor-pointer
"
onClick={() => addtoOrder(product)}
>
  
  <span className="
    absolute inset-x-2 top-0.5 h-1/2
    rounded-full
    bg-gradient-to-b from-white/80 via-white/30 to-transparent
    pointer-events-none
  "></span>

  
  <span className="
    absolute inset-y-1 left-1 w-3
    rounded-full
    bg-gradient-to-b from-white/40 to-transparent
    blur-[1px]
    pointer-events-none
  "></span>

  
  <span className="relative drop-shadow-[0_1px_1px_rgba(0,0,0,0.7)]">
    Agregar
  </span>
  
</button>
  )
}
