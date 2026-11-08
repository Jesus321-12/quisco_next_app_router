"use client"

import useSWR from "swr"
import Logo from "@/components/ui/Logo";
import { OrderWithProducts } from "@/src/types";
import LatestOrderItem from "@/components/order/LatestOrderItem";


export default function OrdersPage() {
     const url = '/orders/api'
  const fetcher = () => fetch(url, { cache: 'no-store' }).then(res => res.json())
  const {data,isLoading} = useSWR<OrderWithProducts[]>(url, fetcher, {
      refreshInterval: 5000,
      revalidateOnFocus: true
  })
  if (isLoading) return <p className='text-center'>Cargando...</p>
  
 if (data) return (
    <>
        <h1 className='text-center mt-20 text-6xl font-black'>Ordenes Listas</h1>
        <Logo />
        {data.length ? (
            <div className="grid grid-cols-2 gap-5 max-w-5xl mx-auto mt-10">
                {data.map((order) => (
                    <LatestOrderItem 
                        order={order}
                        key={order.id}
                    />
                ))}
            </div>
        ) : (
            <p className='text-center'>No hay órdenes listas.</p>
        )}
    </>
  )
}
