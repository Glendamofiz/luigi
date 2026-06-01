"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X, Instagram, ChevronDown, ShoppingCart } from "lucide-react"
import { useCart } from "@/contexts/cart-context"

const productCategories = [
  { name: "Fattones", href: "/products/fattones" },
  { name: "The Series 6 Collections", href: "/products/series-6" },
  { name: "Rosin Pens", href: "/products/rosin-pens" },
]

const navItems = [
  { name: "Home", href: "/" },
  { name: "Luigi Guide", href: "/luigi-live-resin" },
  { name: "Products", href: "/products", hasDropdown: true },
  { name: "Blog", href: "/blog" },
  { name: "Wholesale", href: "/wholesale" },
  { name: "Contact", href: "/contact" },
]

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false)
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false)
  const { openCart, totalItems } = useCart()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black backdrop-blur-none border-b border-gray-800" style={{ position: 'fixed' }}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo-Gold-Rich%20%281%29-kRnLnl7dbZ8eRGDOWdRXnlObyE3GE5.png"
            alt="Luigi - Live Resin Liquid Diamond"
            width={150}
            height={50}
            className="h-12 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-x-8">
          {navItems.map((item) => (
            <div key={item.name} className="relative">
              {item.hasDropdown ? (
                <div
                  className="relative"
                  onMouseEnter={() => setProductsDropdownOpen(true)}
                  onMouseLeave={() => setProductsDropdownOpen(false)}
                >
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-1"
                  >
                    {item.name}
                    <ChevronDown className="h-4 w-4" />
                  </Link>
                  {productsDropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-black border border-gray-800 rounded-md shadow-lg py-2">
                      {productCategories.map((category) => (
                        <Link
                          key={category.name}
                          href={category.href}
                          className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-900 hover:text-white transition-colors"
                        >
                          {category.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={item.href}
                  className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Social Icons & Cart - Desktop */}
        <div className="hidden lg:flex lg:items-center lg:gap-x-4">
          <span className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-200" aria-label="Instagram">
            <Instagram className="h-5 w-5" />
          </span>
          <span className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-200" aria-label="X (Twitter)">
            <XIcon className="h-5 w-5" />
          </span>
          <button
            onClick={openCart}
            className="relative text-gray-400 hover:text-[#D4AF37] transition-colors duration-200 ml-2"
            aria-label="Open cart"
          >
            <ShoppingCart className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 w-5 h-5 bg-[#D4AF37] text-black text-xs font-bold rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </div>

        {/* Cart & Mobile menu button */}
        <div className="lg:hidden flex items-center gap-3">
          <button
            onClick={openCart}
            className="relative text-gray-400 hover:text-[#D4AF37] transition-colors duration-200"
            aria-label="Open cart"
          >
            <ShoppingCart className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 w-5 h-5 bg-[#D4AF37] text-black text-xs font-bold rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
          <button
            type="button"
            className="text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-black border-t border-gray-800 animate-fade-in">
          <div className="px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.hasDropdown ? (
                  <div>
                    <button
                      className="flex items-center justify-between w-full text-base font-medium text-gray-300 hover:text-white transition-colors duration-200"
                      onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                    >
                      {item.name}
                      <ChevronDown className={`h-4 w-4 transition-transform ${mobileProductsOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {mobileProductsOpen && (
                      <div className="mt-2 pl-4 space-y-2">
                        {productCategories.map((category) => (
                          <Link
                            key={category.name}
                            href={category.href}
                            className="block text-sm text-gray-400 hover:text-white transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {category.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block text-base font-medium text-gray-300 hover:text-white transition-colors duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="flex items-center gap-x-4 pt-4 border-t border-gray-800">
              <span className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-200" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </span>
              <span className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-200" aria-label="X (Twitter)">
                <XIcon className="h-5 w-5" />
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
