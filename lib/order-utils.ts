import type { CartItem } from "@/contexts/cart-context"

const MINIMUM_QUANTITY = 5
export const CRYPTO_DISCOUNT_RATE = 0.05 // 5% off when paying with crypto

/**
 * Calculate the total quantity of items in the cart.
 */
export function getTotalQuantity(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + (item.quantity || 0), 0)
}

/**
 * Check if cart meets the minimum quantity requirement (5 units).
 */
export function meetsMinimumQuantity(items: CartItem[]): boolean {
  return getTotalQuantity(items) >= MINIMUM_QUANTITY
}

/**
 * Calculate 5% crypto discount.
 */
export function getCryptoDiscount(total: number): number {
  return total * CRYPTO_DISCOUNT_RATE
}
