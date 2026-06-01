"use client"

import { useCart } from "@/contexts/cart-context"
import { X, Plus, Minus, ShoppingCart, Trash2, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { getTotalQuantity, meetsMinimumQuantity } from "@/lib/order-utils"

export function CartSidebar() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalItems, totalPrice, clearCart } = useCart()

  const totalQuantity = getTotalQuantity(items)
  const canCheckout = meetsMinimumQuantity(items)

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 z-[60] transition-opacity"
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Sidebar */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-[70] shadow-2xl flex flex-col animate-slide-in-right">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <ShoppingCart className="w-5 h-5 text-gray-900" />
            <h2 className="text-lg font-semibold text-gray-900">
              Your Cart ({totalItems})
            </h2>
          </div>
          <button
            onClick={closeCart}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingCart className="w-16 h-16 text-gray-300 mb-4" />
              <p className="text-gray-500 text-lg font-medium">Your cart is empty</p>
              <p className="text-gray-400 text-sm mt-1">
                Add wholesale products to get started
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-4 bg-gray-50 rounded-lg"
                >
                  {/* Product Image */}
                  <div className="flex-shrink-0 w-20 h-20 bg-white rounded-lg overflow-hidden">
                    <Image
                      src={item.productImage}
                      alt={item.productName}
                      width={80}
                      height={80}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 truncate">
                      {item.productName}
                    </h3>
                    <p className="text-sm text-gray-500 mt-0.5">
                      {item.units} units @ {item.perUnit}/unit
                    </p>
                    <p className="text-[#D4AF37] font-bold mt-1">
                      {item.price}
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center rounded-full bg-white border border-gray-200 hover:bg-gray-100 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center rounded-full bg-white border border-gray-200 hover:bg-gray-100 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-1.5 text-gray-400 hover:text-red-500 transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-gray-200 px-6 py-4 space-y-4">
            {/* Minimum quantity warning */}
            {!canCheckout && (
              <div className="rounded-lg border border-amber-200 bg-amber-50 p-3">
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                  <div className="text-xs text-amber-800">
                    <p>
                      <span className="font-semibold">Minimum order:</span> Add at least{" "}
                      <span className="font-semibold">5 units</span> to your cart. You have{" "}
                      <span className="font-semibold">{totalQuantity}</span>.
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div className="flex items-center justify-between">
              <span className="text-gray-600">Subtotal</span>
              <span className="text-xl font-bold text-gray-900">
                ${totalPrice.toLocaleString()}
              </span>
            </div>

            <p className="text-xs text-gray-500">
              Shipping and taxes calculated at checkout
            </p>
            {canCheckout ? (
              <Link href="/checkout" onClick={closeCart} className="block">
                <Button className="w-full bg-[#D4AF37] text-black hover:bg-[#C5A028] font-semibold py-6">
                  Proceed to Checkout
                </Button>
              </Link>
            ) : (
              <Button
                disabled
                className="w-full bg-gray-300 text-gray-500 font-semibold py-6 cursor-not-allowed"
              >
                Need 5 Units Minimum
              </Button>
            )}
            <button
              onClick={clearCart}
              className="w-full text-sm text-gray-500 hover:text-gray-700 transition-colors"
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </>
  )
}
