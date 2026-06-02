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
 * Get total quantity of product-page items only (these have the 5-unit minimum).
 * Wholesale items are exempt from the minimum quantity rule.
 */
export function getProductPageQuantity(items: CartItem[]): number {
  return items
    .filter(item => item.source === "product-page" || !item.source) // Default to product-page if not specified
    .reduce((sum, item) => sum + (item.quantity || 0), 0)
}

/**
 * Check if cart meets the minimum quantity requirement (5 units).
 * ONLY product-page items count toward this minimum.
 * Wholesale items can be any quantity.
 */
export function meetsMinimumQuantity(items: CartItem[]): boolean {
  const productPageQty = getProductPageQuantity(items)
  const hasWholesaleItems = items.some(item => item.source === "wholesale")
  const hasProductPageItems = items.some(item => item.source === "product-page" || !item.source)

  // If only wholesale items, no minimum needed
  if (hasWholesaleItems && !hasProductPageItems) {
    return true
  }

  // If product-page items exist, they must meet 5-unit minimum
  return productPageQty >= MINIMUM_QUANTITY
}

/**
 * Get how many more product-page units are needed to meet minimum.
 */
export function getQuantityShortfall(items: CartItem[]): number {
  const productPageQty = getProductPageQuantity(items)
  return Math.max(0, MINIMUM_QUANTITY - productPageQty)
}

/**
 * Calculate 5% crypto discount.
 */
export function getCryptoDiscount(total: number): number {
  return total * CRYPTO_DISCOUNT_RATE
}
