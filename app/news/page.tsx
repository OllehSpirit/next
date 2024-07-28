'use client'

import { useRouter } from "next/navigation"

export default function news() {

  const router = useRouter()

  const placeOrder = () => { 
    router.push('/')
   }

  return (
    <>
      <h1 className="mt-6">NEWS PAGE</h1>
      <button onClick={placeOrder}>Place Order</button>
    </>
  )
}
