"use server"

import { OrderSchema } from "@/src/schema"
import { prisma } from "@/src/lib/prisma"
import { revalidatePath } from "next/cache"

export async function createOrder(data: unknown) {
    const result = OrderSchema.safeParse(data)

    if(!result.success){
        return{
            errors: result.error.issues
        }
    }
    try {
        await prisma.order.create({
            data:{
                name: result.data.name,
                total: result.data.total,
                orderProducts:{
                    create:result.data.order.map(product =>({
                        productId: product.id,
                        quantity: product.quantity
                    }))
                }
            }
        })
        revalidatePath('/admin/orders')
        return { success: true as const }
    }catch(error){
        console.error('Error creating order:', error)
        return {
            errors: [{ message: 'No se pudo crear el pedido. Inténtalo nuevamente.' }]
        }
    }
}
