"use client"

import { useState } from "react"
import { ShoppingCart, Plus, Minus, Check } from "lucide-react"
import { useCart, type CartItem } from "@/contexts/cart-context"

interface AddToCartButtonProps {
  product: {
    id: string
    name: string
    fullName: string
    image: string
  }
  price: string
  priceNumber: number
  perUnit?: string
  units?: number | string
  className?: string
}

export function AddToCartButton({ 
  product, 
  price, 
  priceNumber,
  perUnit = "per unit",
  units = 1,
  className = ""
}: AddToCartButtonProps) {
  const { addItem } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  const handleIncrease = () => {
    setQuantity(prev => prev + 1)
  }

  const handleDecrease = () => {
    setQuantity(prev => prev > 1 ? prev - 1 : 1)
  }

  const handleAddToCart = () => {
    const cartItem: Omit<CartItem, "quantity"> = {
      id: `${product.id}-${Date.now()}`,
      productId: product.id,
      productName: product.fullName,
      productImage: product.image,
      units: units,
      price: `$${(priceNumber * quantity).toFixed(0)}`,
      perUnit: perUnit,
      source: "product-page",
    }
    
    // Add item with specified quantity
    for (let i = 0; i < quantity; i++) {
      addItem({
        ...cartItem,
        id: `${product.id}-${Date.now()}-${i}`,
      })
    }
    
    setAdded(true)
    setTimeout(() => {
      setAdded(false)
      setQuantity(1)
    }, 2000)
  }

  const totalPrice = priceNumber * quantity

  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      {/* Quantity Selector */}
      <div className="flex items-center justify-between bg-gray-100 rounded-lg p-2">
        <button
          onClick={handleDecrease}
          className="w-10 h-10 flex items-center justify-center rounded-lg bg-white border border-gray-200 hover:bg-gray-50 transition-colors"
          aria-label="Decrease quantity"
        >
          <Minus className="w-4 h-4 text-gray-600" />
        </button>
        <div className="flex flex-col items-center">
          <span className="text-lg font-bold text-gray-900">{quantity}</span>
        </div>
        <button
          onClick={handleIncrease}
          className="w-10 h-10 flex items-center justify-center rounded-lg bg-white border border-gray-200 hover:bg-gray-50 transition-colors"
          aria-label="Increase quantity"
        >
          <Plus className="w-4 h-4 text-gray-600" />
        </button>
      </div>

      {/* Price Display */}
      <div className="flex items-center justify-between text-sm">
        <span className="text-gray-500">{quantity} x {price}</span>
        <span className="font-bold text-gray-900">${totalPrice.toFixed(0)}</span>
      </div>

      {/* Add to Cart Button */}
      <button 
        onClick={handleAddToCart}
        className={`flex items-center justify-center gap-2 font-semibold py-3 px-6 rounded-lg transition-all ${
          added 
            ? 'bg-green-600 text-white' 
            : 'bg-[#D4AF37] text-black hover:bg-[#C5A028]'
        }`}
      >
        {added ? (
          <>
            <Check className="w-5 h-5" />
            Added to Cart
          </>
        ) : (
          <>
            <ShoppingCart className="w-5 h-5" />
            Add to Cart
          </>
        )}
      </button>
    </div>
  )
}
